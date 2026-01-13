import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">About GoodNeighbor</h1>
        <p className="mt-2 text-slate-600">
          A simple charity directory built to help people donate with confidence.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-extrabold text-slate-900">Why we built this</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            We made GoodNeighbor because it can be confusing to figure out where to donate online and which links are real.
            This site helps you discover charities by category and country — then it sends you directly to the charity’s
            official donate page. Our goal is to make giving feel easier, safer, and more transparent.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/charities"
              className="inline-flex rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Browse charities →
            </Link>
            <Link
              href="/verify"
              className="inline-flex rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Learn how we verify →
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-extrabold text-slate-900">Creator</h3>
          {/* Raad Creator Box */}
          <div className="mt-3 flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200">
              <Image
                src="/raad.jpg"
                alt="Raad AlShaikh Hassan"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">Raad AlShaikh Hassan</div>
              <div className="text-xs text-slate-500">Builder of GoodNeighbor</div>
                <div className="text-xs text-slate-500">CS &amp; DS @ UW–Madison</div>
                <div className="text-xs">
                  <a
                    href="https://www.linkedin.com/in/raad-hassan-160b3220a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
            </div>
          </div>

         {/* Tejesh Creator Box */}
           <div className="mt-3 flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200">
              <Image
                src="/tejesh1.jpg"
                alt="Tejesh Patel"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">Tejesh Patel</div>
              <div className="text-xs text-slate-500">Co-Builder of GoodNeighbor</div>
              <div className="text-xs text-slate-500">CS &amp; DS @ UW–Madison</div>
              <div className="text-xs">
                  <a
                    href="https://www.linkedin.com/in/tejesh-patel-86bb23364/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn
                  </a>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900/90">
            If you have any feedback or suggestions, please feel free to reach out!
          </div>

          <a
            href="mailto:raad.alshaikh.hassan@gmail.com?subject=GoodNeighbor%20Feedback"
            className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            Send feedback →
          </a>
        </div>
      </div>
    </div>
  );
}
