"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-900 bg-slate-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold"
        >
          Shubham<span className="text-cyan-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/" className="transition hover:text-cyan-400">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-cyan-400">
            About
          </Link>

          <Link href="/skills" className="transition hover:text-cyan-400">
            Skills
          </Link>

          <Link href="/projects" className="transition hover:text-cyan-400">
            Projects
          </Link>

          <Link href="/contact" className="transition hover:text-cyan-400">
            Contact
          </Link>
        </div>

        {/* Desktop Let's Talk */}
        <Link
          href="/contact"
          className="hidden rounded-full border border-cyan-400 px-5 py-2 text-sm text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950 md:block"
        >
          Let's Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-700 px-3 py-2 text-xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              href="/skills"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              Skills
            </Link>

            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-cyan-400 px-4 py-3 text-center font-semibold text-slate-950"
            >
              Let's Talk
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}