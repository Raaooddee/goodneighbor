import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">About GoodNeighbor</h1>
        <p className="text-white/85">
          We help people discover charities and donate safely — by linking directly to official donation pages.
        </p>
      </div>

      {/* Creator */}
      <section className="rounded-3xl bg-white p-6 text-emerald-950 shadow-sm ring-1 ring-white/20">
        <h2 className="text-xl font-extrabold">Creator</h2>
        <p className="mt-2 text-sm leading-relaxed text-emerald-900/90">
          Hi — I’m <span className="font-semibold">Raad Hassan</span>, the creator of GoodNeighbor. I built this website
          because I noticed how common it is for people to feel unsure when donating online — especially when there are
          many links, reposts, and lookalike pages. I wanted one place where you can quickly find charities by cause and
          country, then donate through the charity’s official page with confidence.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-emerald-900/90">
          My goal is simple: make giving easier, safer, and more organized. Even a small donation matters, and I hope
          this helps more people support the causes they care about without worrying they’re sending money to the wrong
          place.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/charities"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            Browse charities →
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            Back to home
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="rounded-3xl bg-white p-6 text-emerald-950 shadow-sm ring-1 ring-white/20">
        <h2 className="text-xl font-extrabold">How it works</h2>
        <ol className="mt-4 grid gap-3 text-sm text-emerald-900/90">
          <li>
            <span className="font-semibold">1) Browse & filter:</span> pick a cause and location that matters to you.
          </li>
          <li>
            <span className="font-semibold">2) Open a charity page:</span> read details and confirm the official links.
          </li>
          <li>
            <span className="font-semibold">3) Donate directly:</span> click donate to go to the charity’s official
            website.
          </li>
        </ol>
      </section>

      {/* Safety */}
      <section className="rounded-3xl bg-white p-6 text-emerald-950 shadow-sm ring-1 ring-white/20">
        <h2 className="text-xl font-extrabold">Safety rule</h2>
        <p className="mt-3 text-sm leading-relaxed text-emerald-900/90">
          GoodNeighbor never processes payments. We only provide links so you donate directly to the charity, reducing
          the risk of sending money to the wrong place.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-emerald-900/90">
          <li>• Always check the website domain before donating.</li>
          <li>• Prefer verified/official links when available.</li>
          <li>• If something looks suspicious, don’t donate and report it.</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="rounded-3xl bg-white p-6 text-emerald-950 shadow-sm ring-1 ring-white/20">
        <h2 className="text-xl font-extrabold">Submissions</h2>
        <p className="mt-2 text-sm text-emerald-900/90">
          Want to add a charity? Email the official website + donation page link:
        </p>
        <a
          href="mailto:raad.alshaikh.hassan@gmail.com?subject=GoodNeighbor%20Charity%20Submission"
          className="mt-4 inline-flex rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
        >
          Submit a charity →
        </a>
      </section>
    </div>
  );
}
