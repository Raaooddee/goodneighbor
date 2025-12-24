"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-8">
      {/* Hero */}
      <section className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-emerald-50 p-7 shadow-sm">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Find trusted charities.
            <span className="mt-2 block text-emerald-800">Donate on official websites.</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            GoodNeighbor is a simple directory that helps you discover charities by cause and location — and then sends you
            to the charity’s official donate page.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/charities"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600 shadow-sm"
            >
              Browse charities →
            </Link>
            <Link
              href="/verify"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              How we verify →
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            We never take donations — we only link to official pages.
          </p>
        </div>
      </section>

      {/* Feature cards */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm font-extrabold text-slate-900">Direct links</div>
          <p className="mt-2 text-sm text-slate-600">
            Donate on the charity’s real website — no middleman.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm font-extrabold text-slate-900">Filter fast</div>
          <p className="mt-2 text-sm text-slate-600">
            Search by name, category, country, and keywords.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm font-extrabold text-slate-900">Transparent</div>
          <p className="mt-2 text-sm text-slate-600">
            We show location, descriptions, and update dates to help you decide.
          </p>
        </div>
      </section>

      {/* Submit */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-extrabold text-slate-900">Know a charity we should add?</h2>
        <p className="mt-2 text-sm text-slate-600">
          Email us the official website + donate link and we’ll add it.
        </p>
        <a
          href="mailto:raad.alshaikh.hassan@gmail.com?subject=GoodNeighbor%20Charity%20Submission"
          className="mt-4 inline-flex w-fit rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
        >
          Submit via email →
        </a>
      </section>
    </div>
  );
}
