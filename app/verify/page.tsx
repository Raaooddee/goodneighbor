import Link from "next/link";

export default function VerifyPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">How we verify</h1>
        <p className="mt-2 text-slate-600">
          GoodNeighbor is a directory — we don’t take donations. We link you to official charity pages.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-extrabold text-slate-900">What “Verified” means (for now)</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Right now, “Verified” means the link was added from an official organization site or a widely-known public
            directory. As the project grows, we’ll tighten verification and add stronger checks.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-extrabold text-slate-900">How you can stay safe</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Check the website domain matches the organization name.</li>
            <li>Avoid links from random ads or shorteners.</li>
            <li>Use secure payments and keep receipts.</li>
          </ul>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-emerald-50 p-6">
        <h3 className="text-base font-extrabold text-slate-900">Want to suggest a charity?</h3>
        <p className="mt-2 text-sm text-slate-600">Send the official website + donate page link.</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="mailto:raad.alshaikh.hassan@gmail.com?subject=GoodNeighbor%20Charity%20Submission"
            className="inline-flex rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            Submit via email →
          </a>
          <Link
            href="/charities"
            className="inline-flex rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Browse charities →
          </Link>
        </div>
      </div>
    </div>
  );
}
