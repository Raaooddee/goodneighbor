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
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Charities</h1>
        <p className="mt-2 text-slate-600">
          Search and filter, then donate on the charity’s official website.
        </p>
      </div>

      {/* Search */}
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, city, country, or keyword…"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:ring-4 focus:ring-emerald-200"
        />

        {/* Filters */}
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-semibold text-slate-600">Category</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-4 focus:ring-emerald-200"
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
            <span className="text-xs font-semibold text-slate-600">Country (type to filter)</span>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="e.g., Jordan (leave empty for All)"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:ring-4 focus:ring-emerald-200"
            />
          </label>
        </div>

        <p className="mt-3 text-sm text-slate-500">
          Showing <span className="font-semibold text-slate-900">{filtered.length}</span> charities
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((c) => {
          const location = c.city ? `${c.city}, ${c.country}` : c.country;

          return (
            <Link
              key={c.slug}
              href={`/charity/${c.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid gap-2">
                  <div className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-800">
                    {c.name}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900">
                      {c.category}
                    </span>

                    {c.verified && (
                      <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
                        ✅ Verified
                      </span>
                    )}

                    <span className="text-xs text-slate-500">Updated: {c.lastUpdated}</span>
                  </div>
                </div>

                <span className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                  View →
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-600 line-clamp-3">{c.description}</p>
              <p className="mt-3 text-sm text-slate-500">📍 {location}</p>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
          No matches. Try removing filters or searching a different keyword.
        </div>
      )}

      {/* Submit */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-extrabold text-slate-900">Want to add a charity?</h3>
        <p className="mt-2 text-sm text-slate-600">
          Send the official website + donate page link and we’ll add it.
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
