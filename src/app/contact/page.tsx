import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative z-10 grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div className="animate-[fadeUp_0.8s_ease-out]">

            {/* Available badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Available for opportunities
            </div>

            <p className="mb-3 text-lg font-medium text-cyan-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Shubham
            </h1>

            <h2 className="mt-2 text-4xl font-bold leading-tight text-slate-400 sm:text-5xl lg:text-6xl">
              Software Developer
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              I build modern, responsive and user-friendly web applications
              using React, Next.js, JavaScript and Node.js.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/projects"
                className="group rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-400/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-400/20"
              >
                View My Work
                <span className="ml-2 inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                View Resume
              </a>

              <Link
                href="/contact"
                className="rounded-xl border border-slate-700 px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </Link>

            </div>

            {/* Tech Stack */}
            <div className="mt-12">
              <p className="mb-4 text-sm text-slate-500">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-2.5">
                {[
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "SQL",
                  "MongoDB",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">

            {/* Decorative glow */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Main Card */}
            <div className="relative animate-[float_5s_ease-in-out_infinite]">

              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-2 shadow-2xl shadow-cyan-950/20 backdrop-blur">

                {/* Window */}
                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">

                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>

                    <span className="text-xs text-slate-600">
                      developer.tsx
                    </span>

                    <span className="text-xs text-cyan-400">
                      ●
                    </span>

                  </div>

                  {/* Code */}
                  <div className="p-6 font-mono text-sm leading-8 sm:p-8">

                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-cyan-400">developer</span> = {"{"}
                    </p>

                    <p className="pl-5">
                      <span className="text-slate-500">name:</span>{" "}
                      <span className="text-green-400">
                        "Shubham"
                      </span>,
                    </p>

                    <p className="pl-5">
                      <span className="text-slate-500">role:</span>{" "}
                      <span className="text-green-400">
                        "Software Developer"
                      </span>,
                    </p>

                    <p className="pl-5">
                      <span className="text-slate-500">experience:</span>{" "}
                      <span className="text-yellow-300">
                        "Fresher"
                      </span>,
                    </p>

                    <p className="pl-5">
                      <span className="text-slate-500">stack:</span> [
                    </p>

                    <p className="pl-10 text-cyan-300">
                      "React",
                    </p>

                    <p className="pl-10 text-cyan-300">
                      "Next.js",
                    </p>

                    <p className="pl-10 text-cyan-300">
                      "Node.js"
                    </p>

                    <p className="pl-5">],</p>

                    <p className="pl-5">
                      <span className="text-slate-500">learning:</span>{" "}
                      <span className="text-green-400">
                        true
                      </span>
                    </p>

                    <p>{"};"}</p>

                    <p className="mt-5 text-slate-600">
                      // Turning ideas into applications.
                    </p>

                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-6 top-12 hidden animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur sm:block">
              <p className="text-xs text-slate-500">
                Frontend
              </p>

              <p className="mt-1 font-semibold text-cyan-400">
                React + Next.js
              </p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-8 -right-5 hidden animate-[float_4.5s_ease-in-out_infinite] rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur sm:block">
              <p className="text-xs text-slate-500">
                Backend
              </p>

              <p className="mt-1 font-semibold text-cyan-400">
                Node.js + Database
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}