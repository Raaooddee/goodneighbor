import Link from "next/link";
import { charities } from "../../../data/charities";

export default function CharityPage({ params }: { params: { slug: string } }) {
  const charity = charities.find((c) => c.slug === params.slug);

  if (!charity) {
    return (
      <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: 28, fontWeight: 900 }}>Charity not found</h1>
        <p style={{ marginTop: 10 }}>
          Tried slug: <b>{params.slug}</b>
        </p>
        <p style={{ marginTop: 6 }}>
          Charities loaded: <b>{charities.length}</b>
        </p>
        <Link href="/charities" style={{ display: "inline-block", marginTop: 16 }}>
          ← Back to charities
        </Link>
      </div>
    );
  }

  const location = charity.city ? `${charity.city}, ${charity.country}` : charity.country;

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <div
        style={{
          border: "1px solid #e5e5e5",
          borderRadius: 16,
          padding: 20,
          background: "#fff",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 650 }}>
            <h1 style={{ fontSize: 32, fontWeight: 900, margin: 0 }}>{charity.name}</h1>

            <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 12, padding: "4px 10px", borderRadius: 999, background: "#f2f2f2" }}>
                {charity.category}
              </span>

              {charity.verified && (
                <span style={{ fontSize: 12, padding: "4px 10px", borderRadius: 999, background: "#e8f7ee" }}>
                  ✅ Verified
                </span>
              )}

              <span style={{ fontSize: 12, color: "#666" }}>Updated: {charity.lastUpdated}</span>
            </div>

            <p style={{ marginTop: 12, marginBottom: 0, color: "#222" }}>{charity.description}</p>
            <p style={{ marginTop: 10, marginBottom: 0, color: "#666" }}>📍 {location}</p>
          </div>

          <a
            href={charity.donateUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              height: "fit-content",
              padding: "10px 14px",
              borderRadius: 12,
              background: "#0f766e",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 800,
              whiteSpace: "nowrap",
            }}
          >
            Donate →
          </a>
        </div>

        <div style={{ marginTop: 18 }}>
          <Link href="/charities" style={{ fontWeight: 700, color: "#0f766e", textDecoration: "none" }}>
            ← Back to directory
          </Link>
        </div>
      </div>
    </div>
  );
}

