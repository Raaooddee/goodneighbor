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
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900`}>
        {/* Top Nav */}
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-slate-900 shadow-sm" />
              <div className="leading-tight">
                <div className="text-sm font-extrabold tracking-tight">GoodNeighbor</div>
                <div className="text-xs text-slate-500">Donate directly. Give safely.</div>
              </div>
            </Link>

            <nav className="flex items-center gap-1 sm:gap-2">
              <Link
                href="/charities"
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Charities
              </Link>
              <Link
                href="/about"
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                About
              </Link>
              <Link
                href="/charities"
                className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Browse →
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">{children}</main>

        {/* Footer */}
        <footer className="border-t border-slate-200/70 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>
                <span className="font-semibold text-slate-900">GoodNeighbor</span> — we never take donations. We only link to official charity pages.
              </p>
              <div className="flex gap-4">
                <Link className="hover:text-slate-900" href="/about">
                  About
                </Link>
                <Link className="hover:text-slate-900" href="/charities">
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


