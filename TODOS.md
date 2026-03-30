# TODOS

## P1 — Replace the placeholder proof line with founder-approved proof
**What:** Swap the current generic portfolio proof line for a stronger, founder-approved proof artifact, ideally one attributed founder quote or one concrete timing fact with year and company.

**Why:** Phase 2 now has the right proof placement, but the current line is still a safe placeholder rather than the sharpest possible trust signal.

**Pros:** Stronger credibility, less dependence on logo borrowing, cleaner founder trust story.

**Cons:** Needs final source material and copy approval.

**Context:** The code path is shipped. What remains is content quality, not UI plumbing.

**Effort estimate:** human: ~30-60 min / CC: ~15 min

**Priority:** P1

**Depends on / blocked by:** Needs final proof source material from Geoffrey.

## P1 — Cut over `antifund.com` in Vercel and verify the redirect path
**What:** Point the apex and `www` records to Vercel, attach the domain in project settings, and verify SSL plus the `www` redirect.

**Why:** The site code is ready, but the approved Phase 2 plan also called for the production domain cutover.

**Pros:** Completes the public launch path, removes the preview-domain feel.

**Cons:** This is an operational change outside the repo and needs dashboard access.

**Context:** The implementation is ready for preview verification first, then the DNS move can happen cleanly.

**Effort estimate:** human: ~15-30 min / CC: blocked on dashboard access

**Priority:** P1

**Depends on / blocked by:** Vercel + DNS access.

## P2 — Verify Lighthouse mobile performance is at or above 90
**What:** Run a real Lighthouse mobile pass against the deployed preview or production URL and trim any remaining bottlenecks if the score misses 90.

**Why:** The plan called out a Lighthouse mobile target, and the current pass improved the likely problem areas but did not yet record a formal score.

**Pros:** Gives a concrete performance baseline before the final domain cutover.

**Cons:** Needs one extra verification loop outside the current smoke suite.

**Context:** This should happen after the preview deployment is up, since that is closer to the real asset/CDN path than local dev.

**Effort estimate:** human: ~20-30 min / CC: ~10-15 min

**Priority:** P2

**Depends on / blocked by:** Best run against Vercel preview or production.

## P1 — Build a deeper proof surface
**What:** Replace the single proof callout with a small proof system, likely one attributed founder quote or one concrete investment-timing fact plus one supporting proof block.

**Why:** The current homepage can become more credible with one proof element, but the long-term trust gap is larger than one line of copy.

**Pros:** Stronger legitimacy, less logo-borrowing risk, better founder confidence.

**Cons:** Needs real copy approvals and probably one more content iteration.

**Context:** Phase 2 keeps proof intentionally small so the team can ship the core homepage pass first. Once the CTA and proof position are validated, this should be the next thing to deepen.

**Effort estimate:** human: ~1-2 days / CC: ~30-60 min

**Priority:** P1

**Depends on / blocked by:** Needs final proof source material from Geoffrey and a shipped Phase 2 baseline.

## P2 — Add lightweight CTA instrumentation
**What:** Track whether the founder CTA is getting used, either with a lightweight analytics event or an alias-based email flow that makes inbound measurable.

**Why:** The plan now treats the founder CTA as the homepage's main action. Without measurement, the team cannot tell whether the new trust path is working.

**Pros:** Clearer feedback loop, better future copy/layout decisions.

**Cons:** Adds a small privacy / tooling decision and another production concern.

**Context:** This was intentionally deferred so the team can first prove the CTA placement and copy are correct. Instrumentation should come immediately after the CTA stabilizes.

**Effort estimate:** human: ~4 hours / CC: ~15-30 min

**Priority:** P2

**Depends on / blocked by:** Wait until the founder CTA target is finalized.

## P3 — Write a real DESIGN.md
**What:** Capture the homepage's design system, including typography roles, color rules, motion rules, and anti-slop guardrails.

**Why:** The current design review had to infer the system from the code and `SOUL.md`. That works once, but it does not scale cleanly to future edits.

**Pros:** Faster future planning, less taste drift, fewer accidental template regressions.

**Cons:** Documentation work with no immediate user-visible change.

**Context:** Phase 2 already clarifies the intended visual vocabulary. Once the implementation ships, codifying it in `DESIGN.md` will make the next round of changes easier and safer.

**Effort estimate:** human: ~1 day / CC: ~20-30 min

**Priority:** P3

**Depends on / blocked by:** Best done after the final Phase 2 implementation settles.
