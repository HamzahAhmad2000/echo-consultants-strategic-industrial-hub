export enum PageState {
  HOME = 'HOME',
  INDUSTRIAL = 'INDUSTRIAL',
  YIELD = 'YIELD',
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