import Link from "next/link";
import { notFound } from "next/navigation";
import { charities } from "../../../data/charities";

export default function CharityPage({ params }: { params: { slug: string } }) {
  const charity = charities.find((c) => c.slug === params.slug);
  if (!charity) return notFound();

  const location = charity.city ? `${charity.city}, ${charity.country}` : charity.country;

  return (
    <div className="grid gap-6">
      <div className="rounded-3xl bg-white p-6 text-emerald-950 shadow-sm ring-1 ring-white/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="grid gap-2">
            <h1 className="text-3xl font-extrabold tracking-tight">{charity.name}</h1>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900">
                {charity.category}
              </span>

              {charity.verified && (
                <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
                  ✅ Verified
                </span>
              )}

              <span className="text-xs text-emerald-900/70">Updated: {charity.lastUpdated}</span>
            </div>

            <p className="text-sm text-emerald-900/90">{charity.description}</p>
            <p className="text-sm text-emerald-900/70">📍 {location}</p>

            {charity.websiteUrl && (
              <a
                href={charity.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-emerald-800 underline underline-offset-4"
              >
                Official website →
              </a>
            )}
          </div>

          <a
            href={charity.donateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-fit items-center justify-center rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            Donate →
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/charities"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-900 hover:bg-emerald-200"
          >
            ← Back to charities
          </Link>
          <Link
            href="/verify"
            className="inline-flex items-center justify-center rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            How we verify →
          </Link>
        </div>
      </div>
    </div>
  );
}
