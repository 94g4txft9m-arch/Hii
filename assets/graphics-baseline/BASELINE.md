# Grafická baseline — GDPR Akadémia

Záväzná kópia schválenej finálnej grafiky. **Neprepisovať bez súhlasu.**
Obnova do `public/`: `npm run restore:graphics`.

| Súbor | Použitie | Poznámka |
| --- | --- | --- |
| `hero-motuzova-lacko.png` | `public/brand/` — hero kompozit (2400×1200) | **Skutočná fotografia partnerov** (z `DSC_0682`, 1707×2560) na zaoblených šikmých paneloch magenta `#ef4a85` + navy `#242a64` so skleným glossom podľa dodanej grafiky; efekt zrkadlenia farieb na tvárach (magenta zľava, modrá sprava); panely kreslené programovo (3× supersampling, bez straty kvality) |
| `hero-people.png` | archív — staršia verzia výrezu (1024×1536) | Pôvodný AI podklad prvej verzie kompozitu; nahradený skutočnou fotografiou |
| `motuzova-lacko.jpg` | `public/team/` — spoločná fotografia (1707×2560) | Originál `DSC_0682-scaled.jpg` z webu kancelárie |
| `brand-stripes.png` | `public/brand/` — podklad navy pásov (2880×1620) | Dodaný pruhový dizajn, rasterizovaný programovo (diagonálne pásy slate/plum/purple s gradientmi); v sekciách pod tmavým navy závojom |
| `logo.svg` | `public/brand/` — primárne logo | Bajtovo identické s webom kancelárie (SHA-256 `7c85a277b3c8691e…`, pozri BRAND-AUDIT §2.1) |
| `zuzana-motuzova.png` | `public/team/` — portrét lektorky | Štvorec s headroomom, z akmotuzova.sk/o-nas |
| `pavel-lacko.png` | `public/team/` — portrét lektora | Štvorec s headroomom, z akmotuzova.sk/o-nas |
| `jozef-manuel-sencak.png` | `public/team/` — portrét (paralegal) | Pomer 878:900 podľa `lib/team.ts` |
| `tomas-liptai.png` | `public/team/` — portrét | Schválený štvorcový formát s headroomom (rovnaký ako kolegovia) |
| `motuzova-lacko-cutout.png` | `public/team/` — cutout partnerov | Skutočná fotografia s alfa kanálom (AI segmentácia z `DSC_0682`), pomer pre `TEAM_CUTOUT` |

Baseline uzamknutá: 3. 8. 2026.
