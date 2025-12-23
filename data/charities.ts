export type Charity = {
  slug: string;          // used in URL: /charity/[slug]
  name: string;
  description: string;
  country: string;
  city: string;
  category: string;
  donateUrl: string;
  websiteUrl?: string;   // optional
  verified: boolean;
  lastUpdated: string;   // e.g. "2025-12-23"
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
];

export const charities: Charity[] = [
  {
    slug: "example-charity-1",
    name: "Example Charity 1",
    description: "Helps provide food and support to families.",
    country: "Jordan",
    city: "Amman",
    category: "Food",
    donateUrl: "https://example.com/donate",
    websiteUrl: "https://example.com",
    verified: true,
    lastUpdated: "2025-12-23",
  },
  {
    slug: "example-charity-2",
    name: "Example Charity 2",
    description: "Supports education for students in need.",
    country: "Palestine",
    city: "Gaza",
    category: "Education",
    donateUrl: "https://example.com/donate",
    verified: false,
    lastUpdated: "2025-12-10",
  },
  {
    slug: "example-charity-3",
    name: "Example Charity 3",
    description: "Provides medical support and supplies.",
    country: "Jordan",
    city: "Irbid",
    category: "Health",
    donateUrl: "https://example.com/donate",
    verified: true,
    lastUpdated: "2025-11-30",
  },
];
