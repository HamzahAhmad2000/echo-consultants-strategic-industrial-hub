import { Metric, ProjectData, ProjectPhase } from './types';

// Page 1: Home Dashboard Metrics
export const PILLARS_METRICS: ProjectData[] = [
  {
    id: 'gold',
    title: 'Placer Gold',
    subtitle: 'Rapid Return',
    description: 'Indigenous harvesting model with rapid cash flow.',
    metrics: [
      { label: 'Total ROI', value: '274%', highlight: true },
      { label: 'Breakeven', value: 'Low' },
    ]
  },
  {
    id: 'ree',
    title: 'Rare Earth Elements',
    subtitle: 'Strategic Sovereignty',
    description: '25% Grade Superiority vs 5-7% Global Average.',
    metrics: [
      { label: 'Grade', value: '25%', highlight: true },
      { label: 'Application', value: 'EVs & Defense' },
    ]
  },
  {
    id: 'steel',
    title: 'Specialized Steel',
    subtitle: 'National Ecosystem',
    description: '5 Million Ton/Year National Ecosystem. Mine-to-Product.',
    metrics: [
      { label: 'Capacity', value: '5M Tons/Yr', highlight: true },
      { label: 'Focus', value: 'High-Tensile' },
    ]
  },
  {
    id: 'pgm',
    title: 'Platinum Group Metals',
    subtitle: 'New Bushveld Frontier',
    description: 'First-mover access to underexplored Ophiolite belts.',
    metrics: [
      { label: 'Demand', value: '$33B', subtext: 'by 2033' },
      { label: 'Targets', value: 'Zhob/Muslim Bagh' },
    ]
  }
];

// Page 2: Industrial Data
export const REE_PHASES: ProjectPhase[] = [
  {
    name: 'Phase 1: Pilot Extraction',
    investment: '$32 Million',
    outcome: '120 tons/year Capacity',
    details: ['Establish Pilot Plant', 'JORC-Compliant Certification', 'IRR: ~40%', 'Payback: ~3 Years']
  },
  {
    name: 'Phase 2: Industrial Expansion',
    investment: '$95 Million',
    outcome: '100 tons/day Scale-up',
    details: ['Integrated Metal Separation', 'Supply for EV Motors', 'Wind Turbine Magnets', 'Defense Alloys']
  }
];

export const STEEL_PHASES: ProjectPhase[] = [
  {
    name: 'Phase 1: Foundation',
    investment: '$39 Million',
    outcome: 'Bankable Feasibility',
    details: ['Resource Quantification', 'Final JORC Report', 'Definitive BFS']
  },
  {
    name: 'Phase 2: Development',
    investment: '$1.117 Billion',
    outcome: 'Mine & Plant',
    details: ['Mining Operations', 'Beneficiation Plant', 'DRI Furnace Construction']
  },
  {
    name: 'Phase 3: Commissioning',
    investment: '$1.177 Billion+',
    outcome: 'Mill & Refinery',
    details: ['Integrated Specialized Steel Complex', 'Working Capital Injection', 'Full Production']
  }
];

// Page 3: Yield Data
export const GOLD_ROI_METRICS: Metric[] = [
  { label: 'Capex Investment', value: '$650K' },
  { label: 'Annual Revenue', value: '$972K', subtext: '@ $129.62/g' },
  { label: 'Annual Opex', value: '$486K', subtext: '50% of Revenue' },
  { label: 'Investor Share', value: '$243K', subtext: 'Per Year' },
  { label: '10-Year Return', value: '$2.43M', highlight: true },
  { label: 'Total ROI', value: '274%', highlight: true },
];

export const GOLD_PROCESS_STEPS = [
  {
    title: 'Extraction',
    desc: 'Suction dredges & excavators extract sediment from Indus River.',
  },
  {
    title: 'Washing & Screening',
    desc: 'Trommels wash and screen material to remove large rocks.',
  },
  {
    title: 'Gravity Separation',
    desc: 'Spiral chutes & shaking tables capture heavy gold particles.',
  },
  {
    title: 'Refining',
    desc: 'Gold concentrate melted into bars. Zero Cyanide/Mercury.',
  }
];

export const SAFFRON_STEPS = [
  {
    title: 'Precision Harvesting',
    desc: 'Support soil, grip base of stem to protect corms.',
  },
  {
    title: 'Sterile Extraction',
    desc: 'Separation of Red Stigmas (Saffron) from yellow stamens.',
  },
  {
    title: 'Controlled Drying',
    desc: '65°C for 10-15 mins until "Snap-Dry" brittle texture.',
  },
  {
    title: 'Preservation',
    desc: 'Immediate airtight glass storage to retain volatile oils.',
  }
];

// CCRA: Cannabis Control & Regulatory Authority Data
export const CCRA_FDI_PIPELINE = [
  { investor: 'Health House International (Chanelle McCoy)', amount: '$50 Million', status: 'Pending Policy' },
  { investor: 'Denim Sector Investors', amount: '$100 Million', status: 'Pending Policy' },
  { investor: 'Citi Pharma', amount: 'Ready for Entry', status: 'Leading Medicinal License' },
  { investor: 'Fauji Foundation', amount: 'Strategic Investment', status: 'International Partners Ready' },
];

export const CCRA_INDUSTRY_ASSOCIATIONS = [
  { name: 'PPMA', readiness: 'Ready for medicinal and industrial alignment' },
  { name: 'APTMA', readiness: 'Ready to replace Chinese hemp with Pakistani production' },
];

export const CCRA_CELADON_TARGETS = [
  { formulation: 'Endometriosis Treatment', description: 'Using Celadon IP to treat 20 million Pakistani women' },
  { formulation: 'Delta 9 (D9) for CINV', description: 'Semi-synthetic cannabinoid for Chemotherapy-Induced Nausea and Vomiting' },
];

export const CCRA_CELADON_STEPS = [
  { step: 'Regulatory Consultation', desc: 'Discuss vision with key bodies to align with national priorities' },
  { step: 'Partner Identification', desc: 'Work with regulators to select a pharmaceutical company with national distribution' },
  { step: 'Study Design', desc: 'Finalize scope for endometriosis and D9 observational study' },
];

export const CCRA_PRODUCTION_OUTPUT = [
  { product: 'Flowers', quantity: '460 kg', perAcre: true },
  { product: 'Dust / Garda', quantity: '12 kg', perAcre: true },
  { product: 'Seeds', quantity: '125 kg', perAcre: true },
  { product: 'Seed Oil', quantity: '12 kg', perAcre: true },
  { product: 'Wood / Stalk', quantity: '384 kg', perAcre: true },
  { product: 'Textile Yarn', quantity: '16 kg', perAcre: true },
];

export const CCRA_LOCAL_REVENUE = [
  { item: 'Dust/Garda', revenue: '1.56M PKR' },
  { item: 'Raw Seeds', revenue: '0.53M PKR' },
  { item: 'Seed Oil', revenue: '0.06M PKR' },
  { item: 'Yarn', revenue: '0.07M PKR' },
];

export const CCRA_OPEX_BREAKDOWN = [
  { item: 'Crop Production', cost: '500,000 PKR' },
  { item: 'Labour', cost: '15,000 PKR' },
  { item: 'Transport (Farm → Peshawar)', cost: '40,000 PKR' },
  { item: 'Transport (Peshawar → Karachi)', cost: '300,000 PKR' },
];