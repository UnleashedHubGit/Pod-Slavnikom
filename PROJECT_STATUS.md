# Project Status — Pod Slavnikom Website

**Status:** Active — owner review

**Current phase:** Owner-confirmed content and responsive revision completed on
the preview branch. Awaiting Kevin and Igor review on the Netlify preview.

**Current branch:** `preview`

**Last verified completed milestone:** Finishing-stage preview work through
`preview @ 78afac8`.

## Completed in this revision

- Owner-confirmed restaurant introduction.
- Consolidated ravioli section and B2B enquiry.
- Groups and buses content.
- Updated Medvedja večerja content.
- Removal of public room-price and Booking.com discount guarantees.
- Check-in updated to 22.00.
- Package content and confirmed prices.
- SPA time windows and pricing.
- Detailed restaurant opening hours.
- Responsive fixes across About, Home, Contact, SPA, Packages, Restaurant, and
  Surroundings.
- Local lint, build, interactive verification, and screenshot QA completed.

**Current stop point:** Implementation and local QA complete. Ready for a
preview checkpoint commit and Netlify branch deploy. No merge to `main`
approved.

**Next action:** Push the preview checkpoint and send the Netlify preview URL
to Kevin and Igor for review.

## Deferred work

- Owner menu and wine-list PDFs.
- Degustation-menu scans.
- Owner ravioli and plated-food photographs.
- Manual room-photo mapping.
- Replacement of remaining stock room and ravioli images.
- Vikend Relax price.
- Vikend & SPA price.
- Decision whether La Cena dell'Orso remains on the Slovenian page.
- Confirmation whether the supplied screenshots were content-only or also a
  design request.
- SPA maximum capacity.
- SPA age rules.
- Final approved cancellation wording.

## Prior parked-state record (superseded by the revision above)

**Branch state:** `preview` is 5 commits ahead of `origin/main`, 0 behind.
Merge base is `origin/main`'s current HEAD, so this is a clean fast-forward
relationship — no divergent history.

**Observed deployment state:** The publicly reachable Netlify branch deploy
(`https://podslavnikom.netlify.app/`) appears aligned with commit `3af1cc2`,
three commits behind current `preview` HEAD (`78afac8`). This was observed,
not assumed — see the supporting evidence report cited below.

**Exact stop point:** Work stopped after finishing-stage content, branding,
routing, menu, and contact-link refinements — specifically after pushing
`78afac8` to `origin/preview`. No subsequent deploy trigger, no PR into
`main`, and no re-verification of the live site against that push.

## Unresolved decisions

- Whether the observed Netlify surface is staging, preview, or production.
- Whether `preview` should be redeployed.
- Whether and when `preview` should merge to `main`.
- Whether the client has approved the React version.
- Whether the final implementation remains planned for WordPress.

## Next measurable action on reactivation

1. Confirm the intended staging URL and branch model.
2. Redeploy `preview @ 78afac8` only after explicit approval.
3. Verify direct sub-route loading, footer, local logo, email, and social
   links against the redeployed build.
4. Then make a separate, explicit release decision (merge or not).

**Blocker:** Explicit owner/client review and release decision.

**Owner:** Patrik (AIthena delivery track), client IDEL d.o.o. — per Patrik-OS
`Master_Execution_Plan.md`.

**Proof required before release:**

- Deployment identifier for the refreshed build.
- Successful staging URL verification.
- Tested routes (including direct navigation to sub-routes).
- Client or delivery-owner approval.
- Explicit merge decision.

**Reactivation trigger:** Explicit client-review request, explicit approval
to refresh staging, or a scheduled delivery/release session.

---

No deployment was triggered and no merge was performed as part of recording
this status. Branch divergence (`preview` ahead of `main`) is intentional
pending a release decision — not an error condition.

Supporting evidence:
`C:\Projects\_Reviews\Pod_Slavnikom_State_Assessment_2026-07-24.md`
