# How this tool was built — methodology

This tool is part of the Clinical Algorithm Atlas, co-authored by Dr. Özgür
Karcıoğlu and Dr. Satuk Buğra Han Bozatlı. The general build methodology —
repo structure, content schema, citation-verification discipline, QA
steps — is shared across every tool in the atlas; this file states it as
it applied to *this* tool specifically. For the atlas-wide version (and
for building the next tool), see any sister repo's own `METHODOLOGY.md`,
e.g. `dapagliflozin-overdose-protocol`.

## The one rule that overrides everything else

The authored algorithm — every box, every decision diamond, every drug
name, every numeric dose — stays byte-for-byte unchanged from what the
authors drew. Only supplementary explanatory/academic content (meaning,
rationale, cautions, citations) was added. Node `label`/`sub` text was
never "fixed," paraphrased, rounded or standardized — each was verified
against the manuscript's own condensation (see below) and, directly, the
source figure image itself.

**Claude did not originate this tool's clinical decision logic.** The
algorithm is Figure 1 of the manuscript (full citation in `README.md`),
drawn by the author team; the build process below is literature/citation
research and engineering (transcribing an already-authored figure
byte-exact, adding explanatory content), never invention of the pathway
itself.

## Source material

- The manuscript's own published Figure 1 (image, inspected directly for
  box text, border style — solid vs dashed — and connector routing, not
  inferred from a text description alone).
- A box-by-box condensation of the manuscript (metadata, abstract,
  methodology, per-box clinical content tagged to the manuscript's own
  reference numbers, a separate list of externally-guideline-sourced
  details, and the complete 74-entry reference list verbatim) produced
  against this atlas's standard condensation prompt
  (`clinical-algorithm-atlas/tools/gemini-condensation-prompt.md`, v3) —
  run against ChatGPT rather than Gemini this time. The prompt is written
  to be model-agnostic and the output format (and hard rules — never
  invent, never paraphrase a number, never renumber or drop a reference)
  is identical regardless of which model produces it.

## Citation verification — full independent re-verification

Every one of the 74 entries in `REFERENCES` was independently located and
checked against a primary source — a DOI resolver, PubMed, or (for the two
non-DOI regulatory-agency publications, refs 29 and 33) the agency's own
page — rather than accepted on trust from the manuscript's own bibliography
or from the condensation. This was **not** requested as an exception to
this atlas's default no-trust verification policy (the policy that has
been waived, on explicit author request only, for a small set of other
tools in this atlas); it was done in full for this tool.

Two references needed a second, extended search before being confirmed:
the manuscript's own DOI itself, and reference 27 (a preclinical
toxicology study in a less-indexed journal) — both ultimately confirmed
against their publisher pages. **Result: zero fabricated or mismatched
references** — every entry's title, authors, journal, year and DOI match
what the independent search found. This ties `ccb-toxicity-protocol` for
the cleanest independent-verification result in this atlas's history,
against a prior track record that has caught real fabrications in other
tools (`cwa-blood-gas-protocol`: 5; `wbct-trauma-protocol`: 2;
`tenecteplase-alteplase-stemi-protocol`: 1; `vasopressor-shock-protocol`: 1).

## Figure-versus-manuscript-text discrepancies

Carried through as clinical cautions on the relevant node rather than
silently resolved — both wordings/values given, neither preferred:

- **No return edge from the falsified-product branch.** Figure 1 draws no
  outgoing connection from "SUSPECT FALSIFIED PRODUCT" back into exposure
  characterisation, investigation, management or disposition, even though
  the manuscript's prose describes those later steps as applying
  generally. This page follows the figure literally.
- **"≥10-fold error" attribution.** The higher-risk cutoff is the figure's
  own number but is not explicitly attributed to an external guideline or
  to the specific case reports that describe ten-fold errors.
- **Metformin/SGLT2-inhibitor withholding trigger.** Worded once as
  metformin alone during severe vomiting, elsewhere as both metformin and
  the SGLT2 inhibitor together, and tied to acute kidney injury in a third
  place — the figure applies the severe-vomiting trigger to both drugs.
- **Beta-hydroxybutyrate testing condition.** "Where oral intake has been
  minimal" (manuscript text) versus "if poor intake" (Table 3) versus no
  condition at all (the figure box itself).
- **Serum lipase testing condition.** "If abdominal pain" (figure) versus
  "where abdominal pain is prominent" (manuscript text) versus a longer
  severity-based description elsewhere in the same manuscript.
- **"NO charcoal" omits its route qualification.** The manuscript's prose
  specifies activated charcoal has no role specifically for an *injected*
  drug; the figure's "NO charcoal" line doesn't carry that qualifier.
- **Lower-risk criterion narrower than the prose.** The figure's "No
  insulin or sulfonylurea" is narrower than the manuscript's own broader
  "no diabetes therapy" phrasing for the same criterion.
- **"Paediatric exposure" broader than the prose.** The figure and Table 3
  both use the broad "paediatric exposure" as an admission criterion; the
  manuscript's own text is narrower ("inadvertent paediatric injection of
  a substantial adult dose").
- **"Suspected" qualifier inconsistency.** The figure's ADMIT box omits
  "suspected" before "pancreatitis or ketoacidosis", which the manuscript
  text and Table 3 both retain.
- **No replacement observation interval.** The manuscript explicitly
  declines to supply one, having stated that the conventional 6–8 hour
  toxicology window is inadequate for this drug.

## content.js schema (as used in this tool)

- `REFERENCES`: `{id, kind, text, url}`, numbered exactly as the
  manuscript's own bibliography (ids 1–74, never renumbered).
- `NODES`: `{id, type, label, sub?, meaning, rationale, cautions?[],
  refs[], tone?}`.
  - `type: "terminal"` (solid background, `.node--terminal`) — the entry
    box and the three true end-of-branch boxes with no outgoing edges:
    `falsified_product`, `discharge`, `admit`.
  - `type: "decision"` with `decision: true` in `LAYOUT` — the single
    diamond, `hypo_decision` ("Severe or recurrent hypoglycaemia?"), the
    only fork in Figure 1 drawn as an actual diamond with YES/NO labels.
  - `type: "branch"` — `lower_risk` / `higher_risk`, the destination boxes
    of the STEP 3 fork, which the figure draws as a plain forked line with
    **no** diamond and **no** YES/NO labels on either branch — preserved
    as such; `decision: true` and invented branch labels were deliberately
    not added here.
  - `type: "process"` — the sequential STEP 1/2/3/4/5/6 boxes.
  - `tone: "note"` on `falsified_product` — this box is drawn with a
    dashed outline in Figure 1 itself (every other box is solid), so the
    dashed-border CSS class is applied here for visual fidelity to the
    actual figure, even though this atlas's other tools reserve that same
    class for an unconnected aside/reminder box outside the main flow.
    `falsified_product` is not an aside — it is a genuine branch
    terminus, hence `type: "terminal"` and `tone: "note"` are both set.
  - `tone: "key"` — the entry box and STEP 5 (the central "no antidote"
    supportive-management box).
  - `tone: "alarm"` — `higher_risk` and `admit`, the two escalation
    destinations.
- `GLOSSARY`: `{match, full?, def}` — AKI, GLP-1, euglycaemic ketoacidosis,
  beta-hydroxybutyrate, anion gap, tachyphylaxis, POCUS, falsified
  product, C-peptide.
- `AGENTS`: flat list for rendering-only name emphasis — Semaglutide,
  Metformin, Insulin, Dextrose (every name that actually appears inside a
  box's own `label`/`sub` text; this never alters the text itself).

## Rendering / SVG edge routing (`app.js`)

Three structural choices, all confirmed against the figure image directly
rather than assumed by analogy to another tool:

1. **`hypo_decision` (col-center, diamond) with `falsified_product`
   (col-right) and `step2` (col-left) sharing its row.** Figure 1 shows
   both boxes immediately below the diamond, side by side — not `step2`
   on its own full-width row underneath. The grid's auto-placement
   (document order + column assignment, no explicit row numbers) puts all
   three in the same row because none of their column assignments
   conflict; the diamond's `align-self: center` then centers it within
   the row height set by the two taller boxes flanking it.
2. **`lower_risk → step5` bypasses `step4` down the left margin,** exactly
   as Figure 1 draws it (STEP 4 — INVESTIGATIONS applies only to the
   higher-risk branch; LOWER RISK's own line in the source figure visibly
   routes around it rather than crossing through it). Implemented as a
   `DETOUR` table entry (`{obstacle: "step4", side: "left", clearance:
   18}`) that routes the edge around `step4`'s live bounding rect at draw
   time — confirmed by rendering and visually inspecting the resulting
   path, not assumed to work from the table entry alone.
3. **`falsified_product` gets both `type: "terminal"` and `tone: "note"`**
   (see schema section above) — the two fields are independent CSS class
   additions, so a box can be a structural terminus (solid paper
   background, shown as `type: "terminal"` in its own detail-panel tag)
   and still carry the dashed border the source figure actually drew.

## QA performed before this tool was considered done

- `node --check` on both `content.js` and `app.js`.
- Served locally (`python3 -m http.server`) and driven with Playwright at
  a desktop (1360×1400) and mobile (412×2600) viewport; screenshots
  inspected directly, not just checked for the absence of thrown errors.
- The only console errors on either viewport were blocked cross-origin
  requests to the hub's `concepts.json`/`chat-widget.js`/
  `calculator-widget.js` (expected in this build sandbox's network
  policy; each fetch fails closed and non-blocking in prime production,
  same as every other tool in the atlas) — no errors from this tool's own
  code.
- Clicked a representative sample of nodes (including the diamond and the
  dashed-border terminal node) and read the rendered detail panel back,
  confirming `meaning`/`rationale`/`cautions`/reference chips all render,
  and that the `C-peptide` glossary term is click-to-expand inside the
  `falsified_product` panel.
- Confirmed all 74 references render in the references list with correct
  DOI links, by reading the first and last list entries back from the
  live DOM.
- Visually confirmed the `lower_risk → step5` DETOUR path actually curves
  around `step4`'s rendered box rather than crossing through it.
- Grepped `NODES` label/sub text against the condensation's own "Exact box
  text" transcription for every one of the 13 boxes/diamond, confirming
  byte-for-byte match, both before and after later reference-array edits
  made to several nodes' `refs` fields.

## Tone / working style

Direct, informal Turkish in conversation. Explicit instructions and honest
critical feedback over reassurance — if something is broken or an
assumption turns out wrong (as the dashed-border question above did,
mid-build), say so plainly and show the correction rather than quietly
rewriting history.
