# Native Toxic Test

`/toxic-test` uses the CBCM design and retrieves the active `toxictest` questionnaire from the existing Forms application. The header links here. All 17 current questions, their ordering, required fields, choices, 39-point scoring and result bands are preserved. Administrators continue editing questions and viewing responses in Forms. The fixture in `tests/fixtures` is a public question snapshot for tests, never a production fallback.

## Deployment

1. Deploy the companion Forms API change at `/api/campaign/toxic-test`.
2. Generate a new random server-only `CBCM_FORMS_BRIDGE_SECRET` of at least 32 characters. Set the same value in both Vercel projects, for the matching deployment environments. Never prefix this variable with `NEXT_PUBLIC_` or commit it.
3. Deploy CBCM with that variable. `FORMS_CAMPAIGN_API_URL` optionally overrides the default `https://forms.cenohio.org/api/campaign/toxic-test`; use the corresponding Forms preview URL for preview testing.
4. Check questionnaire loading and a designated test submission before promoting the campaign.

No Supabase credential is copied into CBCM. If the bridge is unavailable or unconfigured, the page offers a retry and the original Forms link. The original form remains unchanged and usable. No database migration is required.

## Progress and results

Answers are saved in the existing `questionnaire_responses` table after Continue. A seven-day HttpOnly, SameSite cookie holds only a draft identifier, resume token and question position. Answers are not stored in localStorage or URLs. Old-domain drafts do not automatically transfer to the new-domain cookie. Start again clears the browser session; it does not delete stored records.

The Forms server validates and calculates results. Submission conditionally finalizes one in-progress row, clears its resume token and rejects replay. Changed questionnaire versions require a restart. Failed saves retain the current input and do not advance. Results display only after accepted submission. Reloading a completed result starts a new session.

## Verification

Run `node --experimental-strip-types --test tests/toxic-test.test.mjs`, `npm run lint`, `npx tsc --noEmit` and `npm run build`.

Browser verification used the real CBCM proxy and Forms API against a local synthetic Supabase REST service: required validation, restore/previous navigation, failed save and submit retries, server scoring, token clearing, origin rejection, unavailable fallback, and desktop/mobile overflow checks passed. No production responses were written.

Preview images: [desktop](previews/toxic-test-desktop.jpg), [mobile](previews/toxic-test-mobile.jpg), [results](previews/toxic-test-result.jpg).
