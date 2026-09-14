import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Shubham<span className="text-cyan-400">.</span>
          </Link>

          {/* Social Links */}
          <div className="flex gap-6 text-sm text-slate-400">
            <a
              href="https://github.com/MrShubham308"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/shubham-vishwakarma006"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Shubham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}