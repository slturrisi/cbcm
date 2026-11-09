import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const cookieName = "cbcm_toxic_draft";
const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" };
type Session = { responseId: string; resumeToken: string; step: number };
function session(request: NextRequest): Session | null {
  try {
    const value = JSON.parse(request.cookies.get(cookieName)?.value || "null");
    const uuid = /^[0-9a-f-]{36}$/i;
    return value && typeof value.responseId === "string" && uuid.test(value.responseId) && typeof value.resumeToken === "string" && uuid.test(value.resumeToken) ? { ...value, step: Number.isInteger(value.step) ? Math.max(0, Math.min(1000, value.step)) : 0 } : null;
  } catch { return null; }
}
function setSession(response: NextResponse, request: NextRequest, value: Session | null) {
  response.cookies.set(cookieName, value ? JSON.stringify(value) : "", { httpOnly: true, secure: request.nextUrl.protocol === "https:", sameSite: "lax", path: "/api/toxic-test", maxAge: value ? 60 * 60 * 24 * 7 : 0 });
}
async function upstream(method: "GET" | "POST", payload?: Record<string, unknown>) {
  const secret = process.env.CBCM_FORMS_BRIDGE_SECRET;
  if (!secret || secret.length < 32) return { status: 503, data: { error: "The test is temporarily unavailable. Please try again shortly." } };
  const url = new URL(process.env.FORMS_CAMPAIGN_API_URL || "https://forms.cenohio.org/api/campaign/toxic-test");
  if (url.protocol !== "https:" && !(process.env.NODE_ENV !== "production" && ["localhost", "127.0.0.1"].includes(url.hostname))) throw new Error("Invalid campaign endpoint");
  const response = await fetch(url, { method, headers: { Authorization: `Bearer ${secret}`, ...(method === "POST" ? { "Content-Type": "application/json" } : {}) }, body: payload ? JSON.stringify(payload) : undefined, cache: "no-store", signal: AbortSignal.timeout(15000), redirect: "error" });
  const data = await response.json();
  return { status: response.status, data };
}
const unavailable = () => NextResponse.json({ error: "The test is temporarily unavailable. Please try again shortly." }, { status: 503, headers });
export async function GET() {
  try { const result = await upstream("GET"); return NextResponse.json(result.status === 200 ? result.data : { error: "The test is temporarily unavailable. Please try again shortly." }, { status: result.status >= 400 ? 503 : 200, headers }); } catch { return unavailable(); }
}
export async function POST(request: NextRequest) {
  if (request.headers.get("origin") !== request.nextUrl.origin) return NextResponse.json({ error: "Invalid request origin." }, { status: 403, headers });
  if (!request.headers.get("content-type")?.startsWith("application/json")) return NextResponse.json({ error: "Expected JSON." }, { status: 415, headers });
  try {
    const text = await request.text();
    if (Buffer.byteLength(text) > 65536) return NextResponse.json({ error: "Request too large." }, { status: 413, headers });
    let body: Record<string, unknown>;
    try { const parsed = JSON.parse(text); if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error(); body = parsed; } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400, headers }); }
    const operation = body.operation;
    const saved = session(request);
    if (operation === "reset") { const response = NextResponse.json({ reset: true }, { headers }); setSession(response, request, null); return response; }
    if (operation === "position") { const response = NextResponse.json({ saved: true }, { headers }); if (saved) setSession(response, request, { ...saved, step: Number.isInteger(body.step) ? Math.max(0, Math.min(1000, Number(body.step))) : saved.step }); return response; }
    if (!["load", "save", "submit"].includes(String(operation))) return NextResponse.json({ error: "Invalid operation." }, { status: 400, headers });
    if (operation === "load" && !saved) return NextResponse.json({ found: false }, { headers });
    if (body.expectsDraft && !saved) return NextResponse.json({ error: "Your saved session is unavailable. Enable cookies and reload the test to continue." }, { status: 409, headers });
    const payload = { operation, ...(saved ? { responseId: saved.responseId, resumeToken: saved.resumeToken } : {}), ...(operation !== "load" ? { version: body.version, answers: body.answers } : {}) };
    const result = await upstream("POST", payload);
    if (result.status !== 200) return NextResponse.json({ error: result.status >= 500 ? "Your answers could not be saved. Please try again." : result.data.error || "Please check your answers.", fields: result.data.fields }, { status: result.status, headers });
    let data;
    if (operation === "load") data = result.data.found ? { found: true, answers: result.data.answers, step: saved?.step || 0 } : { found: false };
    else if (operation === "save") data = { saved: true };
    else data = { submitted: result.data.submitted === true, score: result.data.score, result: result.data.result };
    const response = NextResponse.json(data, { headers });
    if (operation === "save") setSession(response, request, { responseId: result.data.responseId, resumeToken: result.data.resumeToken, step: Number.isInteger(body.step) ? Math.max(0, Math.min(1000, Number(body.step))) : 0 });
    if (operation === "submit" || (operation === "load" && !result.data.found)) setSession(response, request, null);
    return response;
  } catch { return unavailable(); }
}
