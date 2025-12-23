import { countries } from "countries-list";

export const COUNTRY_NAMES = Object.values(countries)
  .map((c) => c.name)
  .sort((a, b) => a.localeCompare(b));