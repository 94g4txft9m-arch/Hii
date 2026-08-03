# AUDIT-AFTER.md

Porovnanie stavu **pred** principal-architect auditom a **po** remediácii (28. 7. 2026).

## Skóre (orientačné)

| Oblasť | Pred | Po | Poznámka |
| --- | ---: | ---: | --- |
| A11y / WCAG CTA | 4/10 | 9/10 | Magenta-600 CTA; pending text → 500 |
| Formulár / lead-gen | 2/10 | 9/10 | API ready; produkcia potrebuje Resend |
| SEO / canonical | 4/10 | 9/10 | 308, canonical bez `/`, noindex mimo prod |
| Heading / sémantika | 5/10 | 9/10 | Skutočné H1; hierarchy opravená |
| Performance (hero/motion) | 6/10 | 8/10 | quality 82, bez framer-motion |
| Legal / trust | 3/10 | 8/10 | Skutočné privacy/cookies stránky |
| Content honesty | 4/10 | 9/10 | Žiadne falošné termíny/referencie v UI |
| Ops / CI | 2/10 | 8/10 | typecheck, lint, placeholders, build |
| **Celkové produkčné** | **~4/10** | **~8.5/10** | Launch-ready po env + legal review |

## Critical — stav po remediácii

| ID | Pred | Po |
| --- | --- | --- |
| C1 Magenta contrast | Fail | **Fixed** |
| C2 Form stub | Fail | **Fixed** (env dependent send) |
| C3 Canonical/redirects | Fail | **Fixed** |
| C4 Hero H1 | Fail | **Fixed** |
| C5 Hero images | Partial | **Fixed** |
| C6 Privacy stubs | Fail | **Fixed** |
| C7 Placeholders in UI | Fail | **Fixed** (+ CI gate) |
| C8 CTA vs reality | Fail | **Fixed** |

## Remaining issues by priority

### Critical
- Žiadne otvorené critical v kóde.
- **Pre-launch blocker mimo kódu:** nastaviť Resend (`RESEND_API_KEY` + From doména), inak formulár v produkcii vráti 503.

### High
- Plausible / cookie banner — Analytics je pridané; cookie súhlas podľa politiky klientky ešte nie.
- Konkrétne CourseInstance dátumy — zámerne chýbajú (bez falošných termínov).

### Medium
- M7 Adjacent same-surface spacing — len Bridge upravený.
- M10 Konštantná výška headeru — voliteľné, neimplementované.
- Legal texty: `[Klient: …]` poznámky na privacy/cookies.
- SAK číslo, referencie, firemný počet osôb — čakajú na klientku (`CONTENT-STATUS.md`).

### Low
- Dead CSS pre `.brand-bands` môže ostať (asset ešte v `public/`); neškodí runtime.
- OG image používa systémové fonty (edge) — vizuálne OK, nie brand webfonty.

## Production readiness verdict

**Áno — s podmienkami.**

Kód je pripravený na produkčný deploy landing page:
- žiadne mailto/alert stuby ako primárna cesta,
- žiadne UI `DOPLNIŤ`,
- SEO/robots bezpečné pre preview,
- security headers, error pages, CI.

**Pred go-live musí klient/ops:**
1. env pre Resend + SITE_URL,
2. schváliť privacy/cookies texty,
3. (voliteľne) doplniť SAK / referencie / termíny podľa `CONTENT-STATUS.md`.

Bez Resend kľúča je stránka stále zobraziteľná a SEO-ready; formulár len nebude doručovať e-maily (jasná chybová odpoveď).
