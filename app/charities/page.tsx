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
          Search and filter. When you donate, you’ll be sent to the charity’s official page.
        </p>
      </div>

      {/* Controls */}
      <section className="rounded-3xl bg-white p-6 text-emerald-950 shadow-sm ring-1 ring-white/20">
        <div className="grid gap-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, city, country, keyword…"
            className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-emerald-950 outline-none focus:ring-2 focus:ring-emerald-200"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-xs font-semibold text-emerald-800/80">Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-emerald-950 outline-none focus:ring-2 focus:ring-emerald-200"
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
              <span className="text-xs font-semibold text-emerald-800/80">Country</span>
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Type a country… (leave empty for All)"
                className="rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-emerald-950 outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </label>
          </div>

          <div className="text-sm text-emerald-900/80">
            Showing <span className="font-semibold text-emerald-950">{filtered.length}</span> charities
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="grid gap-4">
        {filtered.map((c) => (
          <Link
            key={c.slug}
            href={`/charity/${c.slug}`}
            className="group rounded-3xl bg-white p-6 text-emerald-950 shadow-sm ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="grid gap-2">
                <div className="text-lg font-extrabold tracking-tight">{c.name}</div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
                    {c.category}
                  </span>
                  {c.verified && (
                    <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
                      ✅ Verified
                    </span>
                  )}
                  <span className="text-xs text-emerald-900/60">Updated: {c.lastUpdated}</span>
                </div>

                <p className="text-sm leading-relaxed text-emerald-900/80">{c.description}</p>
                <div className="text-sm text-emerald-900/70">
                  📍 {c.city}, {c.country}
                </div>
              </div>

              <a
                href={c.donateUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex h-fit items-center justify-center rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
              >
                Donate →
              </a>
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <div className="rounded-3xl bg-white p-6 text-emerald-900/80 shadow-sm ring-1 ring-white/20">
            No matches. Try removing filters or searching something else.
          </div>
        )}
      </section>

      {/* Submit */}
      <section className="rounded-3xl bg-white p-6 text-emerald-950 shadow-sm ring-1 ring-white/20">
        <h3 className="text-lg font-extrabold">Know a charity we should add?</h3>
        <p className="mt-2 text-sm text-emerald-900/80">
          Send us the official website + donate page link and we’ll review it.
        </p>
        <a
          href="mailto:YOUR_EMAIL_HERE?subject=GoodNeighbor%20Charity%20Submission"
          className="mt-4 inline-flex rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
          onClick={(e) => e.stopPropagation()}
        >
          Submit a charity →
        </a>
      </section>
    </div>
  );
}
