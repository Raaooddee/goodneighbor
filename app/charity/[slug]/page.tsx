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

  // Debug fallback (styled)
  if (!charity) {
    return (
      <main className="min-h-screen bg-emerald-800 px-5 py-10 text-white">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white/10 p-6 ring-1 ring-white/15">
          <h1 className="text-2xl font-extrabold">Charity not found</h1>
          <p className="mt-3 text-white/85">
            Tried slug: <span className="font-bold">{slug || "(empty)"}</span>
          </p>
          <p className="mt-1 text-white/85">
            Charities loaded: <span className="font-bold">{charities.length}</span>
          </p>

          <Link
            href="/charities"
            className="mt-5 inline-flex rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-emerald-800 hover:bg-white/90"
          >
            ← Back to charities
          </Link>
        </div>
      </main>
    );
  }

  const location = charity.city ? `${charity.city}, ${charity.country}` : charity.country;

  return (
    <main className="min-h-screen bg-emerald-800 px-5 py-10 text-white">
      <div className="mx-auto grid max-w-4xl gap-5">
        {/* Top actions */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/charities"
            className="inline-flex rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
          >
            ← Back
          </Link>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/verify"
              className="inline-flex rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              How we verify →
            </Link>
            <a
              href={charity.donateUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-white/90"
            >
              Donate →
            </a>
          </div>
        </div>

        {/* Main card */}
        <div className="rounded-3xl bg-white p-7 text-emerald-950 shadow-sm ring-1 ring-white/20">
          <div className="grid gap-3">
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

            <p className="text-base text-emerald-900/90">{charity.description}</p>

            <div className="mt-1 text-sm text-emerald-900/70">📍 {location}</div>

            {charity.websiteUrl && (
              <a
                href={charity.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex w-fit font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-700"
              >
                Official website →
              </a>
            )}
          </div>

          {/* Safety note */}
          <div className="mt-6 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900/85">
            <div className="font-extrabold text-emerald-900">Tip</div>
            <div className="mt-1">
              Always verify the domain before donating. This site never collects donations — it only links you to official
              pages.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
