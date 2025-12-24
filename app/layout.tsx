import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GoodNeighbor",
  description: "Find charities by cause and location. Donate on official websites.",
};

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M20 4c-6.8.3-12.7 3.8-15.7 8.7C2.7 15.2 3.4 19 6.6 20.6c2.9 1.4 6.6.5 8.8-2.6C18.7 13.4 20 8.6 20 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4.8 18.8c3.3-3.3 7.3-5.7 11.7-7.1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-xl px-3 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 hover:text-white"
    >
      {label}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Darker, modern background */}
        <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-950 text-slate-900">
          {/* Soft glow blobs */}
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl" />
            <div className="absolute top-64 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-300/10 blur-3xl" />
            <div className="absolute top-[520px] -right-44 h-[460px] w-[460px] rounded-full bg-sky-300/10 blur-3xl" />
          </div>

          <div className="relative">
            {/* Navbar */}
            <header className="sticky top-0 z-40 border-b border-white/10 bg-emerald-950/60 backdrop-blur">
              <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
                <Link href="/" className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-50 ring-1 ring-white/15">
                    <LeafIcon />
                  </span>
                  <div className="leading-tight">
                    <div className="text-sm font-extrabold tracking-tight text-white">
                      GoodNeighbor
                    </div>
                    <div className="text-xs text-white/65">Charity directory</div>
                  </div>
                </Link>

                <nav className="flex items-center gap-1">
                  <NavLink href="/" label="Home" />
                  <NavLink href="/charities" label="Charities" />
                  <NavLink href="/about" label="About" />
                  <NavLink href="/verify" label="Verify" />
                </nav>
              </div>
            </header>

            {/* Main content sits on a readable card layer */}
            <main className="mx-auto max-w-6xl px-5 py-10">
              <div className="rounded-[28px] bg-white/95 p-5 shadow-xl shadow-black/20 ring-1 ring-black/5 sm:p-8">
                {children}
              </div>
            </main>

            <footer className="border-t border-white/10 bg-emerald-950/40">
              <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-white/70">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span>© {new Date().getFullYear()} GoodNeighbor</span>
                  <span className="text-white/55">
                    We never take donations — we link to official charity sites.
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
