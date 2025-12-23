import Link from "next/link";
import { notFound } from "next/navigation";
import { charities } from "../../../data/charities";

export default function CharityPage({ params }: { params: { slug: string } }) {
  const charity = charities.find((c) => c.slug === params.slug);
  if (!charity) return notFound();

  return (
    <div className="grid gap-8">
      <div className="flex items-center justify-between">
        <Link href="/charities" className="text-sm font-semibold text-white/90 hover:text-white">
          ← Back to directory
        </Link>
      </div>

      {/* Details */}
      <section className="rounded-3xl bg-white p-8 text-emerald-950 shadow-sm ring-1 ring-white/20">
        <div className="grid gap-3">
          <h1 className="text-3xl font-extrabold tracking-tight">{charity.name}</h1>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
              {charity.category}
            </span>
            {charity.verified && (
              <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
                ✅ Verified
              </span>
            )}
            <span className="text-xs text-emerald-900/60">Updated: {charity.lastUpdated}</span>
          </div>

          <div className="text-sm text-emerald-900/70">
            📍 {charity.city}, {charity.country}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-emerald-900/85">{charity.description}</p>
        </div>
      </section>

      {/* Donate */}
      <section className="rounded-3xl bg-white p-8 text-emerald-950 shadow-sm ring-1 ring-white/20">
        <h2 className="text-xl font-extrabold">Donate</h2>
        <p className="mt-2 text-sm text-emerald-900/80">
          Donations are made on the charity’s official website. GoodNeighbor never collects payments.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={charity.donateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            Donate on official page →
          </a>

          {charity.websiteUrl && (
            <a
              href={charity.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
            >
              Visit website
            </a>
          )}
        </div>

        <div className="mt-6 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900/85 ring-1 ring-emerald-200">
          <div className="font-semibold">Safety checklist</div>
          <ul className="mt-2 grid gap-1">
            <li>• Check the domain name matches the official charity.</li>
            <li>• Avoid lookalike sites and weird URL spellings.</li>
            <li>• If you’re unsure, donate later after verifying.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
