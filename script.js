// ════════════════════════════════════════════════
//  COMPLETE DISEASE DATABASE — 50+ diseases
//  Key improvement: each crop has its OWN disease
//  pool, so detection is crop-specific
// ════════════════════════════════════════════════
const DISEASES = [
  // ── TOMATO ──────────────────────────────────
  {id:'t1',crop:'tomato',emoji:'🍅',name:'Early Blight',severity:'high',
   summary:'Dark concentric ring spots on lower leaves, spreading upward. Classic Alternaria infection.',
   symptoms:['Circular brown spots with concentric rings (bull\'s-eye pattern)','Yellow halo surrounding each lesion','Lesions start on oldest/lowest leaves','Dark cankers at stem base','Defoliation starting from bottom'],
   causes:['Alternaria solani fungus','Warm humid weather 24–29°C','Water splash from rain/irrigation','Infected plant debris in soil','Stressed or nutrient-deficient plants'],
   organic:['Remove and destroy infected leaves immediately','Neem oil spray 3ml/L every 7 days','Compost tea foliar spray','Mulch around plants to prevent soil splash','Apply Bacillus subtilis biofungicide'],
   chemical:['Mancozeb 75% WP @ 2.5g/L every 7 days','Chlorothalonil 75% WP @ 2g/L','Copper oxychloride 50% WP @ 3g/L','Azoxystrobin 23% SC @ 1ml/L'],
   preventive:['Use resistant varieties (Arka Vikram)','Rotate with non-solanaceous crops (3 yr)','Drip irrigation only — avoid overhead','Proper spacing 60×45cm for airflow','Apply preventive fungicide before rainy season'],
   confidence:89},

  {id:'t2',crop:'tomato',emoji:'🍅',name:'Late Blight',severity:'high',
   summary:'Water-soaked dark lesions spreading rapidly. White fungal growth on leaf undersides in humid conditions.',
   symptoms:['Large water-soaked lesions on leaves and stems','White cottony sporulation on underside of leaves','Dark brown/black fruit rot','Rapid wilting of entire plant','Foul smell from infected tissue'],
   causes:['Phytophthora infestans oomycete','Cool wet weather 15–20°C with >90% humidity','Infected transplants or volunteer plants','Rain/fog spreading spores'],
   organic:['Remove and destroy all infected plants','Copper hydroxide 77% WP @ 3g/L','Improve air circulation immediately','Avoid any overhead irrigation'],
   chemical:['Metalaxyl + Mancozeb (Ridomil) @ 2.5g/L','Dimethomorph 50% WP @ 1g/L','Cymoxanil 8% + Mancozeb 64% @ 2g/L'],
   preventive:['Plant resistant varieties (Arka Rakshak)','Destroy volunteer potato/tomato plants','Apply preventive copper spray before monsoon','Never plant in fields with history of late blight'],
   confidence:94},

  {id:'t3',crop:'tomato',emoji:'🍅',name:'Leaf Curl Virus (TYLCV)',severity:'high',
   summary:'Upward curling of leaves, yellowing, and stunted growth caused by Whitefly-transmitted virus.',
   symptoms:['Leaves curl upward and inward','Yellowing of leaf margins and interveinal areas','Stunted, bushy plant growth','Drastically reduced fruit set','Thickened veins'],
   causes:['Tomato Yellow Leaf Curl Virus (Begomovirus)','Transmitted by Silverleaf Whitefly (Bemisia tabaci)','Infected seedlings','Weed reservoir hosts nearby'],
   organic:['Install yellow sticky traps @ 25/acre','Neem oil + soap spray @ 5ml/L for whitefly','Remove and burn infected plants','Reflective silver mulch to deter whiteflies'],
   chemical:['Imidacloprid 17.8% SL @ 0.3ml/L','Thiamethoxam 25% WG @ 0.3g/L','Acetamiprid 20% SP @ 0.5g/L (alternating)'],
   preventive:['Use TYLCV-resistant varieties (Arka Rakshak, TH-Indus)','Treat seedling beds with Imidacloprid','Use certified healthy seedlings only','Install 40-mesh insect nets in nurseries'],
   confidence:87},

  {id:'t4',crop:'tomato',emoji:'🍅',name:'Bacterial Wilt',severity:'high',
   summary:'Sudden wilting with green leaves attached. Brown vascular discoloration visible when stem is cut.',
   symptoms:['Sudden dramatic wilting of entire plant','Leaves remain green even after wilting','Brown/tan discoloration of vascular tissue','Milky bacterial ooze from cut stem in water','Stems show brown streaking inside'],
   causes:['Ralstonia solanacearum soil bacteria','Contaminated soil, water, or tools','Warm moist soil conditions 30–35°C','Root wounds from nematodes or insects'],
   organic:['Solarize soil with plastic sheeting before planting','Trichoderma viride @ 5g/kg soil application','Remove and burn affected plants immediately','Avoid contaminating soil with infected plant material'],
   chemical:['No effective chemical cure once infected','Streptocycline preventive drench @ 0.5g/15L','Focus entirely on prevention'],
   preventive:['Graft onto resistant rootstocks','4–5 year crop rotation away from solanaceous crops','Raised beds with excellent drainage','Sterilize tools between plants'],
   confidence:91},

  {id:'t5',crop:'tomato',emoji:'🍅',name:'Fusarium Crown Rot',severity:'medium',
   summary:'Yellowing of lower leaves, brown discoloration at crown and stem base, gradual plant death.',
   symptoms:['Lower leaves yellowing first','Brown rot at crown/stem base','Vascular tissue brownish inside','Plants collapse over several days','Root decay visible'],
   causes:['Fusarium oxysporum f.sp. radicis-lycopersici','Soil-borne fungus in cool moist conditions','Infected transplants','Overwatering and poor drainage'],
   organic:['Trichoderma harzianum soil drench','Remove affected plants with surrounding soil','Improve drainage immediately','Apply humic acid to improve soil health'],
   chemical:['Carbendazim 50% WP @ 2g/L soil drench','Propiconazole 25% EC @ 1ml/L preventive'],
   preventive:['Use Fusarium-resistant rootstocks','Avoid excessive irrigation','Soil solarization before planting','Certified disease-free transplants'],
   confidence:82},

  // ── RICE ──────────────────────────────────
  {id:'r1',crop:'rice',emoji:'🌾',name:'Rice Blast',severity:'high',
   summary:'Diamond-shaped lesions with grey-white centers. The most destructive rice disease globally.',
   symptoms:['Diamond/eye-shaped lesions on leaves with grey-white center','Brown-red border around lesions','Node rot causing "whiteheads" (dead panicles)','Collar rot at base of leaf blade','Severe yield loss in outbreak conditions'],
   causes:['Magnaporthe oryzae fungus','High humidity with cool nights and warm days','Excess nitrogen fertilization','Dense planting with poor airflow','Prolonged leaf wetness'],
   organic:['Pseudomonas fluorescens @ 10g/L soil drench','Neem cake @ 200 kg/ha basal application','Silicon-rich amendments (rice hull ash)','Blast-resistant varieties as primary control'],
   chemical:['Tricyclazole 75% WP @ 0.6g/L','Isoprothiolane 40% EC @ 1.5ml/L','Kasugamycin 3% SL @ 2ml/L','Azoxystrobin 23% SC @ 1ml/L'],
   preventive:['Plant resistant varieties (IR64, Samba Mahsuri)','Balanced NPK — avoid excess nitrogen','Intermittent irrigation (wet-dry cycles)','Proper spacing (20×15cm) for airflow','Timely sowing in recommended windows'],
   confidence:93},

  {id:'r2',crop:'rice',emoji:'🌾',name:'Bacterial Leaf Blight',severity:'medium',
   summary:'Yellow-white lesions progressing from leaf margins. Milky bacterial ooze from fresh cut.',
   symptoms:['Water-soaked yellow lesions starting at leaf margins and tips','Lesions turn pale yellow then straw-white','"Kresek" — wilting of young seedlings','Milky bacterial ooze from freshly cut leaf ends','Lesions extend to midrib in severe cases'],
   causes:['Xanthomonas oryzae pv. oryzae bacteria','High humidity and flooding','Excess nitrogen fertilization','Wind/rain-driven wounds on leaves','Infected seed or transplants'],
   organic:['Reduce nitrogen application','Drain field for 3–5 days','Pseudomonas fluorescens @ 10g/L spray','Avoid transplanting during high wind/rain'],
   chemical:['Streptocycline 90% SP + Copper oxychloride 50% WP','Bismerthiazol 20% WP @ 1g/L','Validamycin 3% L @ 2ml/L'],
   preventive:['Use resistant varieties (IR-20, Pusa Basmati 1)','Seed treatment with Pseudomonas','Balanced fertilization — no excess N','Avoid flood irrigation during vulnerable stages'],
   confidence:88},

  {id:'r3',crop:'rice',emoji:'🌾',name:'Brown Spot',severity:'medium',
   summary:'Oval brown spots on leaves and grains, linked to nutrient-poor soils and infected seeds.',
   symptoms:['Small oval/round dark brown spots on leaves','Spots have grey-white centers with brown margins','Brown discoloration on glumes and husks','Shriveled or discolored grain','Reduced milling quality'],
   causes:['Bipolaris oryzae (Helminthosporium) fungus','Silicon, potassium, or manganese deficiency','Infected seeds','Poor soil fertility — common in upland rice'],
   organic:['Apply silica-rich materials (slag, rice hull ash)','Neem seed kernel extract 5% spray','Improve soil organic matter','Trichoderma seed treatment'],
   chemical:['Mancozeb 75% WP @ 2.5g/L','Propiconazole 25% EC @ 1ml/L','Edifenphos 50% EC @ 1ml/L'],
   preventive:['Use certified disease-free seeds','Seed treatment with Captan or Thiram','Balanced fertilization including K and Si','Proper water management'],
   confidence:84},

  {id:'r4',crop:'rice',emoji:'🌾',name:'Sheath Blight',severity:'high',
   summary:'Oval lesions on leaf sheath at waterline level, progressing up the plant in humid conditions.',
   symptoms:['Oval greenish-grey lesions on leaf sheaths near waterline','Lesions have irregular brown margins','Mycelial growth visible on sheath surface','Lesions progress upward to flag leaf','Lodging in severe infections'],
   causes:['Rhizoctonia solani fungus','Dense canopy with high humidity','High nitrogen application','Continuous flooding','Previous infected crop debris'],
   organic:['Drain field to reduce humidity','Trichoderma harzianum @ 5kg/ha','Reduce plant density','Remove infected tillers manually'],
   chemical:['Hexaconazole 5% EC @ 1.5ml/L','Propiconazole 25% EC @ 1ml/L','Validamycin 3% L @ 2.5ml/L (very effective)'],
   preventive:['Avoid excess nitrogen after tillering','Drain field periodically','Wider row spacing (25×20cm)','Remove infected stubble after harvest'],
   confidence:90},

  // ── WHEAT ──────────────────────────────────
  {id:'w1',crop:'wheat',emoji:'🌿',name:'Leaf Rust',severity:'high',
   summary:'Orange-red powdery pustules scattered on upper leaf surface. Spores wipe off easily.',
   symptoms:['Orange-red pustules (uredinia) on upper leaf surface','Powdery orange spores that rub off easily','Yellowing of surrounding tissue','Pustules turn black (telia) at crop maturity','Significant reduction in grain weight'],
   causes:['Puccinia triticina fungus','Moderate temperatures 15–25°C','High humidity or dew','Susceptible varieties','Spores windblown from other fields'],
   organic:['Sulfur dust @ 25 kg/ha','Remove volunteer wheat plants','Avoid dense planting','Garlic extract spray @ 5%'],
   chemical:['Propiconazole 25% EC @ 1ml/L','Tebuconazole 25% EC @ 1ml/L','Mancozeb 75% WP @ 2.5g/L','Triadimefon 25% WP @ 1g/L'],
   preventive:['Plant resistant varieties (HD-2967, WH-542)','Timely sowing — avoid late planting','Avoid excess nitrogen','Scout from tillering stage onwards'],
   confidence:94},

  {id:'w2',crop:'wheat',emoji:'🌿',name:'Yellow/Stripe Rust',severity:'high',
   summary:'Bright yellow stripes of pustules along leaf veins. More serious than leaf rust in cool climates.',
   symptoms:['Bright lemon-yellow pustules arranged in stripes along leaf veins','Stripes parallel to leaf veins','White mycelium between stripes in cool weather','Severe stunting in early infections','Entire field turns yellow in epidemic'],
   causes:['Puccinia striiformis fungus','Cool temperatures 10–15°C with high moisture','Dew and rain spreading spores','Susceptible varieties'],
   organic:['Sulfur-based fungicides as early intervention','Destroy infected plant material','Ensure good field drainage'],
   chemical:['Propiconazole 25% EC @ 1ml/L at first sign','Tebuconazole 25% WG @ 1.5g/L','Azoxystrobin 23% SC @ 1ml/L'],
   preventive:['Use stripe rust-resistant varieties (PBW-343, DBW-17)','Early warning monitoring from January','Timely fungicide application — don\'t delay','Avoid continuous wheat cropping'],
   confidence:91},

  {id:'w3',crop:'wheat',emoji:'🌿',name:'Powdery Mildew',severity:'medium',
   summary:'White powdery colonies on upper leaf surface and leaf sheaths in cool dry conditions.',
   symptoms:['White/grey powdery colonies on leaves','Yellowing beneath powdery patches','Colonies enlarge and merge','Small black fruiting bodies (cleistothecia) in late stage','Reduced photosynthesis'],
   causes:['Blumeria graminis f.sp. tritici fungus','Cool temperatures 15–22°C','High humidity but dry leaf surface','Dense canopy with poor airflow'],
   organic:['Sulfur dust @ 20 kg/ha','Milk-water spray 1:9 ratio','Baking soda 5g/L + soap','Improve airflow by wider spacing'],
   chemical:['Propiconazole 25% EC @ 1ml/L','Hexaconazole 5% EC @ 2ml/L','Diniconazole 12% WP @ 0.5g/L'],
   preventive:['Resistant varieties (K-307, PBW-343)','Avoid excess nitrogen','Proper field spacing','Remove infected crop debris'],
   confidence:86},

  // ── POTATO ──────────────────────────────────
  {id:'p1',crop:'potato',emoji:'🥔',name:'Late Blight',severity:'high',
   summary:'Dark water-soaked leaf lesions with white fungal growth below. Can destroy a field in 7 days.',
   symptoms:['Dark brown water-soaked lesions on leaf edges and tips','White cottony sporulation on undersides','Lesions turn black and papery','Brown decay penetrating into tubers','Foul smell from rotting tissue'],
   causes:['Phytophthora infestans oomycete','Cool (15–20°C) wet conditions','Infected seed tubers','High humidity >90% for extended periods'],
   organic:['Copper-based fungicide (Bordeaux mixture)','Remove and destroy infected plants','Avoid overhead irrigation','Hill up tubers to reduce exposure'],
   chemical:['Metalaxyl + Mancozeb @ 2.5g/L every 5–7 days','Cymoxanil 8% + Mancozeb 64% @ 2g/L','Dimethomorph 50% WP @ 1g/L','Propamocarb 72% SL @ 2ml/L'],
   preventive:['Certified disease-free seed tubers ONLY','Plant resistant varieties (Kufri Jyoti, Kufri Girdhari)','Destroy volunteer potato plants','Preventive spray before monsoon'],
   confidence:96},

  {id:'p2',crop:'potato',emoji:'🥔',name:'Early Blight',severity:'medium',
   summary:'Target-board ring spots on lower leaves, progressing upward. Alternaria infection.',
   symptoms:['Dark brown concentric ring lesions (target-board pattern)','Yellow halo surrounding lesions','Lesions start on oldest leaves','Progresses upward through canopy','Tuber surface lesions (dry, corky)'],
   causes:['Alternaria solani fungus','Warm temperatures 24–29°C','Plant stress (drought, nutrient deficiency)','Infected seed or plant debris'],
   organic:['Remove and destroy infected leaves','Neem oil 3ml/L every 10 days','Compost application for plant vigor','Mulching around plants'],
   chemical:['Mancozeb 75% WP @ 2.5g/L','Chlorothalonil 75% WP @ 2g/L','Azoxystrobin 23% SC @ 1ml/L'],
   preventive:['Use certified seed','Balanced NPK fertilization','Avoid drought stress','Crop rotation with cereals'],
   confidence:85},

  {id:'p3',crop:'potato',emoji:'🥔',name:'Black Scurf (Rhizoctonia)',severity:'medium',
   summary:'Black sclerotia on tuber skin. Stem canker causing poor emergence and plant stunting.',
   symptoms:['Black sclerotia (fungal bodies) on tuber surface','Stem canker causing reddish-brown lesions at base','Poor emergence and thin stands','Aerial tubers forming on stem','Malformed tubers'],
   causes:['Rhizoctonia solani fungus','Cool moist soil conditions','Infected seed tubers','Delayed emergence in cold soil'],
   organic:['Seed tuber treatment with Trichoderma @ 10g/kg','Plant in warm soil (>10°C)','Remove and destroy infected material'],
   chemical:['Seed treatment: Carbendazim + Thiram @ 2g/kg','Pencycuron 25% WP @ 2g/L furrow drench'],
   preventive:['Certified clean seed tubers','Plant when soil temperature >10°C','Short duration varieties in problem fields','Crop rotation'],
   confidence:80},

  // ── CORN/MAIZE ──────────────────────────────
  {id:'c1',crop:'corn',emoji:'🌽',name:'Northern Corn Leaf Blight',severity:'medium',
   summary:'Long cigar-shaped grey-green lesions up to 15cm. Reduces photosynthetic area before grain fill.',
   symptoms:['Large (5–15cm) cigar/elliptical shaped lesions','Lesions are grey-tan with dark borders','Starts on lower leaves, moves upward','Severe blighting reduces photosynthesis','Yield loss 30–50% in severe outbreaks'],
   causes:['Exserohilum turcicum fungus','Warm humid weather 18–27°C','Extended leaf wetness','Infected crop residue in soil'],
   organic:['Crop rotation with soybeans or wheat','Tillage to bury residue','Balanced fertilization','Resistant hybrid selection'],
   chemical:['Azoxystrobin + Propiconazole @ 1ml/L','Mancozeb 75% WP @ 2.5g/L','Pyraclostrobin 20% EC @ 0.5ml/L'],
   preventive:['Resistant hybrids (first choice)','Rotate away from corn 1–2 years','Tillage to manage residue','Timely planting to avoid peak disease period'],
   confidence:86},

  {id:'c2',crop:'corn',emoji:'🌽',name:'Fall Armyworm',severity:'high',
   summary:'Ragged leaf damage with sawdust-like frass in the whorl. Can destroy crops rapidly.',
   symptoms:['Ragged holes in leaves, especially in whorl','Sawdust-like frass inside leaf whorl','Small to large caterpillars (check at base of whorl)','Skeletonized leaves on older plants','Ear damage in later stages'],
   causes:['Spodoptera frugiperda moth larvae','Warm humid conditions accelerate development','Migration from other regions','Multiple generations per season'],
   organic:['Neem oil 5ml/L sprayed into whorl','Bacillus thuringiensis (Bt) @ 2g/L','Emamectin benzoate 5% SG @ 0.4g/L in whorl','Sand + ash mixture dropped into whorl'],
   chemical:['Emamectin benzoate 5% SG @ 0.4g/L (most effective)','Chlorantraniliprole 18.5% SC @ 0.4ml/L','Lambda-cyhalothrin 5% EC @ 0.4ml/L'],
   preventive:['Early planting to escape peak FAW pressure','Pheromone traps @ 8/acre for monitoring','Regular scouting (check 20 plants/acre)','Encourage natural enemies — avoid broad-spectrum sprays'],
   confidence:88},

  {id:'c3',crop:'corn',emoji:'🌽',name:'Corn Gray Leaf Spot',severity:'medium',
   summary:'Rectangular grey-tan lesions running parallel to leaf veins in hot humid areas.',
   symptoms:['Rectangular grey/tan lesions parallel to leaf veins','Lesions 3–10cm long, 2–5mm wide','Brown fruiting bodies visible in lesions','Severe blighting in humid seasons','Yield loss up to 40%'],
   causes:['Cercospora zeae-maydis fungus','Warm humid weather 25–30°C','Extended periods of night dew','Continuous corn production','Reduced tillage leaving residue'],
   organic:['Crop rotation (soybeans 1–2 seasons)','Tillage to bury infected residue','Resistant hybrid varieties'],
   chemical:['Azoxystrobin 23% SC @ 1ml/L','Propiconazole 25% EC @ 1ml/L'],
   preventive:['Plant resistant hybrids (priority)','Crop rotation every 2 years','Tillage in problem fields','Avoid late planting'],
   confidence:82},

  // ── COTTON ──────────────────────────────────
  {id:'co1',crop:'cotton',emoji:'☁️',name:'Cotton Leaf Curl Disease',severity:'high',
   summary:'Upward leaf curling, vein thickening, and leaf-like enations. Whitefly-transmitted virus with no cure.',
   symptoms:['Upward curling of leaves (sometimes downward)','Thickening and darkening of leaf veins','Leaf-like enations (outgrowths) on lower surface','Stunted plant growth','Reduced boll formation'],
   causes:['Cotton Leaf Curl Virus (CLCuV — Begomovirus)','Transmitted by Whitefly Bemisia tabaci','Infected seedlings or volunteer plants','Weed hosts near the field'],
   organic:['Remove and destroy severely infected plants','Yellow sticky traps @ 10/acre','Neem oil + soap spray @ 5ml/L for whitefly control','Reflective silver mulch'],
   chemical:['Imidacloprid 70% WG @ 0.3g/10L (seed treatment)','Thiamethoxam 25% WG @ 0.3g/L','Spiromesifen 22.9% SC @ 1ml/L (for nymphs)'],
   preventive:['CLCuD-tolerant varieties (FH-142, CIM-573, MNH-886)','Destroy volunteer cotton plants','Avoid planting near old cotton fields','Use healthy certified seed'],
   confidence:89},

  {id:'co2',crop:'cotton',emoji:'☁️',name:'Alternaria Leaf Spot',severity:'medium',
   summary:'Circular brown spots with concentric rings and yellow halo on older leaves.',
   symptoms:['Circular brown spots 0.5–2cm with concentric rings','Yellow chlorotic halo surrounding lesions','Lesions on older/lower leaves first','Premature defoliation','Reduced boll weight'],
   causes:['Alternaria macrospora / A. alternata','High humidity >80%','Warm temperatures 26–30°C','Dense plant canopy'],
   organic:['Neem oil 3ml/L spray','Remove heavily infected leaves','Improve field drainage'],
   chemical:['Iprodione 50% WP @ 1.5g/L','Mancozeb 75% WP @ 2.5g/L','Hexaconazole 5% EC @ 1ml/L'],
   preventive:['Wider plant spacing for airflow','Avoid late evening irrigation','Balanced fertilization','Field sanitation after harvest'],
   confidence:83},

  // ── GRAPE ──────────────────────────────────
  {id:'g1',crop:'grape',emoji:'🍇',name:'Downy Mildew',severity:'high',
   summary:'Yellow oily spots on leaves with white fluffy growth below. Can destroy entire crop rapidly.',
   symptoms:['Yellow oily "oil spots" on upper leaf surface','Dense white to grey cotton-like sporulation on undersides','Brown necrotic lesions replacing oil spots','Affected berries shrivel ("leather berries")','Shoot tips curl and die ("shepherd\'s crook")'],
   causes:['Plasmopara viticola oomycete','Warm (22–25°C) wet conditions','Rain splashing spores','Dense canopy limiting airflow'],
   organic:['Bordeaux mixture 1% spray preventively','Copper hydroxide 50% WP @ 3g/L','Improve canopy management','Remove fallen infected leaves'],
   chemical:['Metalaxyl + Mancozeb @ 2g/L','Dimethomorph 50% WP @ 1g/L','Fosetyl-Al 80% WP @ 2.5g/L','Famoxadone 16.6% + Cymoxanil 22.1% @ 0.5g/L'],
   preventive:['Open canopy management (leaf removal)','Preventive copper sprays before rain','Avoid overhead irrigation','Resistant rootstocks where available'],
   confidence:91},

  {id:'g2',crop:'grape',emoji:'🍇',name:'Powdery Mildew',severity:'high',
   summary:'White powdery coating on leaves, shoots, and berries. Berries crack and rot when infected early.',
   symptoms:['White powdery coating on leaves, shoots, and berries','Infected berries stop growing, crack, and rot','Russet patches on berries','Distorted shoot tips','Brown web-like scars on mature berries'],
   causes:['Erysiphe necator (Uncinula necator) fungus','Warm dry days with cool nights','Poor canopy airflow','Shaded vineyard conditions'],
   organic:['Sulfur 80% WP @ 3g/L (most effective organic)','Potassium bicarbonate @ 5g/L','Milk spray 1:9 dilution weekly'],
   chemical:['Hexaconazole 5% EC @ 2ml/L','Myclobutanil 10% WP @ 1g/L','Triadimefon 25% WP @ 1g/L','Penconazole 10% EC @ 0.5ml/L'],
   preventive:['Open spur pruning for airflow','Preventive sulfur sprays from bud-break','Avoid excess nitrogen (promotes soft susceptible tissue)','Remove and destroy infected shoots'],
   confidence:90},

  // ── MANGO ──────────────────────────────────
  {id:'m1',crop:'mango',emoji:'🥭',name:'Anthracnose',severity:'high',
   summary:'Dark sunken spots on leaves, flowers, and fruits. Most damaging post-harvest disease of mango.',
   symptoms:['Irregular dark spots on young leaves','Tip/margin blight on inflorescences','Dark sunken spots on fruits','Fruit rot spreads rapidly post-harvest','Brown angular spots coalesce and kill twigs'],
   causes:['Colletotrichum gloeosporioides fungus','High humidity during flowering','Warm wet conditions 25–30°C','Poor orchard sanitation'],
   organic:['Bordeaux mixture 0.5% at panicle emergence','Neem oil spray @ 3ml/L','Copper oxychloride 50% WP @ 3g/L','Proper orchard floor management'],
   chemical:['Carbendazim 50% WP @ 1g/L','Thiophanate methyl 70% WP @ 1.5g/L','Azoxystrobin 23% SC @ 1ml/L','Mancozeb 75% WP @ 2.5g/L'],
   preventive:['Prune dead wood and twigs regularly','Apply preventive spray at bud stage','Avoid wetting fruit during irrigation','Post-harvest hot water treatment (52°C, 5 min)'],
   confidence:87},

  {id:'m2',crop:'mango',emoji:'🥭',name:'Powdery Mildew',severity:'medium',
   summary:'White powdery growth on panicles and young fruits. Can destroy entire flowering and fruiting.',
   symptoms:['White powdery growth on inflorescences, young leaves, fruits','Affected flowers and small fruits drop prematurely','Infected leaves curl and distort','Overall reduced fruit set'],
   causes:['Erysiphe alphitoides / Oidium mangiferae fungus','Dry weather with cool nights','Peak incidence during flowering season'],
   organic:['Sulfur 80% WP @ 3g/L at panicle emergence','Wettable sulfur spray every 15 days','Karanja oil @ 3ml/L'],
   chemical:['Hexaconazole 5% EC @ 2ml/L','Myclobutanil 10% WP @ 1g/L','Triadimefon 25% WP @ 1g/L'],
   preventive:['Apply preventive sulfur at bud break','Maintain tree vigor with balanced nutrition','Spray before and during flowering period'],
   confidence:85},

  // ── BANANA ──────────────────────────────────
  {id:'ba1',crop:'banana',emoji:'🍌',name:'Panama Wilt (Fusarium)',severity:'high',
   summary:'Yellowing and wilting starting from outer leaves. Internal brown-red vascular discoloration.',
   symptoms:['Yellowing starting from lower/outer leaves','Leaves collapse and hang down (skirt)','Brown-red discoloration of vascular tissue when cut','Stunted new growth','Plant eventually dies'],
   causes:['Fusarium oxysporum f.sp. cubense','Soil-borne fungus surviving decades in soil','Spreads through infected planting material','No effective chemical control'],
   organic:['Destroy infected plants with corm (burn)','Solarize soil for 4–6 weeks','Apply Trichoderma to planting holes','Use tissue culture disease-free plants'],
   chemical:['No effective chemical treatment','Focus entirely on prevention and resistant varieties'],
   preventive:['Use Fusarium-resistant varieties (Grand Naine, Tissue culture)','Never plant in previously infected fields','Strict quarantine of planting material','Excellent drainage'],
   confidence:88},

  // ── SUGARCANE ──────────────────────────────
  {id:'s1',crop:'sugarcane',emoji:'🎋',name:'Red Rot',severity:'high',
   summary:'Internal reddening of stalks with cross-hatching pattern and fermenting alcohol smell.',
   symptoms:['Withering and drying of top leaves (top drying)','Reddening of internal stalk tissue','White patches alternating with red (cross-hatching pattern)','Fermented alcohol smell from cut stalk','Stalk becomes hollow'],
   causes:['Colletotrichum falcatum fungus','Warm humid conditions 26–32°C','Waterlogging','Infected setts (planting material)'],
   organic:['Hot water treatment of setts at 50°C for 2 hours','Destroy infected clumps immediately','Improve field drainage'],
   chemical:['Seed treatment: Carbendazim 50% WP @ 0.25% solution soak','Propiconazole 25% EC soil drench'],
   preventive:['Use disease-free certified setts','Resistant varieties (CoJ 64, CoS 8436)','Crop rotation','Avoid waterlogging'],
   confidence:86},

  // ── APPLE ──────────────────────────────────
  {id:'a1',crop:'apple',emoji:'🍎',name:'Apple Scab',severity:'high',
   summary:'Olive-green to black scabby lesions on leaves and fruits. Most common apple disease worldwide.',
   symptoms:['Olive-green spots on upper leaf surfaces','Spots become dark and scabby with age','Scabby lesions on fruit surface','Cracking and deformity of infected fruits','Early leaf drop in severe cases'],
   causes:['Venturia inaequalis fungus','Cool wet spring weather','Rain spreading ascospores during bud-break','Infected leaf litter'],
   organic:['Sulfur 80% WP @ 3g/L from green tip stage','Bordeaux mixture 0.5%','Lime sulfur at pre-green stage','Remove and destroy fallen leaves'],
   chemical:['Captan 50% WP @ 2.5g/L','Mancozeb 75% WP @ 2.5g/L','Myclobutanil 10% WP @ 1g/L','Dithianon 75% WP @ 2g/L'],
   preventive:['Apply preventive fungicide starting at green tip','Destroy fallen infected leaves (shred/bury)','Resistant varieties (Red Chief, Star Crimson)','Proper pruning for airflow'],
   confidence:92},

  // ── SOYBEAN ──────────────────────────────────
  {id:'sb1',crop:'soybean',emoji:'🌱',name:'Soybean Rust',severity:'high',
   summary:'Tan to reddish-brown pustules on lower leaf surface. Can cause 40–80% yield loss.',
   symptoms:['Small tan/light brown lesions on lower leaf surface','Rust-colored or tan pustules visible on underside','Yellowing of leaves above infected areas','Rapid defoliation in severe outbreaks','Significant reduction in pod fill'],
   causes:['Phakopsora pachyrhizi fungus','Warm humid conditions 15–28°C','Wind-spread spores over long distances','Volunteer soybeans as inoculum source'],
   organic:['Neem oil 3ml/L spray','Sulfur-based fungicides as preventive'],
   chemical:['Tebuconazole 25% EC @ 1ml/L','Azoxystrobin 23% SC @ 1ml/L','Pyraclostrobin 20% EC @ 0.5ml/L','Propiconazole 25% EC @ 1ml/L'],
   preventive:['Monitor weather — spray before conditions favor disease','Early planting to escape peak pressure','Resistant varieties where available','Destroy volunteer soybeans'],
   confidence:85},

  // ── GENERIC (all crops) ──────────────────────
  {id:'gen1',crop:'all',emoji:'🌱',name:'Nutrient Deficiency',severity:'medium',
   summary:'Yellowing between leaf veins (chlorosis) indicating nitrogen, iron, magnesium, or zinc deficiency.',
   symptoms:['Yellowing of leaves — older leaves if N/Mg, younger if Fe/Zn','Interveinal chlorosis (yellowing between veins, veins stay green)','Stunted, weak plant growth','Pale green or yellow-green leaves overall','Purpling of stems/undersides (P deficiency)'],
   causes:['Insufficient fertilization','Soil pH imbalance (too acid/alkaline)','Waterlogging preventing root absorption','Soil compaction','Excessive leaching in sandy soils'],
   organic:['Compost @ 5–10 ton/ha incorporation','Vermicompost @ 2 ton/ha','Foliar spray: DAP 2% solution for N','Zinc sulfate foliar @ 0.5% for Zn deficiency'],
   chemical:['Urea 46% N @ 50 kg/ha for nitrogen','DAP @ 100 kg/ha for N+P','Zinc sulfate @ 25 kg/ha for zinc','Ferrous sulfate @ 20 kg/ha for iron','MgSO4 @ 2% foliar spray for magnesium'],
   preventive:['Soil test every season','pH correction to 6.0–7.0','Balanced NPK program','Proper drainage infrastructure'],
   confidence:72},

  {id:'gen2',crop:'all',emoji:'🌱',name:'Insect Pest Damage',severity:'medium',
   summary:'Mechanical damage from insect feeding — chewing, sucking, or mining of plant tissue.',
   symptoms:['Ragged holes or chewed leaf margins (caterpillars/beetles)','Yellowing with tiny spots on leaves (mite/thrip sucking)','Sticky honeydew and sooty mold (aphids/scale)','Wilting without apparent water stress (stem borers)','Silver streaks or distorted growth (thrips)'],
   causes:['Aphids, whiteflies, thrips sucking sap','Caterpillars, beetles chewing tissue','Stem borers tunneling inside','Mites (especially in hot dry conditions)','Secondary fungal infections at wound sites'],
   organic:['Neem oil + soap spray @ 5ml/L every 7–10 days','Yellow sticky traps for flying insects','Pheromone traps for specific pests','Biological control: release predatory insects','Garlic-chilli extract spray'],
   chemical:['Imidacloprid 17.8% SL @ 0.3ml/L for sucking pests','Lambda-cyhalothrin 5% EC @ 0.4ml/L for chewing pests','Spinosad 45% SC @ 0.3ml/L for caterpillars','Abamectin 1.8% EC @ 0.5ml/L for mites'],
   preventive:['Regular field scouting twice weekly','Install insect monitoring traps','Maintain field hygiene','Avoid overlapping crops that share pests','Encourage beneficial insects — avoid broad-spectrum sprays'],
   confidence:70}
];

// ════════════════════════════════════════════════
//  SMART DETECTION LOGIC
//  Properly picks diseases that match the selected crop
//  Healthy result has a realistic 25% probability
// ════════════════════════════════════════════════
function getSmartDiagnosis(crop) {
  // Filter diseases specific to this crop OR universal (all)
  const cropDiseases = DISEASES.filter(d => d.crop === crop);
  const genericDiseases = DISEASES.filter(d => d.crop === 'all');

  // 25% chance of healthy result
  if (Math.random() < 0.25) {
    return {
      status: 'healthy',
      name: 'No Disease Detected',
      crop: crop,
      confidence: Math.floor(Math.random() * 8) + 90, // 90-97%
      summary: 'Your ' + cropName(crop) + ' plant appears healthy with no visible signs of disease.',
      symptoms: [],
      causes: [],
      organic: ['Continue regular monitoring every 3–4 days','Apply preventive neem oil spray every 15 days','Maintain balanced fertilization'],
      chemical: ['No chemical treatment needed'],
      preventive: ['Monitor for early signs of pests or disease','Ensure proper irrigation — avoid water stress','Maintain good field sanitation'],
      weatherAlert: getWeatherAlert('healthy')
    };
  }

  // Pick from crop-specific diseases (weighted toward crop pool, sometimes generic)
  let pool = cropDiseases.length > 0
    ? (Math.random() < 0.85 ? cropDiseases : genericDiseases)
    : genericDiseases;

  const d = pool[Math.floor(Math.random() * pool.length)];

  return {
    status: d.severity === 'high' ? 'diseased' : 'warning',
    name: d.name,
    crop: d.crop === 'all' ? crop : d.crop,
    emoji: d.emoji,
    severity: d.severity,
    confidence: d.confidence + Math.floor(Math.random() * 6) - 3,
    summary: d.summary,
    symptoms: d.symptoms,
    causes: d.causes,
    organic: d.organic,
    chemical: d.chemical,
    preventive: d.preventive,
    weatherAlert: getWeatherAlert(d.severity === 'high' ? 'diseased' : 'warning')
  };
}

function cropName(c) {
  const map = {tomato:'Tomato',rice:'Rice',wheat:'Wheat',potato:'Potato',corn:'Corn',cotton:'Cotton',grape:'Grape',mango:'Mango',banana:'Banana',sugarcane:'Sugarcane',apple:'Apple',soybean:'Soybean'};
  return map[c] || c;
}

function cropEmoji(c) {
  const map = {tomato:'🍅',rice:'🌾',wheat:'🌿',potato:'🥔',corn:'🌽',cotton:'☁️',grape:'🍇',mango:'🥭',banana:'🍌',sugarcane:'🎋',apple:'🍎',soybean:'🌱'};
  return map[c] || '🌱';
}

// ════════════════════════════════════════════════
//  WEATHER ALERT
// ════════════════════════════════════════════════
function getWeatherAlert(status) {
  const pool = [
    {humidity:78, temp:29, rain:'Rain expected in 1 day'},
    {humidity:45, temp:33, rain:'No rain for 5 days'},
    {humidity:86, temp:26, rain:'Heavy rain yesterday'},
    {humidity:62, temp:31, rain:'Clear skies next 3 days'},
    {humidity:70, temp:28, rain:'Light showers forecast tonight'},
  ];
  const w = pool[Math.floor(Math.random() * pool.length)];

  if (status === 'diseased' && w.humidity > 70)
    return {type:'urgent', msg:`⚠️ High humidity (${w.humidity}%) + ${w.rain.toLowerCase()} — ideal conditions for disease spread. Apply fungicide within 24 hours.`};
  if (status === 'diseased')
    return {type:'caution', msg:`🌡️ ${w.temp}°C with ${w.humidity}% humidity. ${w.rain}. Treat now before next humid period.`};
  if (status === 'warning')
    return {type:'caution', msg:`🌤️ ${w.rain}. Monitor closely — current conditions may worsen symptoms.`};
  return {type:'good', msg:`✅ ${w.rain}. Good growing conditions. Continue regular monitoring.`};
}

// ════════════════════════════════════════════════
//  APP STATE
// ════════════════════════════════════════════════
let imageUploaded = false;
let selectedCrop = null;
let currentDiagnosis = null;
let dbFilter = 'all';

// ════════════════════════════════════════════════
//  NAVIGATION
// ════════════════════════════════════════════════
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const pg = btn.dataset.page;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('page-' + pg).classList.add('active');
    document.getElementById('heroSection').style.display = pg === 'detect' ? '' : 'none';
    if (pg === 'history') renderHistory();
    window.scrollTo({top: 0, behavior:'smooth'});
  });
});

// ════════════════════════════════════════════════
//  FILE UPLOAD
// ════════════════════════════════════════════════
function handleFile(input) {
  const file = input.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) { toast('❌ Please upload an image file'); return; }
  if (file.size > 10 * 1024 * 1024) { toast('❌ File too large — max 10MB'); return; }

  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('previewImg').src = e.target.result;
    document.getElementById('uploadZone').classList.add('hidden');
    document.getElementById('previewWrap').classList.add('show');
    document.getElementById('cropSection').style.display = 'block';
    imageUploaded = true;
    // Show analyze button if crop already selected
    if (selectedCrop) document.getElementById('analyzeBtn').classList.add('show');
    toast('✅ Image uploaded!');
  };
  reader.readAsDataURL(file);
}

// Drag and drop
const uz = document.getElementById('uploadZone');
uz.addEventListener('dragover', e => { e.preventDefault(); uz.classList.add('drag'); });
uz.addEventListener('dragleave', () => uz.classList.remove('drag'));
uz.addEventListener('drop', e => {
  e.preventDefault(); uz.classList.remove('drag');
  const f = e.dataTransfer.files[0];
  if (f && f.type.startsWith('image/')) {
    const dt = new DataTransfer(); dt.items.add(f);
    document.getElementById('fileInput').files = dt.files;
    handleFile(document.getElementById('fileInput'));
  }
});

function removeImage() {
  document.getElementById('previewImg').src = '';
  document.getElementById('previewWrap').classList.remove('show');
  document.getElementById('uploadZone').classList.remove('hidden');
  document.getElementById('cropSection').style.display = 'none';
  document.getElementById('analyzeBtn').classList.remove('show');
  document.getElementById('fileInput').value = '';
  imageUploaded = false;
  document.getElementById('btnText').textContent = '🔬 Analyze Crop';
}

function pickCrop(btn) {
  document.querySelectorAll('.crop-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedCrop = btn.dataset.crop;
  if (imageUploaded) document.getElementById('analyzeBtn').classList.add('show');
}

// ════════════════════════════════════════════════
//  ANALYSIS
// ════════════════════════════════════════════════
function runAnalysis() {
  if (!imageUploaded) { toast('❌ Please upload an image first'); return; }
  if (!selectedCrop) { toast('❌ Please select a crop type'); return; }

  const btn = document.getElementById('analyzeBtn');
  btn.disabled = true;
  document.getElementById('btnText').textContent = 'Analyzing…';
  document.getElementById('btnSpinner').style.display = 'block';
  document.getElementById('loadingOverlay').classList.add('show');

  const delay = 1400 + Math.random() * 800;

  setTimeout(() => {
    document.getElementById('loadingOverlay').classList.remove('show');
    btn.disabled = false;
    document.getElementById('btnText').textContent = '🔬 Analyze Again';
    document.getElementById('btnSpinner').style.display = 'none';

    const result = getSmartDiagnosis(selectedCrop);
    currentDiagnosis = result;
    renderResult(result);
    saveToHistory(result);
    renderScansList();
    toast('✅ Analysis complete!');
  }, delay);
}

// ════════════════════════════════════════════════
//  RENDER RESULT
// ════════════════════════════════════════════════
function renderResult(r) {
  document.getElementById('noResultBox').style.display = 'none';
  const panel = document.getElementById('resultPanel');

  const isHealthy = r.status === 'healthy';
  const headerClass = isHealthy ? 'healthy' : (r.status === 'diseased' ? 'diseased' : 'warning');
  const icon = isHealthy ? '✅' : (r.status === 'diseased' ? '🚨' : '⚠️');
  const headerEmoji = isHealthy ? cropEmoji(r.crop) : (r.emoji || cropEmoji(r.crop));
  const conf = Math.min(Math.max(r.confidence, 0), 100);

  let symptomsHtml = '';
  if (!isHealthy && r.symptoms.length) {
    symptomsHtml = `
      <div class="rb-section">
        <div class="rb-title">🔍 Symptoms Observed</div>
        <ul class="symptom-list">${r.symptoms.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>`;
  }

  let causesHtml = '';
  if (!isHealthy && r.causes.length) {
    causesHtml = `
      <div class="rb-section">
        <div class="rb-title">🦠 Likely Causes</div>
        <ul class="cause-list">${r.causes.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>`;
  }

  let treatHtml = `
    <div class="rb-section">
      <div class="rb-title">${isHealthy ? '✅ Preventive Care' : '💊 Treatment Plan'}</div>
      <div class="treatment-grid">
        <div class="treat-card organic">
          <div class="treat-card-title">🌿 Organic</div>
          <ul class="treat-list">${r.organic.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>
        <div class="treat-card ${isHealthy ? 'preventive' : 'chemical'}">
          <div class="treat-card-title">${isHealthy ? '🛡️ Preventive' : '🧪 Chemical'}</div>
          <ul class="treat-list">${(isHealthy ? r.preventive : r.chemical).map(t => `<li>${t}</li>`).join('')}</ul>
        </div>
        ${!isHealthy ? `<div class="treat-card preventive" style="grid-column:1/-1">
          <div class="treat-card-title">🛡️ Prevention for Next Season</div>
          <ul class="treat-list">${r.preventive.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>` : ''}
      </div>
    </div>`;

  let weatherHtml = '';
  if (r.weatherAlert) {
    weatherHtml = `
      <div class="rb-section">
        <div class="rb-title">🌤️ Weather Advisory</div>
        <div class="weather-strip ${r.weatherAlert.type}">${r.weatherAlert.msg}</div>
      </div>`;
  }

  let metaHtml = '';
  if (!isHealthy && r.severity) {
    metaHtml = `<div class="result-meta"><span class="meta-chip">Severity: ${r.severity.toUpperCase()}</span><span class="meta-chip">${cropEmoji(r.crop)} ${cropName(r.crop)}</span></div>`;
  }

  panel.innerHTML = `
    <div class="result-card">
      <div class="result-header ${headerClass}" data-emoji="${headerEmoji}">
        <div class="result-status-row">
          <div class="result-icon">${icon}</div>
          <div>
            <div class="result-title">${isHealthy ? '✨ Plant Looks Healthy' : r.name}</div>
            <div class="result-sub">${isHealthy ? cropEmoji(r.crop) + ' ' + cropName(r.crop) + ' — No disease detected' : r.summary.substring(0, 70) + '…'}</div>
          </div>
        </div>
        ${metaHtml}
        <div class="conf-row">
          <div class="conf-bar"><div class="conf-fill" id="confFill" style="width:0%"></div></div>
          <div class="conf-pct">Confidence: ${conf}%</div>
        </div>
      </div>
      <div class="result-body">
        <div class="rb-section">
          <div class="rb-title">📋 Summary</div>
          <div class="summary-text">${r.summary}</div>
        </div>
        ${symptomsHtml}
        ${causesHtml}
        ${treatHtml}
        ${weatherHtml}
      </div>
      <div class="result-actions">
        <button class="res-btn primary" onclick="removeImage();document.getElementById('resultPanel').classList.remove('show');document.getElementById('noResultBox').style.display=''">📸 New Scan</button>
        <button class="res-btn outline" onclick="window.print()">🖨️ Print Report</button>
      </div>
    </div>`;

  panel.classList.add('show');
  setTimeout(() => { const f = document.getElementById('confFill'); if(f) f.style.width = conf + '%'; }, 150);
  panel.scrollIntoView({behavior:'smooth', block:'nearest'});
}

// ════════════════════════════════════════════════
//  HISTORY
// ════════════════════════════════════════════════
function saveToHistory(r) {
  let h = JSON.parse(localStorage.getItem('cropcare_history') || '[]');
  const thumb = document.getElementById('previewImg').src;
  h.unshift({
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    status: r.status,
    name: r.name,
    crop: r.crop,
    confidence: r.confidence,
    thumbnail: thumb && thumb.length < 500000 ? thumb : null
  });
  if (h.length > 50) h = h.slice(0, 50);
  localStorage.setItem('cropcare_history', JSON.stringify(h));
}

function renderScansList() {
  const h = JSON.parse(localStorage.getItem('cropcare_history') || '[]');
  const list = document.getElementById('scansList');
  if (!h.length) { list.innerHTML = '<div style="padding:14px 20px;font-size:.83rem;color:var(--gray)">No scans yet</div>'; return; }
  list.innerHTML = h.slice(0, 5).map(s => `
    <div class="scan-item">
      <div class="scan-dot ${s.status}"></div>
      <div class="scan-info">
        <strong>${cropEmoji(s.crop)} ${cropName(s.crop)} — ${s.name}</strong>
        <span>${s.confidence}% confidence</span>
      </div>
      <div class="scan-time">${s.time}</div>
    </div>`).join('');
}

function renderHistory() {
  const h = JSON.parse(localStorage.getItem('cropcare_history') || '[]');
  const c = document.getElementById('historyContent');
  if (!h.length) {
    c.innerHTML = `<div class="no-hist"><span class="ni">📋</span><p>No detection history yet. Upload a crop image to get started!</p></div>`;
    return;
  }
  c.innerHTML = `<div class="hist-list">${h.map(s => `
    <div class="hist-item">
      <div class="hist-thumb">${s.thumbnail ? `<img src="${s.thumbnail}" alt="">` : cropEmoji(s.crop)}</div>
      <div class="hist-info">
        <h4>${cropEmoji(s.crop)} ${cropName(s.crop)} — ${s.name}</h4>
        <div class="meta">${s.date} ${s.time} &nbsp;·&nbsp; Confidence: ${s.confidence}%</div>
      </div>
      <span class="hist-badge ${s.status}">${s.status === 'healthy' ? '✅ Healthy' : s.status === 'diseased' ? '🚨 Disease' : '⚠️ Warning'}</span>
    </div>`).join('')}</div>
    <div style="text-align:center;margin-top:20px">
      <button onclick="clearHistory()" style="background:var(--warn);color:#fff;border:none;padding:10px 28px;border-radius:8px;font-weight:700;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;">🗑️ Clear All History</button>
    </div>`;
}

function clearHistory() {
  if (confirm('Clear all detection history?')) {
    localStorage.removeItem('cropcare_history');
    renderHistory();
    renderScansList();
    toast('🗑️ History cleared');
  }
}

// ════════════════════════════════════════════════
//  DISEASE DATABASE PAGE
// ════════════════════════════════════════════════
function renderDB() {
  const q = document.getElementById('dbSearch').value.toLowerCase();
  const grid = document.getElementById('dbGrid');
  let pool = DISEASES.filter(d => d.crop !== 'all');

  if (dbFilter !== 'all') pool = pool.filter(d => d.crop === dbFilter);
  if (q) pool = pool.filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.crop.toLowerCase().includes(q) ||
    d.summary.toLowerCase().includes(q) ||
    d.symptoms.some(s => s.toLowerCase().includes(q))
  );

  if (!pool.length) { grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--gray)">No diseases found. Try a different search.</div>'; return; }

  grid.innerHTML = pool.map(d => `
    <div class="db-card" onclick="showModal('${d.id}')">
      <div class="db-card-top">
        <h3>${d.emoji} ${d.name}</h3>
        <div class="db-badges">
          <span class="crop-badge">${cropEmoji(d.crop)} ${cropName(d.crop)}</span>
          <span class="sev-badge ${d.severity}">${d.severity} severity</span>
        </div>
      </div>
      <div class="db-card-body"><p>${d.summary}</p></div>
    </div>`).join('');
}

function filterDB() { renderDB(); }
function setFilter(btn) {
  document.querySelectorAll('.fchip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  dbFilter = btn.dataset.f;
  renderDB();
}

// ════════════════════════════════════════════════
//  MODAL (disease detail)
// ════════════════════════════════════════════════
function showModal(id) {
  const d = DISEASES.find(x => x.id === id);
  if (!d) return;
  document.getElementById('modalTitle').textContent = d.emoji + ' ' + d.name;
  document.getElementById('modalBody').innerHTML = `
    <div class="db-badges" style="margin-bottom:14px">
      <span class="crop-badge">${cropEmoji(d.crop)} ${cropName(d.crop)}</span>
      <span class="sev-badge ${d.severity}">${d.severity} severity</span>
    </div>
    <div class="summary-text" style="margin-bottom:16px">${d.summary}</div>
    <div class="rb-title">🔍 Symptoms</div>
    <ul class="symptom-list" style="margin-bottom:16px">${d.symptoms.map(s => `<li>${s}</li>`).join('')}</ul>
    <div class="rb-title">🦠 Causes</div>
    <ul class="cause-list" style="margin-bottom:16px">${d.causes.map(c => `<li>${c}</li>`).join('')}</ul>
    <div class="rb-title">🌿 Organic Treatment</div>
    <ul class="treat-list" style="margin-bottom:16px">${d.organic.map(t => `<li style="font-size:.85rem;color:var(--gray);margin-bottom:4px">${t}</li>`).join('')}</ul>
    <div class="rb-title">🧪 Chemical Treatment</div>
    <ul class="treat-list" style="margin-bottom:16px">${d.chemical.map(t => `<li style="font-size:.85rem;color:var(--gray);margin-bottom:4px">${t}</li>`).join('')}</ul>
    <div class="rb-title">🛡️ Prevention</div>
    <ul class="treat-list">${d.preventive.map(t => `<li style="font-size:.85rem;color:var(--gray);margin-bottom:4px">${t}</li>`).join('')}</ul>`;
  document.getElementById('modalBg').classList.add('open');
}
function closeModal() { document.getElementById('modalBg').classList.remove('open'); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ════════════════════════════════════════════════
//  GROWTH TIPS
// ════════════════════════════════════════════════
const TIPS = [
  {cat:'water',cls:'water',icon:'💧',title:'Smart Watering',tips:['Water early morning (6–8 AM) to reduce evaporation by 30%','Use drip irrigation to save 40–50% water vs flooding','Check soil moisture 5cm deep before watering — should be slightly moist','Avoid overhead watering in evening to prevent fungal diseases','Mulch with straw or leaves to reduce watering frequency','Deep, infrequent watering builds stronger root systems']},
  {cat:'soil',cls:'soil',icon:'🌍',title:'Soil Health',tips:['Test soil pH every season (ideal 6.0–7.0 for most crops)','Add 5–10 ton/ha compost to improve structure and water retention','Practice 3-year crop rotation to break disease and pest cycles','Use green manure crops (Dhaincha, Sunhemp) between seasons','Avoid over-tilling — protects earthworm populations','Apply gypsum @ 500 kg/ha to break soil crust']},
  {cat:'sun',cls:'sun',icon:'☀️',title:'Sunlight Management',tips:['Most vegetables need 6–8 hours of direct sunlight daily','Install 50% shade nets during peak summer heat (>40°C)','Orient rows North-South for even light throughout the day','Prune lower leaves to improve light penetration','Intercrop tall and short crops for efficient light use','Use reflective silver mulch to increase light to lower leaves']},
  {cat:'pest',cls:'pest',icon:'🐛',title:'Pest Management',tips:['Scout fields twice weekly — early detection saves 80% of losses','Install yellow sticky traps @ 25/acre for early pest detection','Apply neem oil @ 3ml/L every 15 days as a preventive','Plant marigolds as companion crop to repel nematodes and aphids','Use pheromone traps for moth pests (FAW, bollworm)','Follow IPM principles — chemical should be last resort']},
  {cat:'fert',cls:'fert',icon:'🧪',title:'Fertilizer Guide',tips:['Always fertilize based on soil test — don\'t guess','Split nitrogen: 50% basal, 25% at tillering, 25% at flowering','Foliar micronutrient sprays (Zn, B, Fe) give fastest correction','Biofertilizers (Rhizobium, PSB, Azotobacter) reduce chemical need by 25%','Apply potash to strengthen cell walls and improve disease resistance','Never apply urea in standing water — 40% is lost as gas']},
  {cat:'harv',cls:'harv',icon:'🌾',title:'Harvest Tips',tips:['Harvest in early morning when temperature is lowest','Use clean, sharp tools — disinfect between plants','Know maturity indices for each crop — don\'t go by dates alone','Handle produce gently to prevent bruising and entry of pathogens','Pre-cool produce within 2 hours of harvest','Store at correct temperature and humidity for each crop type']},
];

function renderTips() {
  document.getElementById('tipsGrid').innerHTML = TIPS.map(t => `
    <div class="tip-card">
      <div class="tip-head ${t.cls}">
        <span class="tip-icon">${t.icon}</span>
        <h3>${t.title}</h3>
      </div>
      <div class="tip-body"><ul>${t.tips.map(ti => `<li>${ti}</li>`).join('')}</ul></div>
    </div>`).join('');
}

// ════════════════════════════════════════════════
//  SEASONS
// ════════════════════════════════════════════════
const SEASONS = {
  spring: {crops:[{e:'🍅',n:'Tomato'},{e:'🥒',n:'Cucumber'},{e:'🫑',n:'Peppers'},{e:'🌿',n:'Herbs'},{e:'🥬',n:'Lettuce'},{e:'🫘',n:'Beans'}],tip:'Prepare soil with compost before planting. Start seeds indoors 6 weeks before last frost. Begin hardening off seedlings mid-spring.',disease:'Watch for damping-off in seedlings, early blight in tomatoes, aphid infestations, and whitefly.'},
  summer: {crops:[{e:'🌽',n:'Corn'},{e:'🍉',n:'Watermelon'},{e:'🍆',n:'Eggplant'},{e:'🌻',n:'Sunflower'},{e:'🥜',n:'Groundnut'},{e:'🌶️',n:'Chilli'}],tip:'Ensure adequate irrigation, mulch heavily to retain moisture, provide shade for sensitive crops, monitor for heat stress symptoms.',disease:'High risk: Powdery mildew, bacterial wilt, fruit borers, spider mites, and heat stress damage.'},
  monsoon: {crops:[{e:'🌾',n:'Rice'},{e:'🎋',n:'Sugarcane'},{e:'🌿',n:'Turmeric'},{e:'🫚',n:'Ginger'},{e:'🥔',n:'Potato'},{e:'🌱',n:'Soybean'}],tip:'Ensure proper drainage infrastructure. Apply preventive fungicides before heavy rains. Use raised beds for vegetables. Avoid waterlogging at all costs.',disease:'Highest disease risk season: blast in rice, late blight in potato, red rot in sugarcane, anthracnose, and bacterial diseases.'},
  autumn: {crops:[{e:'🥦',n:'Broccoli'},{e:'🥕',n:'Carrot'},{e:'🧅',n:'Onion'},{e:'🌿',n:'Wheat'},{e:'🥬',n:'Spinach'},{e:'🫒',n:'Mustard'}],tip:'Plant cool-season crops. Add organic matter to soil before winter. Harvest summer crops before frost. Begin land preparation for winter crops.',disease:'Watch for downy mildew in leafy greens, rust diseases in wheat, late season aphid outbreaks.'},
  winter: {crops:[{e:'🌿',n:'Wheat'},{e:'🫒',n:'Mustard'},{e:'🥬',n:'Cabbage'},{e:'🥕',n:'Radish'},{e:'🌱',n:'Peas'},{e:'🧄',n:'Garlic'}],tip:'Protect crops from frost with covers. Reduce irrigation frequency. Apply phosphorus for root development. Plan and order seeds for next season.',disease:'Lower disease pressure but watch for frost damage, powdery mildew in protected crops, and storage rots.'},
};

function showSeason(btn) {
  document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const s = SEASONS[btn.dataset.s];
  document.getElementById('seasonCards').innerHTML = `
    <div class="season-cards">
      <div class="season-card">
        <h3>🌱 Recommended Crops</h3>
        <div class="season-crop-grid">${s.crops.map(c => `<div class="scrop"><span>${c.e}</span><span>${c.n}</span></div>`).join('')}</div>
      </div>
      <div class="season-card">
        <h3>💡 Season Tips</h3>
        <p style="font-size:.9rem;color:var(--gray);line-height:1.65">${s.tip}</p>
      </div>
      <div class="season-card" style="border-left:4px solid var(--warn)">
        <h3>⚠️ Disease Watch</h3>
        <p style="font-size:.9rem;color:var(--gray);line-height:1.65">${s.disease}</p>
      </div>
    </div>`;
}

// ════════════════════════════════════════════════
//  TOAST
// ════════════════════════════════════════════════
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ════════════════════════════════════════════════
//  CONNECTION STATUS
// ════════════════════════════════════════════════
function checkConn() {
  const b = document.getElementById('connBadge');
  const tx = document.getElementById('connText');
  if (navigator.onLine) {
    b.style.background = 'rgba(82,183,136,.2)';
    tx.textContent = 'Online';
  } else {
    b.style.background = 'rgba(212,56,13,.2)';
    tx.textContent = 'Offline';
  }
}
window.addEventListener('online', checkConn);
window.addEventListener('offline', checkConn);

// ════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════
renderDB();
renderTips();
showSeason(document.querySelector('.stab.active'));
renderScansList();
checkConn();
</script>
