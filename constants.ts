import { Metric, ProjectData, ProjectPhase } from './types';

// Page 1: Home Dashboard Metrics
export const PILLARS_METRICS: ProjectData[] = [
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
  },
  {
    id: 'gold',
    title: 'Placer Gold',
    subtitle: 'Rapid Return',
    description: 'Indigenous harvesting model with rapid cash flow.',
    metrics: [
      { label: 'Total ROI', value: '274%', highlight: true },
      { label: 'Breakeven', value: 'Low' },
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