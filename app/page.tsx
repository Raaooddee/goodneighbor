"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { charities, ALL_CATEGORIES } from "../data/charities";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [country, setCountry] = useState(""); // empty = all countries

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
    <main
      style={{
        padding: 24,
        maxWidth: 900,
        margin: "0 auto",
        color: "#111",
        background: "#fff",
        fontFamily: "system-ui",
      }}
    >
      <h1 style={{ fontSize: 32, fontWeight: 800 }}>GoodNeighbor</h1>

      <p style={{ marginTop: 8, color: "#444", fontSize: 16 }}>
        Find charities by cause and location. Donate directly on the charity’s official website.
      </p>
      <p style={{ marginTop: 6, color: "#666", fontSize: 12 }}>
        We never take donations — we only link you to the charity’s real donate page.
      </p>

      {/* Search */}
      <div style={{ marginTop: 18 }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, city, country, or keyword…"
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 12,
            border: "1px solid #ddd",
            outline: "none",
            color: "#111",
            background: "#fff",
          }}
        />
      </div>

      {/* Filters */}
      <div
        style={{
          marginTop: 14,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          padding: 16,
          border: "1px solid #eee",
          borderRadius: 12,
          background: "#fff",
        }}
      >
        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontSize: 12, color: "#666" }}>Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: 10,
              borderRadius: 10,
              border: "1px solid #ddd",
              color: "#111",
              background: "#fff",
            }}
          >
            <option value="All">All</option>
            {ALL_CATEGORIES.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontSize: 12, color: "#666" }}>Country (type to filter)</span>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g., Jordan (leave empty for All)"
            style={{
              padding: 10,
              borderRadius: 10,
              border: "1px solid #ddd",
              color: "#111",
              background: "#fff",
            }}
          />
        </label>
      </div>

      <p style={{ marginTop: 12, color: "#666", fontSize: 14 }}>
        Showing <b>{filtered.length}</b> charities
      </p>

      {/* Cards */}
      <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
        {filtered.map((c) => (
          <Link
            key={c.slug}
            href={`/charity/${c.slug}`}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 16,
              display: "grid",
              gap: 8,
              background: "#fff",
              color: "#111",
              textDecoration: "none",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div style={{ display: "grid", gap: 4 }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#111" }}>{c.name}</div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: 12,
                      padding: "4px 8px",
                      borderRadius: 999,
                      background: "#f2f2f2",
                    }}
                  >
                    {c.category}
                  </span>

                  {c.verified && (
                    <span
                      style={{
                        fontSize: 12,
                        padding: "4px 8px",
                        borderRadius: 999,
                        background: "#e8f7ee",
                        border: "1px solid #bfe7cf",
                      }}
                    >
                      ✅ Verified
                    </span>
                  )}

                  <span style={{ fontSize: 12, color: "#666" }}>Updated: {c.lastUpdated}</span>
                </div>
              </div>

              <a
                href={c.donateUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  height: "fit-content",
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: "#111",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                Donate →
              </a>
            </div>

            <p style={{ margin: 0, color: "#222" }}>{c.description}</p>
            <p style={{ margin: 0, color: "#666", fontSize: 14 }}>
              📍 {c.city}, {c.country}
            </p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ marginTop: 16, color: "#666" }}>
          No matches. Try removing filters or searching a different keyword.
        </p>
      )}

      {/* Submit a charity */}
      <div style={{ marginTop: 28, padding: 16, border: "1px solid #eee", borderRadius: 12 }}>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800 }}>Know a charity we should add?</h3>
        <p style={{ marginTop: 6, color: "#555" }}>
          Send us the official website + donate page link and we’ll review it.
        </p>
        <a
          href="mailto:YOUR_EMAIL_HERE?subject=GoodNeighbor%20Charity%20Submission"
          style={{ fontWeight: 700, color: "black" }}
          onClick={(e) => e.stopPropagation()}
        >
          Submit via email →
        </a>
      </div>
    </main>
  );
}
