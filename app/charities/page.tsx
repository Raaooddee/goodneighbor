"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { charities, ALL_CATEGORIES } from "../../data/charities";

export default function CharitiesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [country, setCountry] = useState(""); // empty = all

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const ctry = country.trim().toLowerCase();

    return charities.filter((c) => {
      const matchCategory = category === "All" || c.category === category;
      const matchCountry = ctry === "" || c.country.toLowerCase().includes(ctry);

      const haystack = `${c.name} ${c.description} ${c.city} ${c.country} ${c.category}`.toLowerCase();
      const matchSearch = q === "" || haystack.includes(q);

      return matchCategory && matchCountry && matchSearch;
    });
  }, [search, category, country]);

  return (
    <div className="grid gap-8">
      {/* Header */}
      <div className="grid gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Charities</h1>
        <p className="text-white/85">
          Search and filter charities. We never take payments — we send you to official links.
        </p>
      </div>

      {/* Search */}
      <div className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, keyword, city, or country…"
          className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-white/20"
        />

        {/* Filters */}
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-semibold text-white/75">Category</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="All">All</option>
              {ALL_CATEGORIES.map((x) => (
                <option key={x} value={x} className="text-black">
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
          Showing <span className="font-semibold text-white">{filtered.length}</span> charities
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-4">
        {filtered.map((c) => {
          // ✅ Fix: no comma if city is empty
          const location = c.city ? `${c.city}, ${c.country}` : c.country;

          return (
            <div key={c.slug} className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                {/* Clickable info area */}
                <Link href={`/charity/${c.slug}`} className="grid gap-2 no-underline">
                  <div className="text-lg font-extrabold text-white">{c.name}</div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                      {c.category}
                    </span>

                    {c.verified && (
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-800">
                        ✅ Verified
                      </span>
                    )}

                    <span className="text-xs text-white/70">Updated: {c.lastUpdated}</span>
                  </div>

                  <p className="text-sm text-white/85">{c.description}</p>
                  <p className="text-sm text-white/80">📍 {location}</p>
                </Link>

                {/* Donate button */}
                <a
                  href={c.donateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-fit items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-emerald-800 hover:bg-white/90"
                >
                  Donate →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white/85">
          No matches. Try removing filters or searching a different keyword.
        </div>
      )}

      {/* Submit section */}
      <div className="rounded-3xl bg-white p-6 text-emerald-950 shadow-sm ring-1 ring-white/20">
        <h3 className="text-lg font-extrabold">Know a charity we should add?</h3>
        <p className="mt-2 text-sm text-emerald-900/80">
          Send us the official website + donate page link and we’ll review it.
        </p>
        <a
          href="mailto:raad.alshaikh.hassan@gmail.com?subject=GoodNeighbor%20Charity%20Submission"
          className="mt-4 inline-flex rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
        >
          Submit via email →
        </a>
      </div>
    </div>
  );
}
