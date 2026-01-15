export enum PageState {
  HOME = 'HOME',
  PLACER_GOLD = 'PLACER_GOLD',
  CANNABIS = 'CANNABIS',
  SAFFRON = 'SAFFRON',
  PLATINUM = 'PLATINUM',
  STEEL_MILL = 'STEEL_MILL',
  REE = 'REE',
  AGRICULTURE = 'AGRICULTURE',
  ENVIRONMENT = 'ENVIRONMENT',
}

export interface Metric {
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
}

export interface ProjectPhase {
  name: string;
  investment: string;
  outcome: string;
  details: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  metrics: Metric[];
  description: string;
}

export interface NavItem {
  id: PageState;
  label: string;
}