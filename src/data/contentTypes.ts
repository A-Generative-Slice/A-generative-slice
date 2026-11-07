export interface Faq {
  q: string;
  a: string;
}

export interface ContentSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface CityPageData {
  slug: string;
  navLabel: string;
  h1: string;
  title: string;
  description: string;
  kicker: string;
  intro: string[];
  stats: { label: string; value: string }[];
  sections: ContentSection[];
  faqs: Faq[];
  related: { label: string; to: string }[];
}

export interface ArticleData {
  slug: string;
  kind: 'guide';
  title: string;
  h1: string;
  description: string;
  kicker: string;
  date: string;
  readMins: number;
  intro: string[];
  sections: ContentSection[];
  faqs: Faq[];
  related: { label: string; to: string }[];
}

export interface CaseStudyData {
  slug: string;
  kind: 'case-study';
  client: string;
  industry: string;
  title: string;
  h1: string;
  description: string;
  kicker: string;
  date: string;
  readMins: number;
  intro: string[];
  challenge: string[];
  solution: string[];
  results: { label: string; value: string }[];
  stack: string[];
  sections: ContentSection[];
  faqs: Faq[];
  related: { label: string; to: string }[];
}

export type InsightEntry = ArticleData | CaseStudyData;