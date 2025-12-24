"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { charities, ALL_CATEGORIES } from "../../data/charities";

export default function CharitiesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [country, setCountry] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const ctry = country.trim().toLowerCase();

    return charities.filter((c) => {
      const matchCategory = category === "All" || c.category === category;
      const matchCountry = ctry === "" || c.country.toLowerCase().includes(ctry);

      const haystack = `${c.name} ${c.description} ${c.city || ""} ${c.country} ${c.category}`.toLowerCase();
      const matchSearch = q === "" || haystack.includes(q);

      return matchCategory && matchCountry && matchSearch;
    });
  }, [search, category, country]);

  const safeFiltered = useMemo(
    () =>
      filtered.filter(
        (c) => typeof c.slug === "string" && c.slug.trim().length > 0
      ),
    [filtered]
  );

  return (
    <div className="grid gap-6">
      {/* Header */}
      <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Charities</h1>
        <p className="mt-2 text-white/85">
          Search and filter charities. We link you to official donation pages.
        </p>

        {/* Search */}
        <div className="mt-5">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, keyword, city, or country…"
            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>

        {/* Filters */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-semibold text-white/75">Category</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="All">All</option>
              {ALL_CATEGORIES.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-xs font-semibold text-white/75">Country (type to filter)</span>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="e.g., Jordan (leave empty for All)"
              className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-white/20"
            />
          </label>
        </div>

        <p className="mt-3 text-sm text-white/75">
          Showing <span className="font-semibold text-white">{safeFiltered.length}</span> charities
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-3">
        {safeFiltered.map((c) => {
          const slug = c.slug.trim().toLowerCase();
          const location = c.city ? `${c.city}, ${c.country}` : c.country;

          return (
            <Link
              key={slug}
              href={`/charity/${slug}`}
              className="group rounded-3xl border border-white/15 bg-white/10 p-6 text-white shadow-sm transition hover:bg-white/15"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid gap-2">
                  <div className="text-lg font-extrabold text-white">{c.name}</div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                      {c.category}
                    </span>

                    {c.verified && (
                      <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
                        ✅ Verified
                      </span>
                    )}

                    <span className="text-xs text-white/70">Updated: {c.lastUpdated}</span>
                  </div>

                  <p className="text-sm text-white/85">{c.description}</p>
                  <p className="text-sm text-white/80">📍 {location}</p>
                </div>

                <span className="mt-1 text-sm font-semibold text-white/90 group-hover:translate-x-0.5 transition">
                  View →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {safeFiltered.length === 0 && (
        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white/85">
          No matches. Try removing filters or searching a different keyword.
        </div>
      )}
    </div>
  );
}
