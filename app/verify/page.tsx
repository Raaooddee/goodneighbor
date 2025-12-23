import Link from "next/link";

export default function VerifyPage() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">How we verify</h1>
        <p className="text-white/85">
          GoodNeighbor doesn’t take donations. We help reduce risk by linking to official charity pages and encouraging
          basic verification checks.
        </p>
      </div>

      <section className="rounded-3xl bg-white p-6 text-emerald-950 shadow-sm ring-1 ring-white/20 sm:p-8">
        <h2 className="text-xl font-extrabold">Our verification checklist</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="font-bold">1) Official domain</div>
            <p className="mt-1 text-sm text-emerald-900/85">
              We prefer the charity’s main website (real domain) and the donate page on that same domain.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="font-bold">2) Clear organization identity</div>
            <p className="mt-1 text-sm text-emerald-900/85">
              The site should clearly show the organization’s name, mission, contact info, and location.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="font-bold">3) Secure donation flow</div>
            <p className="mt-1 text-sm text-emerald-900/85">
              Donation pages should use HTTPS and trusted payment providers (card processors / secure checkout).
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="font-bold">4) Community review</div>
            <p className="mt-1 text-sm text-emerald-900/85">
              If something looks off, we’d rather mark it unverified until it’s confirmed.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-4 ring-1 ring-emerald-200">
          <div className="font-bold">Important</div>
          <p className="mt-2 text-sm text-emerald-900/85">
            “Verified” on GoodNeighbor means we’ve done basic link and identity checks — not a full audit. Always use
            your own judgment before donating.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/charities"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            Browse verified links →
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-2xl border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            About GoodNeighbor
          </Link>
        </div>
      </section>
    </div>
  );
}
