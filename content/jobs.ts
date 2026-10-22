export type JobSummary = {
  slug: string;
  title: string;
  level: string;
  levelNote?: string;
  commitment: string;
  summary: string;
  location?: string;
  reportingLine?: string;
};

// Add new open roles here and create their detail page at /job/[slug].
export const openRoles: readonly JobSummary[] = [
  {
    slug: "associate",
    title: "Member of Technical Staff / Associate",
    level: "Associate",
    commitment: "Full time",
    summary:
      "Build and manage agents, develop proprietary data, and turn technical judgment and founder relationships into investment insight.",
    location: "San Francisco or New York City only",
  },
  {
    slug: "capital",
    title: "Investor Relations & Capital Formation",
    level: "Principal or Managing Director",
    levelNote: "Depending on experience and skillset",
    commitment: "Full time",
    summary:
      "Build the capital base for an enduring investment firm. Lead fundraising and institutional relationships, with a secondary contribution to portfolio management.",
    reportingLine: "Managing Partners",
  },
];
