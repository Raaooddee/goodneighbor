export default function PrivacyPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-slate-600">Last updated: {new Date().toISOString().slice(0, 10)}</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-extrabold text-slate-900">What we do</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          GoodNeighbor is a directory of charities. We do not collect donations or payment information. When you click
          “Donate”, you leave our site and go to the charity’s official website.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-extrabold text-slate-900">Information we collect</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          We do not ask you to create an account and we do not intentionally collect personal information (like name,
          address, or payment details).
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Like most websites, our hosting provider may collect basic technical logs (such as IP address, browser type,
          and timestamps) for security and performance.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-extrabold text-slate-900">Cookies & analytics</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Currently, GoodNeighbor does not use advertising cookies. If we add analytics in the future, we will update this
          policy to explain what is collected and why.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-extrabold text-slate-900">Contact</h2>
        <p className="mt-2 text-sm text-slate-600">
          Questions? Email{" "}
          <a
            className="font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
            href="mailto:raad.alshaikh.hassan@gmail.com?subject=GoodNeighbor%20Privacy"
          >
            raad.alshaikh.hassan@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
