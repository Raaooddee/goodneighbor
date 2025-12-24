import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GoodNeighbor",
  description: "Find charities by cause and location. Donate on official websites.",
};

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-white/70 hover:text-slate-900"
    >
      {label}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Background (modern, subtle) */}
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white">
          {/* Decorative blobs */}
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute top-64 -left-32 h-[360px] w-[360px] rounded-full bg-emerald-100/70 blur-3xl" />
            <div className="absolute top-[520px] -right-40 h-[420px] w-[420px] rounded-full bg-sky-100/70 blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Navbar */}
            <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/65 backdrop-blur">
              <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
                <Link href="/" className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-sm">
                    GN
                  </span>
                  <div className="leading-tight">
                    <div className="text-sm font-extrabold tracking-tight text-slate-900">GoodNeighbor</div>
                    <div className="text-xs text-slate-500">Charity directory</div>
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

            <main className="mx-auto max-w-6xl px-5 py-10">{children}</main>

            <footer className="border-t border-slate-200/60 bg-white/60">
              <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-slate-600">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span>© {new Date().getFullYear()} GoodNeighbor</span>
                  <span className="text-slate-500">
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
