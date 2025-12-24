import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Terms of Use</h1>
        <p className="mt-2 text-slate-600">Last updated: {new Date().toISOString().slice(0, 10)}</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-extrabold text-slate-900">1) What GoodNeighbor is</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          GoodNeighbor is a charity directory. We provide information and links to charity websites, including donate
          pages. We do not process donations and we are not a payment service.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-extrabold text-slate-900">2) External links</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          When you click a donate link, you leave GoodNeighbor and visit a third-party website. You are responsible for
          verifying you are on the correct domain and for any actions you take there.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-extrabold text-slate-900">3) No guarantees</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          We try to keep listings accurate, but we cannot guarantee all information is complete or up to date. Use the site
          at your own risk.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-extrabold text-slate-900">4) Reporting issues</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          If you find an incorrect or suspicious link, please report it. You can also read{" "}
          <Link className="font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4" href="/verify">
            how we verify
          </Link>
          .
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-extrabold text-slate-900">Contact</h2>
        <p className="mt-2 text-sm text-slate-600">
          Email{" "}
          <a
            className="font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
            href="mailto:raad.alshaikh.hassan@gmail.com?subject=GoodNeighbor%20Terms"
          >
            raad.alshaikh.hassan@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
