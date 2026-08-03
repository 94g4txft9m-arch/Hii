# GDPR Akadémia — Motúzová & Lacko

Statický web projektu **gdpr-akademia**: praktické vzdelávanie v ochrane osobných
údajov od advokátskej kancelárie [Motúzová & Lacko](https://www.akmotuzova.sk/)
(kurzy pre DPO, GDPR dokumentácia, príprava na kontrolu ÚOOÚ, DPIA a balančné testy).

## Lokálne spustenie

```bash
npm run dev
# → http://127.0.0.1:3330
```

Web je čisté HTML + CSS bez build kroku — dá sa otvoriť aj priamo (`index.html`).

## Grafika

- Hero: kompozit Motúzová & Lacko — ľudia vpravo, biely priestor vľavo,
  magenta + navy šikmé panely. Vždy najvyššie dostupné rozlíšenie
  (min. 2400 px, cieľ ~4K / 3840 px). Žiadne zrnité screenshoty.
- Záväzná kópia grafických podkladov: [`assets/graphics-baseline/`](assets/graphics-baseline/)
  — obnovenie cez `npm run restore:graphics`.
- Portréty tímu: jednotný square formát (1:1) s headroomom (nie orezané vlasy).

## Nasadenie (GitHub Pages)

1. Zlúčte PR do vetvy `main`.
2. V repozitári otvorte **Settings → Pages → Build and deployment**:
   Source = *Deploy from a branch*, Branch = `main`, priečinok `/ (root)`, uložte.
3. Web bude o chvíľu dostupný na `https://94g4txft9m-arch.github.io/Hii/`.

Alternatívne je pripravená aj vetva `gh-pages` s rovnakým obsahom
(Source = `gh-pages`).

## Kontakt

- Organizácia kurzov: Tomáš Liptai — office.liptai@gmail.com, +420 776 883 265
- Kancelária: Motúzová & Lacko law firm, Grösslingová 62, 811 09 Bratislava —
  motuzova@akmotuzova.sk
