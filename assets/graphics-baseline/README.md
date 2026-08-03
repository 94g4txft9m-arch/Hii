# Záväzná kópia grafiky (graphics baseline)

Tento priečinok je **záväzná (locked) kópia** finálnych grafických podkladov webu
GDPR Akadémia. Obnovenie do `assets/graphics/` (odkiaľ ich načítava web):

```bash
npm run restore:graphics
```

## Očakávané súbory

| Súbor | Popis | Požiadavky |
|---|---|---|
| `hero.png` | Hero kompozit Motúzová & Lacko (ľudia vpravo, biely priestor vľavo, magenta + navy šikmé panely — Canva kompozit) | Vždy najvyššie dostupné rozlíšenie: **min. 2400 px šírka, cieľ ~4K (3840 px)**. Žiadne zrnité screenshoty — iba natívny Canva export alebo AI upscale. |
| `team-motuzova.jpg` | Portrét — Zuzana Motúzová | Square formát (1:1), headroom nad vlasmi |
| `team-lacko.jpg` | Portrét — Pavel Lacko | Square formát (1:1), headroom nad vlasmi |
| `team-liptai.jpg` | Portrét — Tomáš Liptai | **Rovnaký square formát ako kolegovia**, headroom (nie orezané vlasy) |

## Poznámka k obnove z 3. 8. 2026

Pôvodné binárne podklady z predchádzajúcej pracovnej relácie sa nezachovali
v žiadnom git repozitári (neboli pushnuté). Web je postavený tak, že bez týchto
súborov zobrazí plnohodnotný CSS kompozit (šikmé panely + iniciály); po doplnení
súborov do tohto priečinka a spustení `npm run restore:graphics` sa automaticky
použijú fotografie.
