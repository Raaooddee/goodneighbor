import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        {/* subtle decoration */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-slate-100" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-slate-100" />

        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <div className="grid gap-4">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Give with confidence.
              <span className="mt-2 block text-slate-500">
                Donate directly to official charity pages.
              </span>
            </h1>

            <p className="max-w-prose text-base leading-relaxed text-slate-600">
              Discover charities by cause and location. We never process payments — we send you straight to the charity’s official donation page.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/charities"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Browse charities →
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                How it works
              </Link>
            </div>

            <p className="text-xs text-slate-500">
              Tip: always verify the domain before donating. We’ll list official links.
            </p>
          </div>

          {/* Right side: tighter cards */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <div className="text-sm font-extrabold text-slate-900">What you can do</div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl bg-white p-4">
                <div className="text-sm font-bold">Filter by category</div>
                <div className="mt-1 text-sm text-slate-600">Health, education, emergency relief, more.</div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="text-sm font-bold">Filter by location</div>
                <div className="mt-1 text-sm text-slate-600">Find charities operating where you care.</div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="text-sm font-bold">Donate safely</div>
                <div className="mt-1 text-sm text-slate-600">We link you to official donate pages only.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - smaller and cleaner */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid gap-1">
            <h2 className="text-xl font-extrabold tracking-tight">Start here</h2>
            <p className="text-sm text-slate-600">
              Open the directory to search, filter, and view each charity’s donate section.
            </p>
          </div>

          <Link
            href="/charities"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Open charity directory →
          </Link>
        </div>
      </section>
    </div>
  );
}
