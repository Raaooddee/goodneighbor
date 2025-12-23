export default function AboutPage() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight">About GoodNeighbor</h1>
        <p className="text-slate-600">
          We help people discover charities and donate safely — by linking directly to official donate pages.
        </p>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-extrabold">How it works</h2>
        <ol className="mt-4 grid gap-3 text-sm text-slate-700">
          <li>
            <span className="font-semibold">1) Browse & filter:</span> pick a cause and location that matters to you.
          </li>
          <li>
            <span className="font-semibold">2) Open a charity page:</span> read description + verify details.
          </li>
          <li>
            <span className="font-semibold">3) Donate directly:</span> click the donate button to go to the charity’s
            official donation page.
          </li>
        </ol>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-extrabold">Our safety rule</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          GoodNeighbor never processes payments. We only provide links so you donate directly to the charity, reducing
          the risk of sending money to the wrong place.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-700">
          <li>• Always check the website domain before donating.</li>
          <li>• Prefer verified/official links when available.</li>
          <li>• If something looks suspicious, don’t donate and report it.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-extrabold">Contact / submissions</h2>
        <p className="mt-3 text-sm text-slate-700">
          Want to add a charity? Email us the official website + donate page link:
        </p>
        <a
          href="mailto:YOUR_EMAIL_HERE?subject=GoodNeighbor%20Charity%20Submission"
          className="mt-4 inline-flex rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Submit a charity →
        </a>
      </section>
    </div>
  );
}
