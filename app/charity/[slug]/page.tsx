import Link from "next/link";
import { notFound } from "next/navigation";
import { charities } from "../../../data/charities";

// If you ever use static export, this prevents 404s by prebuilding pages.
export function generateStaticParams() {
  return charities.map((c) => ({ slug: c.slug }));
}

// Optional (safe): if slug not in generateStaticParams, 404 it.
export const dynamicParams = false;

export default function CharityPage({ params }: { params: { slug: string } }) {
  const charity = charities.find((c) => c.slug === params.slug);
  if (!charity) return notFound();

  const location = charity.city ? `${charity.city}, ${charity.country}` : charity.country;

  return (
    <div className="grid gap-6">
      <div className="flex items-start justify-between gap-4">
        <div className="grid gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">{charity.name}</h1>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
              {charity.category}
            </span>

            {charity.verified ? (
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-800">
                ✅ Verified
              </span>
            ) : (
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
                Unverified
              </span>
            )}

            <span className="text-xs text-white/75">Updated: {charity.lastUpdated}</span>
          </div>

          <p className="mt-1 text-white/85">{charity.description}</p>
          <p className="text-sm text-white/80">📍 {location}</p>
        </div>

        <a
          href={charity.donateUrl}
          target="_blank"
          rel="noreferrer"
          className="h-fit rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-emerald-800 hover:bg-white/90"
        >
          Donate →
        </a>
      </div>

      <div className="rounded-3xl bg-white p-6 text-emerald-950 shadow-sm ring-1 ring-white/20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm">
            <div className="font-extrabold">Safety tip</div>
            <div className="mt-1 text-emerald-900/80">
              Always verify the domain before donating. We never take payments — we only link.
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              href="/verify"
              className="rounded-2xl border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
            >
              How we verify →
            </Link>
            <Link
              href="/charities"
              className="rounded-2xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Back to directory →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
