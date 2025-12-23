import Link from "next/link";
import { notFound } from "next/navigation";
import { charities } from "../../../data/charities";

export default function CharityPage({ params }: { params: { slug: string } }) {
  const charity = charities.find((c) => c.slug === params.slug);

  if (!charity) return notFound();

  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 900, margin: "0 auto" }}>
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        ← Back
      </Link>

      <h1 style={{ fontSize: 32, fontWeight: 800, marginTop: 14 }}>{charity.name}</h1>

      <p style={{ color: "#666", marginTop: 10 }}>
        📍 {charity.city}, {charity.country}
      </p>

      <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6 }}>{charity.description}</p>

      <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
        <a
          href={charity.donateUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            background: "black",
            color: "white",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Donate on official page →
        </a>

        {charity.websiteUrl && (
          <a
            href={charity.websiteUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: "white",
              color: "black",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Visit website
          </a>
        )}
      </div>

      <p style={{ marginTop: 18, fontSize: 12, color: "#666" }}>
        {charity.verified ? "✅ Verified" : "Not verified"} • Updated: {charity.lastUpdated}
      </p>
    </main>
  );
}
