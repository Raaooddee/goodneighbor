import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-sm ring-1 ring-white/10 sm:p-8">
        {/* subtle decoration */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-white/10" />

        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <div className="grid gap-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Give with confidence.
              <span className="mt-2 block text-white/80">Donate directly to official charity pages.</span>
            </h1>

            <p className="max-w-prose text-base leading-relaxed text-white/85">
              Discover charities by cause and location. We never process payments — we send you straight to the charity’s
              official donation page.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/charities"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-emerald-800 hover:bg-white/90"
              >
                Browse charities →
              </Link>

              <Link
                href="/verify"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                How we verify
              </Link>
            </div>

            <p className="text-xs text-white/70">
              Tip: always verify the domain before donating. We’ll list official links.
            </p>
          </div>

          {/* Right side */}
          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-sm sm:p-6">
            <div className="text-sm font-extrabold">What you can do</div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl bg-white p-4 text-emerald-950">
                <div className="text-sm font-bold">Filter by category</div>
                <div className="mt-1 text-sm text-emerald-900/80">Health, education, emergency relief, more.</div>
              </div>

              <div className="rounded-2xl bg-white p-4 text-emerald-950">
                <div className="text-sm font-bold">Filter by location</div>
                <div className="mt-1 text-sm text-emerald-900/80">Find charities operating where you care.</div>
              </div>

              <div className="rounded-2xl bg-white p-4 text-emerald-950">
                <div className="text-sm font-bold">Donate safely</div>
                <div className="mt-1 text-sm text-emerald-900/80">We link you to official donate pages only.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid gap-1">
            <h2 className="text-xl font-extrabold tracking-tight text-white">Want to add a charity?</h2>
            <p className="text-sm text-white/85">
              Submit an official website + donate link and we’ll review it.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-emerald-800 hover:bg-white/90"
            >
              Submit a charity →
            </Link>

            <Link
              href="/verify"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Learn how we verify
            </Link>
          </div>
        </div>
      </section>

      {/* Start here */}
      <section className="rounded-3xl bg-white p-6 text-emerald-950 shadow-sm ring-1 ring-white/20 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid gap-1">
            <h2 className="text-xl font-extrabold tracking-tight">Start here</h2>
            <p className="text-sm text-emerald-900/80">
              Open the directory to search, filter, and view each charity’s donate section.
            </p>
          </div>

          <Link
            href="/charities"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            Open charity directory →
          </Link>
        </div>
      </section>
    </div>
  );
}
