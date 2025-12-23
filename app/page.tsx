import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-10">
      {/* Hero */}
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="grid gap-4">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Give with confidence.
              <span className="block text-slate-500">Donate directly to official charity pages.</span>
            </h1>

            <p className="text-base leading-relaxed text-slate-600">
              GoodNeighbor helps you discover charities by category and location. We never take your money — we
              send you to the charity’s official donation page.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/charities"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
              >
                Browse charities →
              </Link>
              <Link
                href="/about"
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                How it works
              </Link>
            </div>

            <p className="text-xs text-slate-500">
              Tip: always verify the domain before donating. We’ll help by listing official links.
            </p>
          </div>

          {/* Right “stats” style block */}
          <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-slate-900">What you can do</div>

            <div className="grid gap-3">
              <div className="rounded-2xl bg-white p-4">
                <div className="text-sm font-bold">Filter by category</div>
                <div className="text-sm text-slate-600">Health, education, emergency relief, more.</div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="text-sm font-bold">Filter by location</div>
                <div className="text-sm text-slate-600">Find charities operating where you care.</div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="text-sm font-bold">Donate safely</div>
                <div className="text-sm text-slate-600">We link you to official donate pages only.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold">Start here</h2>
        <p className="text-slate-600">
          Go to the directory to search, filter, and open each charity’s details page.
        </p>
        <div>
          <Link
            href="/charities"
            className="inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Open charity directory →
          </Link>
        </div>
      </section>
    </div>
  );
}
