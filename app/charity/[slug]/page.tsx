import Link from "next/link";
import { notFound } from "next/navigation";
import { charities } from "../../../data/charities";

export function generateStaticParams() {
  return charities.map((c) => ({ slug: c.slug }));
}

export default function CharityPage({ params }: { params: { slug: string } }) {
  const charity = charities.find((c) => c.slug === params.slug);

  if (!charity) {
    // Uses app/not-found.tsx if you created it, otherwise Next default
    notFound();
  }

  const location = charity.city ? `${charity.city}, ${charity.country}` : charity.country;

  const reportHref = `mailto:raad.alshaikh.hassan@gmail.com?subject=${encodeURIComponent(
    `Report a charity link: ${charity.name}`
  )}&body=${encodeURIComponent(
    `Hi GoodNeighbor,\n\nI want to report an issue with this charity listing:\n\nName: ${charity.name}\nSlug: ${charity.slug}\nLocation: ${location}\nDonate link: ${charity.donateUrl}\n\nIssue:\n(Describe what’s wrong)\n`
  )}`;

  return (
    <div className="grid gap-6">
      {/* Top */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="grid gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">{charity.name}</h1>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900">
              {charity.category}
            </span>

            {charity.verified && (
              <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
                ✅ Verified
              </span>
            )}

            <span className="text-xs text-slate-500">Updated: {charity.lastUpdated}</span>
          </div>

          <p className="text-sm text-slate-500">📍 {location}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={charity.donateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-2xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 shadow-sm"
          >
            Donate →
          </a>

          {charity.websiteUrl && (
            <a
              href={charity.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Official site →
            </a>
          )}

          <a
            href={reportHref}
            className="inline-flex rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Report link
          </a>
        </div>
      </div>

      {/* Description card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-extrabold text-slate-900">About</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{charity.description}</p>
      </div>

      {/* Safety note */}
      <div className="rounded-3xl border border-slate-200 bg-emerald-50 p-6">
        <h3 className="text-sm font-extrabold text-slate-900">Donation safety tip</h3>
        <p className="mt-2 text-sm text-slate-600">
          You will donate on the charity’s official website. Double-check the domain before entering payment details.
        </p>
      </div>

      <div>
        <Link
          href="/charities"
          className="inline-flex rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          ← Back to charities
        </Link>
      </div>
    </div>
  );
}
