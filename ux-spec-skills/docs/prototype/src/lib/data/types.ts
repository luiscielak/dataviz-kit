export type SkillCategory =
  | "critique"
  | "rigor"
  | "consulting"
  | "executive"
  | "global"
  | "router";

export type ExpertTier = "Core" | "Practice";

export type RelatedAsset = {
  label: string;
  href?: string;
  emptyLabel: string;
};

export type Skill = {
  slug: string;
  name: string;
  category: SkillCategory;
  categoryLabel: string;
  description: string;
  path: string;
  purpose: string;
  whenToUse: string[];
  inputs: { name: string; detail: string }[];
  prompt: string;
  outputFormat: string[];
  antiPatterns: string[];
  example?: string;
  related: {
    template?: string;
    sample?: string;
    html?: string;
    expertSlug?: string;
    principles?: string;
  };
};

export type ExpertDemo = {
  /** Matches the demo file at public/expert-demos/<slug>.html (copied from examples/experts/<slug>/demo.html). */
  slug: string;
  principleLabel: string;
  caption: string;
};

export type Expert = {
  slug: string;
  name: string;
  tier: ExpertTier;
  whyInKit: string;
  bio: string[];
  works: { title: string; year: string; type: string }[];
  furtherReading: { label: string; href: string }[];
  principlesPath: string;
  principlesSlug: string;
  relatedSkillSlugs: string[];
  demo?: ExpertDemo;
};

export const VERSION = "0.1.0";
export const EXPERT_COUNT = 7;
export const SKILL_COUNT = 16;

export const CATEGORY_NAV: {
  id: string;
  label: string;
  href: string;
  category?: SkillCategory;
}[] = [
  { id: "overview", label: "Overview", href: "/" },
  { id: "experts", label: "Experts", href: "/experts" },
  {
    id: "critique",
    label: "Critique",
    href: "/#critique",
    category: "critique",
  },
  {
    id: "rigor",
    label: "Dataviz rigor",
    href: "/#rigor",
    category: "rigor",
  },
  {
    id: "consulting",
    label: "Consulting",
    href: "/#consulting",
    category: "consulting",
  },
  {
    id: "executive",
    label: "Executive",
    href: "/#executive",
    category: "executive",
  },
  { id: "global", label: "Global", href: "/#global", category: "global" },
  { id: "router", label: "Router", href: "/#router", category: "router" },
];

export const CATEGORY_ORDER: SkillCategory[] = [
  "critique",
  "rigor",
  "consulting",
  "executive",
  "global",
  "router",
];

export const CATEGORY_LABELS: Record<SkillCategory, string> = {
  critique: "Critique",
  rigor: "Dataviz rigor",
  consulting: "Consulting storytelling",
  executive: "Executive dashboards",
  global: "Global",
  router: "Router",
};

export const CATEGORY_CARD_LABEL: Record<SkillCategory, string> = {
  critique: "CRITIQUE",
  rigor: "RIGOR",
  consulting: "CONSULTING",
  executive: "EXEC",
  global: "GLOBAL",
  router: "ROUTER",
};
