import Link from "next/link";
import { charities } from "../../../data/charities";

type MaybePromise<T> = T | Promise<T>;

export default async function CharityPage({
  params,
}: {
  params: MaybePromise<{ slug: string }>;
}) {
  const resolved = await params;
  const slug = resolved?.slug ?? "";

  const charity = charities.find((c) => c.slug === slug);

  if (!charity) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
        <h1 className="text-2xl font-extrabold text-slate-900">Charity not found</h1>
        <p className="mt-2 text-sm text-slate-600">
          Tried slug: <span className="font-semibold text-slate-900">{slug || "(empty)"}</span>
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Charities loaded: <span className="font-semibold text-slate-900">{charities.length}</span>
        </p>
        <Link
          href="/charities"
          className="mt-5 inline-flex rounded-2xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
        >
          ← Back to charities
        </Link>
      </div>
    );
  }

  const location = charity.city ? `${charity.city}, ${charity.country}` : charity.country;

  return (
    <div className="grid gap-5">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/charities"
          className="inline-flex rounded-2xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-white"
        >
          ← Back
        </Link>

        <div className="flex flex-wrap gap-2">
          {charity.websiteUrl && (
            <a
              href={charity.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-white"
            >
              Official website →
            </a>
          )}
          <a
            href={charity.donateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-2xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 shadow-sm"
          >
            Donate →
          </a>
        </div>
      </div>

      {/* Main card */}
      <div className="rounded-3xl border border-slate-200 bg-white/85 p-7 shadow-sm">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="grid gap-3">
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

            <p className="text-base leading-relaxed text-slate-700">{charity.description}</p>

            <div className="text-sm text-slate-600">📍 {location}</div>
          </div>

          {/* Right column (nice info box) */}
          <div className="w-full sm:w-[280px] rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-sm font-extrabold text-slate-900">Quick tip</div>
            <div className="mt-2 text-sm text-slate-600">
              Always verify the domain before donating. GoodNeighbor never takes payments — it only links to official pages.
            </div>
            <Link
              href="/verify"
              className="mt-3 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Learn how we verify →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
