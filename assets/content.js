/* =========================================================================
   Content data for the interactive "suspected semaglutide overdose"
   recognition and management pathway. Every clinical claim below is
   paraphrased from the cited source, not copied from it. Reference numbers
   match REFERENCES below and the printed list in index.html.

   Source: Girgin MC, Altas F, Kaytuoglu N, Gulunay B, Vargun P, Sahin S,
   Kaya F, Beyoglu R, Bozkurt S, Unaldi M, Karcioglu O. Recognition and
   management of semaglutide overdose and intoxication: a narrative review
   for clinicians. DARU J Pharm Sci. 2027;35:9.
   https://doi.org/10.1007/s40199-026-00673-3

   This tool's algorithm (Figure 1, p. 9 of the manuscript) is reproduced,
   unchanged, as six steps plus one side branch. Reference numbers in
   `refs` below are the manuscript's OWN numbering (1-74), carried through
   unrenumbered, exactly as the hard rule in this atlas's condensation
   workflow requires. The manuscript was condensed box-by-box (figure
   labels transcribed verbatim, clinical content tagged to the manuscript's
   own reference numbers) before this page was built; every one of the 74
   references in that condensation was independently re-verified against a
   DOI resolver, PubMed, or (for the two non-DOI regulatory publications)
   the agency's own page — not taken on trust from the condensation.

   STRUCTURAL NOTE: the figure draws no outgoing connection from the
   "SUSPECT FALSIFIED PRODUCT" box back into the main pathway (exposure
   characterisation, risk stratification, investigation, management, or
   disposition), even though the manuscript's prose describes those later
   steps as applying generally. This page follows the figure literally —
   that box is treated as the end of its branch, not silently reconnected.

   VERIFIED: 2026-11-21
   ========================================================================= */

const VERIFIED = "2026-11-21";

const REFERENCES = [
  { id: 1, kind: "Mechanistic review", text: "Drucker DJ. Mechanisms of action and therapeutic application of glucagon-like peptide-1. Cell Metab. 2018;27(4):740-56.", url: "https://doi.org/10.1016/j.cmet.2018.03.001" },
  { id: 2, kind: "Medicinal chemistry — discovery paper", text: "Lau J, Bloch P, Schaffer L, et al. Discovery of the once-weekly glucagon-like peptide-1 (GLP-1) analogue semaglutide. J Med Chem. 2015;58(18):7370-80.", url: "https://doi.org/10.1021/acs.jmedchem.5b00726" },
  { id: 3, kind: "Randomized controlled trial (SUSTAIN 6)", text: "Marso SP, Bain SC, Consoli A, et al. Semaglutide and cardiovascular outcomes in patients with type 2 diabetes. N Engl J Med. 2016;375(19):1834-44.", url: "https://doi.org/10.1056/NEJMoa1607141" },
  { id: 4, kind: "Randomized controlled trial (STEP 1)", text: "Wilding JPH, Batterham RL, Calanna S, et al. Once-weekly semaglutide in adults with overweight or obesity. N Engl J Med. 2021;384(11):989-1002.", url: "https://doi.org/10.1056/NEJMoa2032183" },
  { id: 5, kind: "Randomized controlled trial (STEP 2)", text: "Davies M, Faerch L, Jeppesen OK, et al. Semaglutide 2.4 mg once a week in adults with overweight or obesity, and type 2 diabetes (STEP 2): a randomised, double-blind, double-dummy, placebo-controlled, phase 3 trial. Lancet. 2021;397(10278):971-84.", url: "https://doi.org/10.1016/S0140-6736(21)00213-0" },
  { id: 6, kind: "Randomized controlled trial (SELECT)", text: "Lincoff AM, Brown-Frandsen K, Colhoun HM, et al. Semaglutide and cardiovascular outcomes in obesity without diabetes. N Engl J Med. 2023;389(24):2221-32.", url: "https://doi.org/10.1056/NEJMoa2307563" },
  { id: 7, kind: "Randomized controlled trial (PIONEER 6)", text: "Husain M, Birkenfeld AL, Donsmark M, et al. Oral semaglutide and cardiovascular outcomes in patients with type 2 diabetes. N Engl J Med. 2019;381(9):841-51.", url: "https://doi.org/10.1056/NEJMoa1901118" },
  { id: 8, kind: "Narrative review", text: "Manoria PC. The obesity drug revolution: new frontiers in pharmacotherapy. Cureus. 2025;17(11):e96713.", url: "https://doi.org/10.7759/cureus.96713" },
  { id: 9, kind: "Poison-centre surveillance", text: "Gaw CE, Hays HL, Kemp CA, et al. Glucagon-like peptide-1 receptor agonist cases reported to United States poison centers, 2017-2022. J Med Toxicol. 2024;20(2):193-204.", url: "https://doi.org/10.1007/s13181-024-00999-x" },
  { id: 10, kind: "Poison-centre surveillance", text: "Senthilkumar A, Hays HL, Kistamgari S, et al. Comparison of pediatric and adult glucagon-like peptide-1 receptor agonist exposures reported to United States poison centers, 2017-2024. J Med Toxicol. 2026;22(2):263-74.", url: "https://doi.org/10.1007/s13181-026-01128-6" },
  { id: 11, kind: "Population-based study", text: "McIntyre RS, Kwan ATH, Mansur RB, et al. Increased reporting of accidental overdose with glucagon-like peptide-1 receptor agonists: a population-based study. Exp Opin Drug Saf. 2026;25(4):677-82.", url: "https://doi.org/10.1080/14740338.2024.2430306" },
  { id: 12, kind: "Case series — direct overdose evidence", text: "Lambson JE, Flegal SC, Johnson AR. Administration errors of compounded semaglutide reported to a poison control center - case series. J Am Pharm Assoc. 2023;63(5):1643-5.", url: "https://doi.org/10.1016/j.japh.2023.06.017" },
  { id: 13, kind: "Case series — direct overdose evidence", text: "Wiener BG, Gnirke M, Vassallo S, Smith SW, Su MK. Challenges with glucagon-like peptide-1 (GLP-1) agonist initiation: a case series of semaglutide overdose administration errors. Clin Toxicol. 2024;62(2):131-3.", url: "https://doi.org/10.1080/15563650.2024.2322049" },
  { id: 14, kind: "Case report and literature review", text: "Diec CB, Cook EA, Nguyen NT. Asymptomatic subcutaneous semaglutide overdose: a case report and literature review. J Pharm Pract Adv. 2025 online ahead of print.", url: "https://doi.org/10.1177/08971900251335111" },
  { id: 15, kind: "Pharmacokinetic review", text: "Hall S, Isaacs D, Clements JN. Pharmacokinetics and clinical implications of semaglutide: a new glucagon-like peptide (GLP)-1 receptor agonist. Clin Pharmacokinet. 2018;57(12):1529-38.", url: "https://doi.org/10.1007/s40262-018-0668-z" },
  { id: 16, kind: "Population pharmacokinetic analysis", text: "Carlsson Petri KC, Ingwersen SH, Flint A, Zacho J, Overgaard RV. Semaglutide s.c. once weekly in type 2 diabetes: a population pharmacokinetic analysis. Diabetes Ther. 2018;9(4):1533-47.", url: "https://doi.org/10.1007/s13300-018-0458-5" },
  { id: 17, kind: "Single poison-centre experience", text: "Marshall S, Ryan E, Rivera J, et al. GLP-1 receptor agonist exposures are increasingly common and generally associated with mild symptoms: a single poison center experience. J Med Toxicol. 2024;20(3):278-85.", url: "https://doi.org/10.1007/s13181-024-01008-x" },
  { id: 18, kind: "Pooled phase IIIa trial safety analysis", text: "Aroda VR, Aberle J, Bardtrum L, et al. Safety and tolerability of semaglutide across the SUSTAIN and PIONEER phase IIIa clinical trial programmes. Diabetes Obes Metab. 2023;25(5):1385-97.", url: "https://doi.org/10.1111/dom.14990" },
  { id: 19, kind: "Systematic analysis of published trials", text: "Bettge K, Kahle M, Abd El Aziz MS, Meier JJ, Nauck MA. Occurrence of nausea, vomiting and diarrhoea reported as adverse events in clinical trials studying glucagon-like peptide-1 receptor agonists: a systematic analysis of published clinical trials. Diabetes Obes Metab. 2017;19(3):336-47.", url: "https://doi.org/10.1111/dom.12824" },
  { id: 20, kind: "Randomized controlled trial (SUSTAIN 1)", text: "Sorli C, Harashima SI, Tsoukas GM, et al. Efficacy and safety of once-weekly semaglutide monotherapy versus placebo in patients with type 2 diabetes (SUSTAIN 1). Lancet Diabetes Endocrinol. 2017;5(4):251-60.", url: "https://doi.org/10.1016/S2213-8587(17)30013-X" },
  { id: 21, kind: "Randomized controlled trial (STEP 3)", text: "Wadden TA, Bailey TS, Billings LK, et al. Effect of subcutaneous semaglutide vs placebo as an adjunct to intensive behavioral therapy on body weight in adults with overweight or obesity: the STEP 3 randomized clinical trial. JAMA. 2021;325(14):1403-13.", url: "https://doi.org/10.1001/jama.2021.1831" },
  { id: 22, kind: "Randomized controlled trial (STEP 4)", text: "Rubino D, Abrahamsson N, Davies M, et al. Effect of continued weekly subcutaneous semaglutide vs placebo on weight loss maintenance in adults with overweight or obesity: the STEP 4 randomized clinical trial. JAMA. 2021;325(14):1414-25.", url: "https://doi.org/10.1001/jama.2021.3224" },
  { id: 23, kind: "Randomized controlled trial (STEP 5)", text: "Garvey WT, Batterham RL, Bhatta M, et al. Two-year effects of semaglutide in adults with overweight or obesity: the STEP 5 trial. Nat Med. 2022;28(10):2083-91.", url: "https://doi.org/10.1038/s41591-022-02026-4" },
  { id: 24, kind: "Randomized controlled trial (STEP 8)", text: "Rubino DM, Greenway FL, Khalid U, et al. Effect of weekly subcutaneous semaglutide vs daily liraglutide on body weight in adults with overweight or obesity without diabetes: the STEP 8 randomized clinical trial. JAMA. 2022;327(2):138-50.", url: "https://doi.org/10.1001/jama.2021.23619" },
  { id: 25, kind: "Randomized controlled trial (SURMOUNT-1, class comparator)", text: "Jastreboff AM, Aronne LJ, Ahmad NN, et al. Tirzepatide once weekly for the treatment of obesity. N Engl J Med. 2022;387(3):205-16.", url: "https://doi.org/10.1056/NEJMoa2206038" },
  { id: 26, kind: "Real-world pooled safety analysis (SURE programme)", text: "Yale JF, Bodholdt U, Catarig AM, et al. Real-world safety profile of once-weekly semaglutide in people with type 2 diabetes: analysis of pooled data from the SURE programme. Diabetes Obes Metab. 2024;26(10):4429-40.", url: "https://doi.org/10.1111/dom.15794" },
  { id: 27, kind: "Preclinical toxicology study", text: "Vishwanath C, Krishnachari K, Adiga GP, et al. Toxicity of semaglutide upon sub-chronic administration in rabbits. Toxicol Res. 2025;42(1):1-17.", url: "https://doi.org/10.1007/s43188-025-00308-w" },
  { id: 28, kind: "Poison-centre retrospective review", text: "Ho RY, Regelman H, Ma A, et al. Changes in glucagon-like peptide-1 receptor agonist (GLP-1 RA) exposures following recent demand for weight management: a retrospective review of California Poison Control System data. J Pharm Technol. 2025;41(4):165-73.", url: "https://doi.org/10.1177/87551225251332212" },
  { id: 29, kind: "Regulatory safety alert", text: "Therapeutic Goods Administration. Counterfeit Ozempic pens detected and adverse event reported. Canberra: Australian Government Department of Health and Aged Care; 2024.", url: "https://www.tga.gov.au/safety/safety-monitoring-and-information/safety-alerts/counterfeit-ozempic-pens-detected-and-adverse-event-reported" },
  { id: 30, kind: "Case report — direct overdose evidence", text: "Acosta A, Fanco A, Rohan H, Elfessi Z. Acute pancreatitis and euglycemic non-diabetic ketoacidosis caused by an intentional semaglutide overdose. JEM Rep. 2025;4:100139.", url: "https://doi.org/10.1016/j.jemrpt.2025.100139" },
  { id: 31, kind: "Case report — class comparator (liraglutide)", text: "Solverson KJ, Lee H, Doig CJ. Intentional overdose of liraglutide in a non-diabetic patient causing severe hypoglycemia. Can J Emerg Med. 2018;20(2):S61-3.", url: "https://doi.org/10.1017/cem.2017.439" },
  { id: 32, kind: "Case report — class comparator (liraglutide)", text: "Nakanishi R, Hirose T, Tamura Y, Fujitani Y, Watada H. Attempted suicide with liraglutide overdose did not induce hypoglycemia. Diabetes Res Clin Pract. 2013;99(1):e3-4.", url: "https://doi.org/10.1016/j.diabres.2012.10.017" },
  { id: 33, kind: "Regulatory pharmacovigilance communication", text: "European Medicines Agency. Meeting highlights from the Pharmacovigilance Risk Assessment Committee (PRAC) 8-11 April 2024: GLP-1 receptor agonists - available evidence not supporting link with suicidal and self-injurious thoughts and actions. Amsterdam: EMA; 2024.", url: "https://www.ema.europa.eu/en/news/meeting-highlights-pharmacovigilance-risk-assessment-committee-prac-8-11-april-2024" },
  { id: 34, kind: "Pharmacovigilance database analysis", text: "Ruggiero R, Mascolo A, Spezzaferri A, et al. Glucagon-like peptide-1 receptor agonists and suicidal ideation: analysis of real-world data collected in the European pharmacovigilance database. Pharmaceuticals (Basel). 2024;17(2):147.", url: "https://doi.org/10.3390/ph17020147" },
  { id: 35, kind: "Pharmacovigilance database replication study", text: "McIntyre RS, Mansur RB, Rosenblat JD, Kwan ATH. Glucagon-like peptide-1 receptor agonists (GLP-1 RAs) and suicidality: a replication study using reports to the World Health Organization pharmacovigilance database (VigiBase). J Affect Disord. 2025;369:922-7.", url: "https://doi.org/10.1016/j.jad.2024.10.062" },
  { id: 36, kind: "Observational cohort study", text: "Sodhi M, Rezaeianzadeh R, Kezouh A, Etminan M. Risk of gastrointestinal adverse events associated with glucagon-like peptide-1 receptor agonists for weight loss. JAMA. 2023;330(18):1795-7.", url: "https://doi.org/10.1001/jama.2023.19574" },
  { id: 37, kind: "Critique/commentary", text: "Suissa K, Cromer SJ, Patorno E. GLP-1 receptor agonists and gastrointestinal adverse events. JAMA. 2024;331(10):884-5.", url: "https://doi.org/10.1001/jama.2024.0046" },
  { id: 38, kind: "Systematic review", text: "Takrori E, Peshin S, Singal S. Gastrointestinal adverse effects of anti-obesity medications in non-diabetic adults: a systematic review. Medicina (Kaunas). 2025;61(11):1987.", url: "https://doi.org/10.3390/medicina61111987" },
  { id: 39, kind: "Systematic review and meta-analysis (therapeutic-dose baseline)", text: "Chiang CH, Jaroenlapnopparat A, Cakir Colak S, et al. Glucagon-like peptide-1 receptor agonists and gastrointestinal adverse events: a systematic review and meta-analysis. Gastroenterology. 2025;169(6):1268-81.", url: "https://doi.org/10.1053/j.gastro.2025.06.003" },
  { id: 40, kind: "Case report — class comparator (liraglutide)", text: "Nafisah SB, Almatrafi D, Al-Mulhim K. Liraglutide overdose: a case report and an updated review. Turk J Emerg Med. 2020;20(1):46-9.", url: "https://doi.org/10.4103/2452-2473.276386" },
  { id: 41, kind: "Case report — class comparator (liraglutide)", text: "Rotella JA, Wong A. Liraglutide toxicity presenting to the emergency department: a case report and literature review. Emerg Med Australas. 2019;31(5):895-6.", url: "https://doi.org/10.1111/1742-6723.13343" },
  { id: 42, kind: "Case report — class comparator (liraglutide)", text: "Elmehdawi RR, Elbarsha AM. An accidental liraglutide overdose: case report. Libyan J Med. 2014;9:23055.", url: "https://doi.org/10.3402/ljm.v9.23055" },
  { id: 43, kind: "Systematic review and meta-analysis", text: "He L, Wang J, Ping F, et al. Association of glucagon-like peptide-1 receptor agonist use with risk of gallbladder and biliary diseases: a systematic review and meta-analysis of randomized clinical trials. JAMA Intern Med. 2022;182(5):513-9.", url: "https://doi.org/10.1001/jamainternmed.2022.0338" },
  { id: 44, kind: "Mechanistic review", text: "Ramirez-Mejia MM, Ponciano-Rodriguez G, Eslam M, Mendez-Sanchez N. GLP-1 receptor agonists and gallbladder disease risk: insights into molecular mechanisms and clinical implications. Ther Adv Endocrinol Metab. 2025;16.", url: "https://doi.org/10.1177/20420188251406456" },
  { id: 45, kind: "Case report — therapeutic-dose euglycaemic ketoacidosis", text: "Sood N, Bansal O, Garg R, Hoskote A. Euglycemic ketoacidosis from semaglutide in a patient without diabetes. JCEM Case Rep. 2024;2(8):luae156.", url: "https://doi.org/10.1210/jcemcr/luae156" },
  { id: 46, kind: "Observational cohort study (retained gastric content)", text: "Sen S, Potnuru PP, Hernandez N, et al. Glucagon-like peptide-1 receptor agonist use and residual gastric content before anesthesia. JAMA Surg. 2024;159(6):660-7.", url: "https://doi.org/10.1001/jamasurg.2024.0111" },
  { id: 47, kind: "Prospective observational study (gastric ultrasound)", text: "Sherwin M, Hamburger J, Katz D, DeMaria S Jr. Influence of semaglutide use on the presence of residual gastric solids on gastric ultrasound: a prospective observational study in volunteers without obesity recently started on semaglutide. Can J Anaesth. 2023;70(8):1300-6.", url: "https://doi.org/10.1007/s12630-023-02549-5" },
  { id: 48, kind: "Prospective observational study (gastric ultrasound)", text: "Nersessian RSF, da Silva LM, Carvalho MAS, et al. Relationship between residual gastric content and peri-operative semaglutide use assessed by gastric ultrasound: a prospective observational study. Anaesthesia. 2024;79:1317-24.", url: "https://doi.org/10.1111/anae.16454" },
  { id: 49, kind: "Historical cohort study (endoscopy)", text: "Wu F, Smith MR, Mueller AL, et al. Association of glucagon-like peptide receptor 1 agonist therapy with the presence of gastric contents in fasting patients undergoing endoscopy under anesthesia care: a historical cohort study. Can J Anaesth. 2024;71(7):958-66.", url: "https://doi.org/10.1007/s12630-024-02719-z" },
  { id: 50, kind: "Case series", text: "Kittner SL, Talbott AL, Vishneski SR, Narbaiza J, Shields JS. Retained gastric contents after adequate fasting associated with GLP-1 receptor agonist use: a report of 3 cases. JBJS Case Connect. 2023;13(4).", url: "https://doi.org/10.2106/JBJS.CC.23.00506" },
  { id: 51, kind: "Society consensus guidance", text: "American Society of Anesthesiologists. American Society of Anesthesiologists consensus-based guidance on preoperative management of patients (adults and children) on glucagon-like peptide-1 (GLP-1) receptor agonists. Schaumburg, IL: ASA; 2023.", url: "https://www.asahq.org/about-asa/newsroom/news-releases/2023/06/american-society-of-anesthesiologists-consensus-based-guidance-on-preoperative" },
  { id: 52, kind: "Multisociety clinical practice guidance — EXTERNAL GUIDELINE, elective-procedure context", text: "Joshi GP, Abdelmalak BB. Preprocedure care of patients on glucagon-like peptide-1 receptor agonists: a multisociety clinical practice guidance. Anesthesiology. 2024;141(6):1208-9.", url: "https://doi.org/10.1097/ALN.0000000000005231" },
  { id: 53, kind: "Narrative/technique review", text: "Arumugam S, Kalagara H. Perioperative glucagon-like peptide-1 receptor agonists (GLP-1RA) and gastric point of care ultrasound (POCUS). POCUS J. 2024;9(2):39-41.", url: "https://doi.org/10.24908/pocus.v9i2.17700" },
  { id: 54, kind: "Observational cohort study (ophthalmic)", text: "Hathaway JT, Shah MP, Hathaway DB, et al. Risk of nonarteritic anterior ischemic optic neuropathy in patients prescribed semaglutide. JAMA Ophthalmol. 2024;142(8):732-9.", url: "https://doi.org/10.1001/jamaophthalmol.2024.2296" },
  { id: 55, kind: "National cohort study (ophthalmic)", text: "Grauslund J, Abou Taha A, Molander LD, et al. Once-weekly semaglutide doubles the five-year risk of nonarteritic anterior ischemic optic neuropathy in a Danish cohort of 424,152 persons with type 2 diabetes. Int J Retina Vitreous. 2024;10(1):97.", url: "https://doi.org/10.1186/s40942-024-00620-x" },
  { id: 56, kind: "Observational study (ophthalmic, smaller/non-significant)", text: "Cai CX, Hribar M, Baxter S, et al. Semaglutide and nonarteritic anterior ischemic optic neuropathy. JAMA Ophthalmol. 2025;143(4):304-14.", url: "https://doi.org/10.1001/jamaophthalmol.2024.6555" },
  { id: 57, kind: "Multinational real-world study (ophthalmic, smaller/non-significant)", text: "Chou CC, Pan SY, Sheen YJ, et al. Association between semaglutide and non-arteritic anterior ischemic optic neuropathy: a multinational population-based real-world study. Ophthalmology. 2024, advance online publication.", url: "https://doi.org/10.1016/j.ophtha.2024.10.030" },
  { id: 58, kind: "Case series (ophthalmic)", text: "Katz BJ, Lee MS, Lincoff NS, et al. Ophthalmic complications associated with the antidiabetic drugs semaglutide and tirzepatide. JAMA Ophthalmol. 2025;143(3):215-20.", url: "https://doi.org/10.1001/jamaophthalmol.2024.6058" },
  { id: 59, kind: "Pharmacovigilance analysis (ophthalmic)", text: "Virk A, Allison K. A pharmacovigilance analysis of ocular adverse events associated with GLP-1 receptor agonists. J Clin Med. 2026;15(6):2464.", url: "https://doi.org/10.3390/jcm15062464" },
  { id: 60, kind: "Multi-database pharmacovigilance analysis (ophthalmic)", text: "Cheng X, Jiang Z, Li G, Wang J, Han F. Multi-database pharmacovigilance assessment of GLP-1 receptor agonist-related ophthalmic risks using advanced signal detection in FAERS and VigiBase. J Endocrinol Invest. 2026;49(2):425-33.", url: "https://doi.org/10.1007/s40618-025-02712-3" },
  { id: 61, kind: "Narrative synthesis (ophthalmic mechanism)", text: "Song SJ, Kim E. Glucagon-like peptide-1 receptor agonists and ocular outcomes: metabolic transition, retinal vulnerability, and risk-stratified monitoring. J Obes Metab Syndr. 2026;35(2):164-75.", url: "https://doi.org/10.7570/jomes26012" },
  { id: 62, kind: "Narrative synthesis (ophthalmic mechanism)", text: "Lixi F, Troisi M, Calabresi V, et al. Beyond glycemic control: ocular effects of glucagon-like peptide-1 receptor agonists. Vision (Basel). 2026;10(2):29.", url: "https://doi.org/10.3390/vision10020029" },
  { id: 63, kind: "Case series — lithium interaction", text: "Al-Soleiti M, Leung JG, Mubaydeen T, et al. Lithium toxicity and altered clearance following initiation of semaglutide in patients with bipolar disorder: a case series and literature review. J Clin Psychopharmacol. 2025;45(6):613-8.", url: "https://doi.org/10.1097/JCP.0000000000002090" },
  { id: 64, kind: "Case report — lithium interaction", text: "Onggo S, Chang R, Marlett J, et al. Semaglutide-mediated lithium toxicity. J Clin Psychopharmacol. 2025;45(4):393-5.", url: "https://doi.org/10.1097/JCP.0000000000002017" },
  { id: 65, kind: "Case report — lithium interaction (switch to tirzepatide)", text: "Burson JR, Leung JG. Lithium toxicity following a change from semaglutide to tirzepatide for weight loss management. Ment Health Clin. 2026;16(1):34-8.", url: "https://doi.org/10.9740/mhc.2026.02.034" },
  { id: 66, kind: "Randomized controlled trial (SELECT, renal outcomes)", text: "Colhoun HM, Lingvay I, Brown PM, et al. Long-term kidney outcomes of semaglutide in obesity and cardiovascular disease in the SELECT trial. Nat Med. 2024;30:2058-66.", url: "https://doi.org/10.1038/s41591-024-03015-5" },
  { id: 67, kind: "Randomized controlled trial (SELECT, weight outcomes)", text: "Ryan DH, Lingvay I, Deanfield J, et al. Long-term weight loss effects of semaglutide in obesity without diabetes in the SELECT trial. Nat Med. 2024;30:2049-57.", url: "https://doi.org/10.1038/s41591-024-02996-7" },
  { id: 68, kind: "Trial rationale and design (SELECT)", text: "Ryan DH, Lingvay I, Colhoun HM, et al. Semaglutide effects on cardiovascular outcomes in people with overweight or obesity (SELECT) rationale and design. Am Heart J. 2020;229:61-9.", url: "https://doi.org/10.1016/j.ahj.2020.07.008" },
  { id: 69, kind: "Randomized controlled trial (BARI-OPTIMISE, liraglutide)", text: "Mok J, Adeleke MO, Brown A, et al. Safety and efficacy of liraglutide, 3.0 mg, once daily vs placebo in patients with poor weight loss following metabolic surgery: the BARI-OPTIMISE randomized clinical trial. JAMA Surg. 2023;158(10):1003-11.", url: "https://doi.org/10.1001/jamasurg.2023.2930" },
  { id: 70, kind: "Randomized controlled trial (semaglutide, post-bariatric)", text: "Stanley C, Mallik R, Hamid N, et al. Semaglutide versus placebo in individuals with poor weight loss after bariatric surgery: a double-blinded, randomized, placebo-controlled trial. Nat Med. 2026;32(7):2662-72.", url: "https://doi.org/10.1038/s41591-026-04416-4" },
  { id: 71, kind: "Systematic review", text: "Llewellyn DC, Ellis L, Aylwin H, et al. The efficacy of GLP-1RAs for the management of postprandial hypoglycemia following bariatric surgery: a systematic review. Obesity (Silver Spring). 2023;31(1):20-30.", url: "https://doi.org/10.1002/oby.23600" },
  { id: 72, kind: "Narrative review (background)", text: "Hamed K, Alosaimi MN, Ali BA, et al. Glucagon-like peptide-1 (GLP-1) receptor agonists: exploring their impact on diabetes, obesity, and cardiovascular health through a comprehensive literature review. Cureus. 2024;16(9):e68390.", url: "https://doi.org/10.7759/cureus.68390" },
  { id: 73, kind: "Narrative review (background)", text: "Riedinger CJ, Sakach J, Maples JM, et al. Glucagon-like peptide-1 (GLP-1) receptor agonists for weight management: a review for the gynecologic oncologist. Gynecol Oncol. 2024;190:1-10.", url: "https://doi.org/10.1016/j.ygyno.2024.07.008" },
  { id: 74, kind: "Systematic review (background)", text: "Gunasekaran P, Inban P, Agrawal A, et al. Approved weight loss drugs for obesity with a thorough emphasis on GLP-1 agonist medications: a systematic review. Dis Mon. 2026;72(7):102113.", url: "https://doi.org/10.1016/j.disamonth.2026.102113" }
];

/* NODES schema: id, type: "process" | "decision" | "branch" | "terminal",
   label (figure box text, byte-exact), sub (bullet text, byte-exact where
   the figure itself gives it), meaning, rationale, cautions (figure
   wording questions / discrepancies the manuscript itself raises — carried
   here rather than silently resolved), refs (manuscript's own reference
   numbers). */
const NODES = [
  {
    id: "entry",
    type: "terminal",
    tone: "key",
    label: "SUSPECTED SEMAGLUTIDE OVERDOSE",
    meaning:
      "Recognition rests on exposure history, inspecting the product itself, and the clinical pattern, because there is no routinely available assay to confirm a semaglutide concentration. Onset can be delayed enough after an injection that the association isn't obvious, and a patient who looks fine at first can still deteriorate later — the long half-life means this stays true for days. The syndrome itself is dominated by nausea, repeated vomiting, abdominal pain and loss of appetite, with diarrhoea or constipation present less consistently.",
    rationale:
      "Starting every pathway here, before any branching, keeps the absence of a confirmatory test from becoming an excuse to wait for one — the history and the product are what's actually available at the bedside, and an initially well-looking patient is exactly the presentation the algorithm is built to not dismiss.",
    cautions: [
      "No diagnostic semaglutide blood concentration is supplied anywhere in the manuscript; recognition is by history and pattern alone."
    ],
    refs: [12, 13]
  },
  {
    id: "step1",
    type: "process",
    label: "STEP 1 — IMMEDIATE PRIORITIES",
    sub:
      "• Capillary glucose in EVERY case\n• Airway, breathing, circulation; conscious level\n• Volume status, ongoing vomiting, urine output",
    meaning:
      "Capillary glucose is checked in every patient regardless of how well they look, alongside the standard physiological assessment and a specific look at how much fluid has been lost to vomiting. Protracted vomiting with suppressed appetite and thirst is the main route to hypovolaemia, electrolyte disturbance and pre-renal acute kidney injury in this syndrome. Isolated semaglutide overdose usually does not itself cause hypoglycaemia — its insulin-releasing effect is glucose-dependent — but that changes with concomitant insulin or sulfonylurea therapy, in a patient without diabetes who has taken a large dose, or if the product itself turns out to be falsified.",
    rationale:
      "Checking glucose in every case rather than only in patients who seem unwell is what lets the next decision (falsified product versus straightforward overdose) actually be made on data instead of appearance.",
    cautions: [
      "\"Conscious level\" is listed as an assessment but no scoring system (e.g. Glasgow Coma Scale) is named for it.",
      "No numeric glucose cutoff, blood-pressure threshold, urine-output target or monitoring interval is given for this step."
    ],
    refs: [18, 12, 13, 14, 26, 29, 32]
  },
  {
    id: "hypo_decision",
    type: "decision",
    label: "Severe or recurrent hypoglycaemia?",
    meaning:
      "This question exists to catch a specific, high-stakes possibility: a counterfeit pen that actually contains insulin rather than semaglutide. Confirmed falsified-product cases have produced severe hypoglycaemia, seizures and coma, while hypoglycaemia was absent in most published isolated GLP-1 receptor agonist overdoses. The same question is also how concomitant insulin or sulfonylurea use, a large exposure in someone without diabetes, or prolonged vomiting on an empty stomach would first show up.",
    rationale:
      "Routing on hypoglycaemia first, before anything else, reflects that a falsified insulin-containing product changes the whole clinical problem — the patient is no longer primarily a semaglutide-overdose case, and recognising that immediately changes what happens next.",
    cautions: [
      "The manuscript does not define \"severe\" or \"recurrent\" numerically."
    ],
    refs: [29, 12, 13, 14, 32, 18, 26, 31, 40, 41, 42]
  },
  {
    id: "falsified_product",
    type: "terminal",
    tone: "note",
    label: "SUSPECT FALSIFIED PRODUCT",
    sub:
      "• Confirmed counterfeit pens have contained insulin, not semaglutide\n• Manage as insulin overdose\n• Titrated dextrose infusion\n• Retain device, packaging, batch\n• Notify the national regulator",
    meaning:
      "A positive answer changes the working diagnosis to a possible insulin overdose, with management and observation duration to match the suspected insulin analogue rather than semaglutide's own week-long half-life. Where the exposure is large, drawing a paired insulin and C-peptide level before giving dextrose is worth considering, since an exogenous (injected) insulin source suppresses the body's own C-peptide while an elevated insulin level persists — a pattern that can later help confirm what actually happened. Recurrent hypoglycaemia in this setting may need a continuous dextrose infusion and critical care rather than a single bolus. Retaining the pen, packaging, batch number and purchase information supports both the immediate clinical reasoning and a regulatory investigation, and confirmed or suspected falsification should be reported to the relevant regulator.",
    rationale:
      "Keeping the dextrose and retention/reporting instructions in the same box as the falsified-product recognition reflects that this is a single, time-critical response, not two separate later tasks.",
    cautions: [
      "The figure draws no outgoing connection from this box — no return to exposure characterisation, risk stratification, investigation, management or disposition is shown, even though the manuscript's own prose describes those steps as applying generally. This page follows the figure literally.",
      "No dextrose concentration, dose, infusion rate, numerical glucose target or fixed observation duration is given; the manuscript does not reproduce a formal insulin-overdose protocol."
    ],
    refs: [29, 31]
  },
  {
    id: "step2",
    type: "process",
    label: "STEP 2 — CHARACTERISE THE EXPOSURE",
    sub:
      "• Product, brand and source (photograph device)\n• Intended vs actual dose; formulation\n• Time since injection; titration stage\n• Concomitant insulin or sulfonylurea; intent",
    meaning:
      "Four things are established together: provenance of the product (distinguishing a pen-dialling error from a compounded-vial unit-conversion error, and flagging uncertain product content), the intended-versus-actual dose and formulation, timing and titration stage (since tolerance to gastrointestinal effects builds with repeated dosing, so a treatment-naive patient can be disproportionately affected by the same nominal error), and concomitant insulin/sulfonylurea use and intent. Intent specifically drives whether formal psychiatric assessment and co-ingestant screening are needed.",
    rationale:
      "Photographing the device and confirming the actual delivered dose, rather than accepting a patient's or carer's verbal account, is what catches the two error patterns the manuscript repeatedly identifies as dangerous: a misread pen dial, and a millilitre/milligram/insulin-\"unit\" conversion error with a compounded vial.",
    cautions: [
      "No general conversion formula between syringe \"units\", millilitres and milligrams is given anywhere in the manuscript."
    ],
    refs: [11, 12, 13, 29, 1, 14, 18, 26]
  },
  {
    id: "step3",
    type: "process",
    label: "STEP 3 — RISK STRATIFY",
    meaning:
      "The intensity of everything that follows — how much is investigated, and how closely the patient is watched — is set here, based on prior tolerance, the size of the error, current symptoms, product reliability, age and concomitant glucose-lowering treatment.",
    rationale:
      "Splitting patients into two intensities of workup, rather than investigating everyone to the same degree, is what keeps an asymptomatic, tolerant patient with a small dosing error from being put through a full laboratory and imaging workup that a higher-risk exposure genuinely needs.",
    cautions: [
      "The manuscript's own figure draws this as a plain fork, not a decision diamond — neither branch carries a YES/NO label, and no complete AND/OR rule is given for a patient whose features split across both lower- and higher-risk criteria."
    ],
    refs: [14, 17]
  },
  {
    id: "lower_risk",
    type: "branch",
    label: "LOWER RISK",
    sub:
      "• Established therapy, tolerant\n• Small-magnitude error\n• Asymptomatic, tolerating fluids\n• No insulin or sulfonylurea\n• Normal glucose and renal function",
    meaning:
      "An asymptomatic patient already established and tolerant on semaglutide, with only a small dosing error, no insulin or sulfonylurea on board, and normal glucose and renal function, can be managed with a limited evaluation rather than the fuller higher-risk workup.",
    rationale:
      "This is the branch that lets a patient who made a modest, well-tolerated dosing error avoid an admission and a full laboratory panel they don't need — established tachyphylaxis to the gastrointestinal effects is the physiological reason tolerance alone is allowed to carry this much weight.",
    cautions: [
      "The manuscript's own prose describes this group more broadly as having \"no diabetes therapy\", while the figure box narrows this to \"No insulin or sulfonylurea\" specifically.",
      "The manuscript does not explain how normal renal function is confirmed when only capillary glucose measurement is being performed at this tier."
    ],
    refs: [14, 17, 1]
  },
  {
    id: "higher_risk",
    type: "branch",
    tone: "alarm",
    label: "HIGHER RISK",
    sub:
      "• Treatment-naive or early titration\n• ≥10-fold error; deliberate overdose\n• Compounded or unverified product\n• Child; insulin or sulfonylurea\n• Symptomatic, vomiting, hypovolaemic",
    meaning:
      "Treatment-naive patients lack the gastrointestinal tolerance an established user has built up. Compounded products carry a specific unit-conversion hazard and uncertain actual concentration. A large deliberate overdose has been linked to pancreatitis and euglycaemic ketoacidosis. Children receive a greater weight-adjusted exposure from the same nominal adult dose. Concomitant insulin or sulfonylurea raises hypoglycaemia risk, and vomiting with hypovolaemia signals possible renal, electrolyte and acid-base complications already in progress.",
    rationale:
      "Any one of these features — not all of them together — is enough to move a patient into the fuller investigation and closer observation pathway, because each reflects a genuinely different mechanism of added risk rather than gradations of the same one.",
    cautions: [
      "The \"≥10-fold error\" cutoff is the figure's own number but is not explicitly attributed to an external guideline or to a specific cited study — the manuscript describes ten-fold dosing errors in its case material without identifying that case material as the source of this triage threshold.",
      "The manuscript's prose describes \"large-magnitude errors\" warranting investigation without equating that phrase to the figure's specific \"≥10-fold error\" wording."
    ],
    refs: [1, 13, 14, 11, 12, 30, 16, 18, 26]
  },
  {
    id: "step4",
    type: "process",
    label: "STEP 4 — INVESTIGATIONS (higher risk)",
    sub:
      "• Laboratory glucose; urea, creatinine, electrolytes\n• Venous gas: bicarbonate, anion gap; β-hydroxybutyrate\n• Serum lipase if abdominal pain; liver function tests\n• Lithium level if prescribed; ECG if electrolytes deranged",
    meaning:
      "Glucose, renal function, electrolytes and acid-base status pick up hypoglycaemia, dehydration-related acute kidney injury and the biochemical consequences of prolonged vomiting. Bicarbonate, anion gap and beta-hydroxybutyrate can detect ketoacidosis even when the plasma glucose itself looks normal. Lipase (with imaging where appropriate) investigates pancreatitis, and liver tests with ultrasonography investigate biliary complications. A lithium level matters specifically because vomiting, reduced intake, volume depletion and altered clearance have each been reported to precipitate lithium toxicity after starting or switching GLP-1 receptor agonist therapy.",
    rationale:
      "Testing for euglycaemic ketoacidosis unconditionally, rather than only when the glucose is already high, is the point of this whole panel — this is exactly the complication a clinician anchored on glucose alone would miss.",
    cautions: [
      "No numerical laboratory cutoff, anion-gap formula, ketone threshold, lithium threshold or ECG criterion is supplied for any of these tests.",
      "The condition for ordering beta-hydroxybutyrate is worded two different ways in the source material (\"where oral intake has been minimal\" versus \"if poor intake\"), and the figure box itself lists the test with no condition attached.",
      "The condition for ordering serum lipase is similarly worded two different ways (\"if abdominal pain\" in the figure versus \"where abdominal pain is prominent\" and a longer severity-based description elsewhere in the manuscript), and these are not reconciled."
    ],
    refs: [18, 30, 45, 43, 63, 64, 65]
  },
  {
    id: "step5",
    type: "process",
    tone: "key",
    label: "STEP 5 — MANAGEMENT — SUPPORTIVE; THERE IS NO ANTIDOTE",
    sub:
      "• Scheduled antiemesis, not as-required; monitor QT if electrolytes deranged\n• Isotonic crystalloid; replace potassium, magnesium and chloride\n• Withhold metformin and SGLT2 inhibitor during severe vomiting\n• Hypoglycaemia: titrated dextrose INFUSION, not repeated boluses\n• NO charcoal, haemodialysis or lipid emulsion (>99% albumin bound)\n• Airway or procedure: treat as FULL STOMACH regardless of fasting time",
    meaning:
      "Vomiting is both the main source of distress and a proximate cause of the serious complications, so antiemesis is scheduled rather than given only on request, with QT monitoring when electrolyte derangement is significant, alongside isotonic crystalloid and potassium/magnesium/chloride replacement. Metformin is held during severe or prolonged vomiting for lactic-acidosis risk, and an SGLT2 inhibitor is held alongside it in acute kidney injury or severe vomiting. Where hypoglycaemia occurs, an initial dextrose correction is followed by a continuous infusion titrated to euglycaemia rather than repeated boluses, because recurrence is characteristic and can persist for many hours — critical care admission is appropriate at that point. Decontamination and enhanced elimination are all futile here: activated charcoal has no role for an injected drug, and semaglutide's extensive albumin binding (>99%) means hemodialysis, haemoperfusion and lipid-emulsion therapy cannot meaningfully remove it either. Because semaglutide delays gastric emptying, any patient taken for procedural sedation, rapid sequence intubation or endoscopy is managed as a full stomach irrespective of how long they have actually fasted, with gastric point-of-care ultrasonography used where available.",
    rationale:
      "Naming \"no antidote\" directly in this box's own title, alongside the explicit decontamination-is-futile instruction, heads off the two most tempting but wrong reflexes in an overdose presentation — reaching for charcoal or dialysis — before a clinician gets that far down the page.",
    cautions: [
      "The severe-vomiting trigger for withholding metformin is stated for metformin specifically in one place and for both metformin and the SGLT2 inhibitor together in the figure and in Table 3; the manuscript does not fully reconcile whether the SGLT2-inhibitor trigger is severe vomiting specifically or acute kidney injury generally.",
      "The figure's \"NO charcoal\" line omits the qualification, stated elsewhere in the manuscript, that this is specifically because the drug is injected rather than ingested.",
      "No antiemetic dose, crystalloid volume or rate, electrolyte replacement dose, QT threshold, initial dextrose correction regimen, or numerical glucose target is given anywhere in the manuscript.",
      "The \"24-hour clear liquid diet\" recommendation that appears alongside this topic in the source material comes from elective-procedure guidance and is not an overdose-observation duration; it is not reproduced as a specific instruction in this box."
    ],
    refs: [12, 31, 18, 26, 15, 16, 51, 46, 52, 53, 50]
  },
  {
    id: "step6",
    type: "process",
    label: "STEP 6 — DISPOSITION — driven by symptoms and physiology, not by a fixed observation interval",
    meaning:
      "A conventional six- to eight-hour toxicology observation window is described as inadequate for this drug: symptoms and complications can evolve over days to weeks, consistent with a terminal elimination half-life of roughly 165 hours (about seven days) — after a ten-fold overdose, roughly half the excess is still estimated to remain after one week and a quarter after two weeks. Disposition is therefore decided on the patient's actual symptoms and physiology at the time, with poison-centre consultation and planned follow-up, rather than by holding everyone for a fixed number of hours.",
    rationale:
      "Naming the conventional observation window as inadequate, rather than simply omitting it, is what stops a clinician from defaulting to a standard toxicology discharge time that this specific drug's pharmacokinetics make unsafe.",
    cautions: [
      "No replacement fixed observation interval is supplied — the manuscript explicitly declines to give one, in favour of a symptom- and physiology-driven decision."
    ],
    refs: [12, 15, 17, 9]
  },
  {
    id: "discharge",
    type: "terminal",
    label: "DISCHARGE",
    sub:
      "Tolerating oral fluids; normal glucose and renal function; support available.\nSupply antiemetic, rehydration advice, return criteria and planned review.",
    meaning:
      "Discharge requires tolerated oral fluids, normal glucose and renal function, and adequate support at home. Because symptoms can continue for days, written advice covers oral rehydration, what to expect over the following days, and clear return criteria, typically with a course of oral antiemetic. Follow-up is planned across at least two half-lives, rechecking renal function and pancreatic enzymes where relevant.",
    rationale:
      "Building \"at least two half-lives\" of follow-up into the discharge plan itself, rather than a single fixed recheck date, is what matches the plan to this drug's actual persistence rather than to typical toxicology discharge timing.",
    cautions: [
      "No numerical definition of normal glucose/renal function, fixed discharge time, exact antiemetic duration, or a fully enumerated return-criteria list is given.",
      "\"At least two half-lives\" is the manuscript's own framework recommendation, not a value drawn from a cited guideline."
    ],
    refs: [9, 17]
  },
  {
    id: "admit",
    type: "terminal",
    tone: "alarm",
    label: "ADMIT",
    sub:
      "Intractable vomiting; hypovolaemia; AKI; hypoglycaemia; pancreatitis or ketoacidosis; suspected insulin-containing product; deliberate self-harm; paediatric exposure.",
    meaning:
      "Admission is for the patient who cannot maintain hydration, has a renal or metabolic complication in progress, may have been exposed to an insulin-containing falsified product, needs psychiatric assessment after deliberate self-harm, or is a child with a significant exposure.",
    rationale:
      "Listing \"suspected insulin-containing product\" and \"deliberate self-harm\" as admission criteria in their own right, alongside the medical complications, keeps the falsified-product and psychiatric-risk branches from being discharged early just because the metabolic picture alone looks stable.",
    cautions: [
      "No numerical admission cutoff (a lab value, a vital sign, a volume of vomiting) is stated for any of these criteria.",
      "The figure's \"paediatric exposure\" is broader than the manuscript's own narrower phrase (\"inadvertent paediatric injection of a substantial adult dose\"), and the figure's \"pancreatitis or ketoacidosis\" omits the qualifier \"suspected\" that the manuscript's text and Table 3 both retain."
    ],
    refs: [18, 30, 45, 29, 16]
  }
];

const GLOSSARY = [
  { match: "GLP-1", full: "glucagon-like peptide-1", def: "The hormone class semaglutide mimics. Native GLP-1 increases glucose-dependent insulin secretion, suppresses glucagon, delays gastric emptying and promotes satiety, but is itself degraded within one to two minutes — semaglutide is engineered to resist that breakdown." },
  { match: "euglycaemic ketoacidosis", full: "euglycaemic diabetic ketoacidosis", def: "Ketoacidosis with a normal or only mildly raised blood glucose, which is what makes it easy to miss if ketones aren't checked independently of the glucose reading." },
  { match: "beta-hydroxybutyrate", full: "β-hydroxybutyrate", def: "The dominant ketone body produced in ketoacidosis, measurable directly from a blood sample rather than inferred from urine ketone strips." },
  { match: "anion gap", def: "A calculated gap between measured blood electrolytes. A raised gap is consistent with an unmeasured acid — such as ketones — being present." },
  { match: "AKI", full: "acute kidney injury", def: "A sudden decline in kidney function. Here it is most often driven by volume depletion from protracted vomiting rather than by a direct toxic effect of the drug on the kidney." },
  { match: "tachyphylaxis", def: "A rapid reduction in a drug's effect with continued or repeated dosing. Semaglutide's gastrointestinal side effects show this, which is why an established, tolerant patient can take a dosing error that would make a treatment-naive patient acutely unwell." },
  { match: "POCUS", full: "point-of-care ultrasound", def: "Bedside ultrasound used here to assess gastric content directly, since semaglutide's delayed gastric emptying means a patient can have a stomach full of retained contents despite a normal reported fasting time." },
  { match: "falsified product", def: "A counterfeit medication sold as semaglutide. Confirmed cases have actually contained insulin, which is why severe or recurrent hypoglycaemia is the trigger that specifically raises this possibility rather than a straightforward semaglutide overdose." },
  { match: "C-peptide", def: "A byproduct of the body's own insulin production, co-secreted with endogenous insulin but not present in injected insulin products. Pairing an insulin level with a C-peptide level can help distinguish a patient's own insulin secretion from an exogenous (injected) source." }
];

// Clinical agent (drug) names to visually emphasise wherever they appear —
// rendering-only, never alters label/sub text itself. Matching is
// case-insensitive and whole-word, longest name first.
const AGENTS = [
  "Semaglutide",
  "Metformin",
  "Insulin",
  "Dextrose"
];

if (typeof module !== "undefined") {
  module.exports = { NODES, REFERENCES, GLOSSARY };
}
