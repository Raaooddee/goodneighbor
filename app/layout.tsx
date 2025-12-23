import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoodNeighbor",
  description: "Find charities by cause and location. Donate directly on official pages.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-emerald-700 text-white`}>
        {/* Top Nav */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-emerald-700/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              {/* Leaf logo */}
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20 shadow-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M20 4C14.5 4 10.3 6.2 7.8 9.2C5.2 12.4 4 16.2 4 20C7.8 20 11.6 18.8 14.8 16.2C17.8 13.7 20 9.5 20 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 20C9 15 12 12 20 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="leading-tight">
                <div className="text-sm font-extrabold tracking-tight text-white">GoodNeighbor</div>
                <div className="text-xs text-white/80">Donate directly. Give safely.</div>
              </div>
            </Link>

            <nav className="flex items-center gap-1 sm:gap-2">
              <Link
                href="/charities"
                className="rounded-xl px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Charities
              </Link>

              <Link
                href="/verify"
                className="rounded-xl px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Verify
              </Link>

              <Link
                href="/about"
                className="rounded-xl px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                About
              </Link>

              {/* Submit replaces Browse */}
              <a
                href="mailto:raad.alshaikh.hassan@gmail.com?subject=GoodNeighbor%20Charity%20Submission"
                className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-emerald-800 hover:bg-white/90"
              >
                Submit →
              </a>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-emerald-800/40">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/85">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>
                <span className="font-semibold text-white">GoodNeighbor</span> — we never take donations. We only link to
                official charity pages.
              </p>
              <div className="flex gap-4">
                <Link className="hover:text-white" href="/verify">
                  Verify
                </Link>
                <Link className="hover:text-white" href="/about">
                  About
                </Link>
                <Link className="hover:text-white" href="/charities">
                  Charities
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
