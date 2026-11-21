# Semaglutide Overdose — Recognition & Management

An interactive, referenced walkthrough of the algorithm for suspected
semaglutide overdose or intoxication — falsified-product recognition before
anything else, risk stratification into a limited versus a fuller workup,
and why decontamination, dialysis and a fixed toxicology observation window
all fail for this drug. Every box and decision point in the diagram can be
selected to reveal, in one place: what the step means, why the protocol
calls for it, and the sources behind it.

**Live site:** https://satbuhan.github.io/semaglutide-overdose-protocol/

**Authors:** Dr. Özgür Karcıoğlu & Dr. Satuk Buğra Han Bozatlı

This tool is part of a growing atlas of tools built the same way — see
[Clinical Algorithm Atlas](https://satbuhan.github.io/clinical-algorithm-atlas/)
for the hub page and the full list of sister tools.

## Why this exists

A flowchart alone tells a reader *what* to do at each step but not *why*,
and a reader outside the authors' own team cannot easily check the
evidence behind a specific threshold or check which parts of the figure are
the manuscript's own synthesis versus an externally adopted guideline
value. This page keeps the original algorithm exactly as authored, and
attaches the clinical reasoning and literature to each box without
cluttering the diagram itself.

The algorithm reproduced here is Figure 1 of: Girgin MC, Altas F, Kaytuoglu
N, Gulunay B, Vargun P, Sahin S, Kaya F, Beyoglu R, Bozkurt S, Unaldi M,
Karcioglu O. *Recognition and management of semaglutide overdose and
intoxication: a narrative review for clinicians.* DARU J Pharm Sci.
2027;35:9. [doi:10.1007/s40199-026-00673-3](https://doi.org/10.1007/s40199-026-00673-3)

## Status

This is a working version, built to be tested on both desktop and mobile.

- **Built directly from the published manuscript and its own Figure 1** —
  unlike several earlier tools in this atlas, this one did not need a
  retrofit: the manuscript (74-entry bibliography, every entry carrying its
  own DOI) and its own authored flowchart figure were both available from
  the start, condensed box-by-box via this atlas's standard condensation
  workflow (`tools/gemini-condensation-prompt.md`, run against ChatGPT
  rather than Gemini this time — the prompt is model-agnostic).
- **Reference verification — full independent re-verification, no
  exception requested or granted:** every one of the 74 entries in
  `REFERENCES` was independently located and checked against a DOI
  resolver, PubMed, or (for the two regulatory-agency publications with no
  DOI) the agency's own page — not accepted on trust from the manuscript's
  own bibliography or from the condensation. **Zero fabricated or
  mismatched references were found** — the cleanest independent-
  verification result in this atlas's history alongside
  `ccb-toxicity-protocol`.
- **Figure-versus-manuscript-text discrepancies, carried through as
  clinical cautions rather than silently resolved:** the condensation
  surfaced several places where Figure 1's own box text is narrower, or
  uses different wording, than the manuscript's prose or tables — most
  notably, the figure draws no outgoing connection from the "SUSPECT
  FALSIFIED PRODUCT" box back into the main pathway even though the
  manuscript's prose describes later steps as applying generally; the
  "≥10-fold error" higher-risk cutoff is not explicitly attributed to a
  specific reference; and the metformin/SGLT2-inhibitor withholding
  trigger and the beta-hydroxybutyrate/lipase testing conditions are each
  worded two different ways across the figure, the text and Table 3.
  Figure 1's own box text is transcribed exactly as authored in every
  case; each discrepancy is instead surfaced as a clinical caution on the
  relevant node, with both wordings given and neither silently preferred.
  See `METHODOLOGY.md` for the full registry.
- **One visual nuance kept from the figure itself:** "SUSPECT FALSIFIED
  PRODUCT" is drawn with a dashed outline in Figure 1 — reproduced here
  with the same dashed-border styling this atlas otherwise reserves for an
  aside/reminder box, even though this one is a genuine dead-end branch
  terminus with its own full citation trail, because that is how the
  authors actually drew it.

## Disclaimer

This is an academic / educational reference tool, not a substitute for
institutional protocol or bedside clinical judgement. Verify any
threshold or management step against current local protocol before
clinical use.

## How it's built

Plain HTML/CSS/JS, no build step and no framework — a single static site
that GitHub Pages can serve directly.

```
index.html          page structure
assets/style.css     design — same paper/ink/navy "journal" aesthetic as
                      the other tools, the standard branching-flowchart
                      3-column grid
assets/content.js     ← single source of truth for every node's text and
                      reference list. Edit this file to change what the
                      page says.
assets/app.js         rendering + interaction (builds the diagram and the
                      connector lines from content.js, handles the
                      click-to-expand panel on desktop and the bottom
                      sheet on mobile)
```

### Running it locally

No install needed:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

### Editing content

Open `assets/content.js`. Each entry in `NODES` is one box or decision
diamond from the algorithm (`meaning`, `rationale`, optional `cautions`
for figure-versus-manuscript-text discrepancies, and `refs` pointing at
numbered entries in `REFERENCES`, numbered exactly as the manuscript's own
bibliography — never renumbered). Add or edit a reference in `REFERENCES`
and point to it by `id` from any node. Never change a node's `label` or
`sub` text without the author team's sign-off — those fields are the
algorithm itself, transcribed byte-for-byte from Figure 1.

The "LOWER RISK → STEP 5" edge bypasses "STEP 4 — INVESTIGATIONS (higher
risk)" down the left margin, exactly as Figure 1 draws it (STEP 4 applies
only to the higher-risk branch) — see the `DETOUR` table in `assets/app.js`.

### Building the next tool in this atlas

See [`METHODOLOGY.md`](METHODOLOGY.md) — the full build/verification
process (fidelity rule, content schema, citation verification, QA steps),
written so that any collaborator or AI assistant can pick up this project
in a fresh session and build the next tool the same way.

## License

Content and code are released under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) —
share and adapt with attribution, non-commercially, under the same license.
