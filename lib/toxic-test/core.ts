// Shared public questionnaire contract. Keep identical to cenohio-forms/lib/campaign-toxic/core.ts.
export type Answer = string | string[] | Record<string, string>;
export type Answers = Record<string, Answer>;
export type Option = { label: string; value: string };
export type Question = {
  id: string;
  question_order: number;
  label: string;
  description: string | null;
  field_type: string;
  required: boolean;
  options: Option[] | string[] | null;
  conditional_logic: {
    enabled?: boolean;
    action?: "show" | "hide";
    match?: "all" | "any";
    conditions?: { questionId: string; operator: string; value?: unknown }[];
  } | null;
};
export type Questionnaire = { slug: string; title: string; description: string | null; version: string; questions: Question[] };
export type Score = { scorePoints: number; scoreMax: number; scorePercentage: number };
export const answerable = (q: Question) => !["section_header", "page_break"].includes(q.field_type);
export const normalized = (value: unknown) => String(value ?? "").trim().toLowerCase();
export function optionsFor(question: Question): Option[] {
  if (!Array.isArray(question.options)) return [];
  return question.options.map((item) => typeof item === "string" ? { label: item, value: item.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") } : { label: item.label, value: item.value || item.label.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") }).filter((item) => item.label && item.value);
}
function empty(value: unknown) { return value === undefined || value === null || (typeof value === "string" && value.trim() === "") || (Array.isArray(value) && value.length === 0); }
function matches(operator: string, answer: unknown, expected: unknown): boolean {
  const normal = (v: unknown) => typeof v === "string" ? v.trim().toLowerCase() : v;
  const contains = Array.isArray(answer) ? answer.map(normal).includes(normal(expected)) : typeof answer === "string" && answer.toLowerCase().includes(String(expected ?? "").toLowerCase());
  switch (operator) {
    case "equals": return normal(answer) === normal(expected);
    case "not_equals": return normal(answer) !== normal(expected);
    case "contains": return contains;
    case "not_contains": return !contains;
    case "is_empty": return empty(answer);
    case "is_not_empty": return !empty(answer);
    default: return false;
  }
}
export function visibleQuestions(questions: Question[], answers: Answers): Question[] {
  const effective: Answers = {};
  return questions.filter((question) => {
    const logic = question.conditional_logic;
    const conditions = logic?.conditions ?? [];
    const match = logic?.match === "any" ? conditions.some((c) => matches(c.operator, effective[c.questionId], c.value)) : conditions.every((c) => matches(c.operator, effective[c.questionId], c.value));
    const visible = !logic?.enabled || conditions.length === 0 || (logic.action === "hide" ? !match : match);
    if (visible && answerable(question) && answers[question.id] !== undefined) effective[question.id] = answers[question.id];
    return visible;
  });
}
export function validateAnswers(questions: Question[], input: unknown, complete: boolean) {
  const answers: Answers = {};
  const errors: Record<string, string> = {};
  if (!input || typeof input !== "object" || Array.isArray(input)) return { answers, errors: { form: "Invalid answers." } };
  const submitted = input as Record<string, unknown>;
  const clean: Answers = {};
  for (const question of questions) {
    if (!answerable(question) || submitted[question.id] === undefined) continue;
    const value = submitted[question.id];
    if (["name", "address"].includes(question.field_type)) {
      if (!value || typeof value !== "object" || Array.isArray(value)) { errors[question.id] = "Please complete this field."; continue; }
      const parts = question.field_type === "name" ? ["first", "last"] : ["street", "street2", "city", "state", "zip", "country"];
      clean[question.id] = Object.fromEntries(parts.map((part) => [part, typeof (value as Record<string, unknown>)[part] === "string" ? String((value as Record<string, unknown>)[part]).trim().slice(0, 250) : ""]));
    } else if (question.field_type === "checkbox") {
      if (!Array.isArray(value) || value.some((v) => typeof v !== "string")) { errors[question.id] = "Choose from the available options."; continue; }
      clean[question.id] = [...new Set(value as string[])];
    } else if (typeof value === "string" && value.length <= 5000) clean[question.id] = value.trim();
    else errors[question.id] = "Invalid answer.";
  }
  const visible = visibleQuestions(questions, clean);
  const visibleIds = new Set(visible.map((q) => q.id));
  for (const id of Object.keys(errors)) if (!visibleIds.has(id)) delete errors[id];
  for (const question of visible) {
    if (!answerable(question)) continue;
    const value = clean[question.id];
    if (complete && question.required) {
      if (question.field_type === "name" || question.field_type === "address") {
        const parts = question.field_type === "name" ? ["first", "last"] : ["street", "city", "state", "zip", "country"];
        if (!value || typeof value !== "object" || Array.isArray(value) || parts.some((p) => !value[p])) errors[question.id] = question.field_type === "name" ? "First and last name are required." : "Complete address information is required.";
      } else if (empty(value)) errors[question.id] = "This field is required.";
    }
    if (!empty(value)) {
      const options = optionsFor(question);
      if (question.field_type === "checkbox" && Array.isArray(value) && value.some((v) => !options.some((o) => o.value === v))) errors[question.id] = "Choose from the available options.";
      if (["radio", "select"].includes(question.field_type) && typeof value === "string" && !options.some((o) => o.value === value)) errors[question.id] = "Choose from the available options.";
      if (question.field_type === "email" && (typeof value !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) errors[question.id] = "Enter a valid email address.";
      if (question.field_type === "number" && (typeof value !== "string" || !Number.isFinite(Number(value)))) errors[question.id] = "Enter a valid number.";
    }
    if (value !== undefined) answers[question.id] = value;
  }
  return { answers, errors };
}
export function calculateScore(questions: Question[], answers: Answers): Score {
  let scorePoints = 0;
  let scoreMax = 0;
  for (const question of visibleQuestions(questions, answers)) {
    const options = optionsFor(question);
    if (question.field_type === "radio") {
      const yes = options.find((o) => normalized(o.value) === "yes" || normalized(o.label) === "yes");
      const no = options.find((o) => normalized(o.value) === "no" || normalized(o.label) === "no");
      if (!yes || !no) continue;
      scoreMax += 1;
      if (typeof answers[question.id] === "string" && [normalized(yes.value), normalized(yes.label)].includes(normalized(answers[question.id]))) scorePoints += 1;
    } else if (question.field_type === "checkbox") {
      scoreMax += options.length;
      const selected = answers[question.id];
      if (Array.isArray(selected)) scorePoints += new Set(selected.map((v) => options.find((o) => [normalized(o.value), normalized(o.label)].includes(normalized(v)))?.value).filter(Boolean)).size;
    }
  }
  return { scorePoints, scoreMax, scorePercentage: scoreMax ? Math.round(scorePoints / scoreMax * 100) : 0 };
}
// Existing Forms thresholds and result copy, retained verbatim.
export function resultLevel(percentage: number) {
  if (percentage >= 75) return { title: "Very High Number of Indicators", message: "Your answers show a very high number of toxic exposure and symptom indicators. Finding out more about how toxins accumulate in the body — and what can be done to get rid of them — would be especially valuable for you." };
  if (percentage >= 50) return { title: "High Number of Indicators", message: "Your answers show a high number of toxic exposure and symptom indicators. You would benefit from learning more about how toxins can affect the body and what can be done to help rid the body of accumulated toxins." };
  if (percentage >= 25) return { title: "Moderate Number of Indicators", message: "Your answers show a moderate number of toxic exposure and symptom indicators. While you may already take steps to limit your exposure, there may be more you can do. Find out more about how toxins can accumulate in the body and what can be done about them." };
  return { title: "Lower Number of Indicators", message: "Your answers indicate that you may already be doing a good job of protecting yourself from many common sources of toxic exposure. Even so, toxins can come from many sources. Find out more about how they can accumulate in the body and what you can do to help reduce their effects." };
}

export type Draft = { id: string; answers: Answers; resume_token: string };
export type StoredResponse = {
  id: string; questionnaire_id: string; answers: Answers; status: "in_progress" | "submitted";
  opened_at: string; started_at: string; updated_at: string; submitted_at: string | null; resume_token: string | null;
  score_points?: number | null; score_max?: number | null; score_percentage?: number | null;
};
export type ResponseStore = {
  find: (id: string, token: string) => Promise<Draft | null>;
  create: (row: StoredResponse) => Promise<void>;
  update: (id: string, token: string, patch: Partial<StoredResponse>) => Promise<boolean>;
};
export class CampaignError extends Error {
  status: number;
  fields?: Record<string, string>;
  constructor(message: string, status: number, fields?: Record<string, string>) { super(message); this.status = status; this.fields = fields; }
}
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export async function processOperation(snapshot: Questionnaire, questionnaireId: string, store: ResponseStore, body: Record<string, unknown>) {
  const operation = body.operation;
  if (!["load", "save", "submit"].includes(String(operation))) throw new CampaignError("Invalid operation.", 400);
  const id = body.responseId;
  const token = body.resumeToken;
  const hasSession = id !== undefined || token !== undefined;
  if (hasSession && (typeof id !== "string" || typeof token !== "string" || !uuid.test(id) || !uuid.test(token))) throw new CampaignError("Invalid draft session.", 400);
  if (operation === "load") {
    if (!hasSession) return { found: false };
    const draft = await store.find(id as string, token as string);
    return draft ? { found: true, responseId: draft.id, resumeToken: draft.resume_token, answers: validateAnswers(snapshot.questions, draft.answers, false).answers } : { found: false };
  }
  if (body.version !== snapshot.version) throw new CampaignError("This questionnaire has changed. Reload it before continuing.", 409);
  const checked = validateAnswers(snapshot.questions, body.answers, operation === "submit");
  if (Object.keys(checked.errors).length) throw new CampaignError("Please check your answers.", 422, checked.errors);
  const now = new Date().toISOString();
  const score = operation === "submit" ? calculateScore(snapshot.questions, checked.answers) : null;
  const patch: Partial<StoredResponse> = { answers: checked.answers, updated_at: now };
  if (score) Object.assign(patch, { status: "submitted", submitted_at: now, resume_token: null, score_points: score.scorePoints, score_max: score.scoreMax, score_percentage: score.scorePercentage });
  let responseId: string;
  let resumeToken: string | null;
  if (hasSession) {
    if (!await store.update(id as string, token as string, patch)) throw new CampaignError("This draft is no longer available. Please reload the test.", 409);
    responseId = id as string;
    resumeToken = token as string;
  } else {
    responseId = crypto.randomUUID();
    resumeToken = score ? null : crypto.randomUUID();
    await store.create({ id: responseId, questionnaire_id: questionnaireId, answers: checked.answers, status: score ? "submitted" : "in_progress", opened_at: now, started_at: now, updated_at: now, submitted_at: score ? now : null, resume_token: resumeToken, score_points: score?.scorePoints ?? null, score_max: score?.scoreMax ?? null, score_percentage: score?.scorePercentage ?? null });
  }
  return score ? { submitted: true, score, result: resultLevel(score.scorePercentage) } : { responseId, resumeToken };
}
