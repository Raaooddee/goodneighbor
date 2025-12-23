import Link from "next/link";
import { notFound } from "next/navigation";
import { charities } from "../../../data/charities";

export default function CharityPage({ params }: { params: { slug: string } }) {
  const charity = charities.find((c) => c.slug === params.slug);
  if (!charity) return notFound();

  return (
    <div className="grid gap-8">
      <div className="flex items-center justify-between">
        <Link href="/charities" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
          ← Back to directory
        </Link>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-3">
          <h1 className="text-3xl font-extrabold tracking-tight">{charity.name}</h1>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {charity.category}
            </span>
            {charity.verified && (
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                ✅ Verified
              </span>
            )}
            <span className="text-xs text-slate-500">Updated: {charity.lastUpdated}</span>
          </div>

          <div className="text-sm text-slate-500">
            📍 {charity.city}, {charity.country}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-700">{charity.description}</p>
        </div>
      </section>

      {/* Donate section */}
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-extrabold">Donate</h2>
        <p className="mt-2 text-sm text-slate-600">
          Donations are made on the charity’s official website. GoodNeighbor never collects payments.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={charity.donateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Donate on official page →
          </a>

          {charity.websiteUrl && (
            <a
              href={charity.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Visit website
            </a>
          )}
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
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
