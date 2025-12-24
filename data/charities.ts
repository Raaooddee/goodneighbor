import { ifrcCharities } from "./ifrcCharities";
import { ngoCharities } from "./ngoCharities";

export type Charity = {
  slug: string; // used in URL: /charity/[slug]
  name: string;
  description: string;
  country: string;
  city: string;
  category: string;
  donateUrl: string;
  websiteUrl?: string; // optional
  verified: boolean;
  lastUpdated: string; // e.g. "2025-12-24"
};

export const ALL_CATEGORIES = [
  "Food",
  "Education",
  "Health",
  "Emergency Relief",
  "Refugees",
  "Orphans & Children",
  "Water & Sanitation",
  "Environment",
  "Animals",
  "Disability Support",
  "Mental Health",
  "Women’s Support",
  "Housing",
  "Community Development",
  "Faith-Based",
  "Human Rights",
  "Poverty",
  "Medical Aid",
  "Scholarships",
] as const;

// Your hand-picked / curated charities (keep or edit these)
const manualCharities: Charity[] = [
  {
    slug: "doctors-without-borders-msf",
    name: "Doctors Without Borders (MSF)",
    description:
      "Provides emergency medical care in conflict zones, natural disasters, and disease outbreaks worldwide.",
    country: "International",
    city: "Multiple",
    category: "Health",
    donateUrl: "https://donate.doctorswithoutborders.org/",
    websiteUrl: "https://www.doctorswithoutborders.org/",
    verified: true,
    lastUpdated: "2025-12-24",
  },
  {
    slug: "unicef",
    name: "UNICEF",
    description: "Supports children worldwide with health, education, emergency relief, and protection programs.",
    country: "International",
    city: "Multiple",
    category: "Orphans & Children",
    donateUrl: "https://www.unicef.org/donate",
    websiteUrl: "https://www.unicef.org/",
    verified: true,
    lastUpdated: "2025-12-24",
  },
  {
    slug: "world-central-kitchen",
    name: "World Central Kitchen",
    description: "Provides fresh meals to people impacted by natural disasters and humanitarian crises.",
    country: "International",
    city: "Multiple",
    category: "Emergency Relief",
    donateUrl: "https://wck.org/donate",
    websiteUrl: "https://wck.org/",
    verified: true,
    lastUpdated: "2025-12-24",
  },
];

// ✅ Force all generated packs to show Verified for now
const ngoVerified: Charity[] = (ngoCharities as Charity[]).map((c) => ({ ...c, verified: true }));
const ifrcVerified: Charity[] = (ifrcCharities as unknown as Charity[]).map((c) => ({
  ...c,
  verified: true,
}));

export const charities: Charity[] = [...manualCharities, ...ngoVerified, ...ifrcVerified];
