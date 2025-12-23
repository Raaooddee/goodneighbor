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

export const charities: Charity[] = [
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
    slug: "international-rescue-committee",
    name: "International Rescue Committee (IRC)",
    description:
      "Supports refugees and people affected by humanitarian crises with safety, health, education, and resettlement services.",
    country: "International",
    city: "Multiple",
    category: "Refugees",
    donateUrl: "https://help.rescue.org/donate",
    websiteUrl: "https://www.rescue.org/",
    verified: true,
    lastUpdated: "2025-12-24",
  },
  {
    slug: "charity-water",
    name: "charity: water",
    description: "Funds clean and safe drinking water projects in communities around the world.",
    country: "International",
    city: "Multiple",
    category: "Water & Sanitation",
    donateUrl: "https://www.charitywater.org/donate",
    websiteUrl: "https://www.charitywater.org/",
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
    slug: "icrc",
    name: "International Committee of the Red Cross (ICRC)",
    description:
      "Provides humanitarian protection and assistance for people affected by armed conflict and violence.",
    country: "International",
    city: "Multiple",
    category: "Emergency Relief",
    donateUrl: "https://www.icrc.org/en/donate",
    websiteUrl: "https://www.icrc.org/",
    verified: true,
    lastUpdated: "2025-12-24",
  },
];
