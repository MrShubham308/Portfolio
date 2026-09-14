import Link from "next/link";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "MongoDB",
  "Supabase",
  "Tailwind CSS",
];

const projects = [
  {
    title: "Real-Time Messaging App",
    description:
      "A modern messaging application with authentication, conversations and a clean responsive interface.",
    tech: ["Next.js", "React", "Supabase"],
  },
  {
    title: "Social Media Application",
    description:
      "A social platform where users can create posts, like content, add comments and manage profiles.",
    tech: ["Next.js", "React", "Supabase"],
  },
  {
    title: "AI Chatbot",
    description:
      "A modern conversational interface connected with an AI API for interactive user experiences.",
    tech: ["Next.js", "React", "API"],
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-slate-950 text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center">
        
        {/* Background effects */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">

          {/* Left */}
          <div className="animate-[fadeUp_0.8s_ease-out]">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Open to opportunities
            </div>

            <p className="text-lg font-medium text-cyan-400">
              Hello, I'm
            </p>

            <h1 className="mt-3 text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              Shubham
            </h1>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-400 sm:text-5xl">
              Software Developer
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              I build modern, responsive and user-friendly web applications
              using React, Next.js, JavaScript and Node.js.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/projects"
                className="rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                View My Work →
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 px-7 py-3.5 font-semibold transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                View Resume
              </a>

            </div>

            <div className="mt-10 flex items-center gap-5 text-sm text-slate-500">
              <span>React</span>
              <span>•</span>
              <span>Next.js</span>
              <span>•</span>
              <span>Node.js</span>
            </div>

          </div>

          {/* Right Developer Visual */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative animate-[float_5s_ease-in-out_infinite] rounded-3xl border border-slate-800 bg-slate-900/80 p-2 shadow-2xl backdrop-blur">

              <div className="overflow-hidden rounded-2xl bg-slate-950">

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

                <div className="p-7 font-mono text-sm leading-8 sm:p-10">

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
                    <span className="text-slate-500">frontend:</span>{" "}
                    <span className="text-green-400">
                      "React / Next.js"
                    </span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-500">backend:</span>{" "}
                    <span className="text-green-400">
                      "Node.js"
                    </span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-500">database:</span>{" "}
                    <span className="text-green-400">
                      "MongoDB / SQL"
                    </span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-500">learning:</span>{" "}
                    <span className="text-yellow-300">
                      true
                    </span>
                  </p>

                  <p>{"};"}</p>

                  <p className="mt-5 text-slate-600">
                    // Turning ideas into real applications.
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          ABOUT PREVIEW
      ===================================================== */}
      <section className="border-t border-slate-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                About Me
              </p>

              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                Building with curiosity.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                I'm a Software Developer passionate about building modern
                web applications and solving real-world problems through
                technology.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                I enjoy learning new technologies, creating projects and
                improving my development skills through practical experience.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-block text-cyan-400 transition hover:text-cyan-300"
              >
                More about me →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
                <p className="text-4xl font-bold text-cyan-400">
                  01
                </p>
                <p className="mt-3 text-slate-400">
                  Software Developer
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
                <p className="text-4xl font-bold text-cyan-400">
                  08+
                </p>
                <p className="mt-3 text-slate-400">
                  Technologies
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
                <p className="text-4xl font-bold text-cyan-400">
                  03
                </p>
                <p className="mt-3 text-slate-400">
                  Featured Projects
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
                <p className="text-4xl font-bold text-cyan-400">
                  ∞
                </p>
                <p className="mt-3 text-slate-400">
                  Learning mindset
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          SKILLS
      ===================================================== */}
      <section className="border-t border-slate-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Skills
            </p>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Technologies I work with
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Tools and technologies I use to design, develop and build
              modern web applications.
            </p>

          </div>

          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-4">

            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-800 bg-slate-900/60 px-6 py-4 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                {skill}
              </div>
            ))}

          </div>

          <div className="mt-8 text-center">
            <Link
              href="/skills"
              className="text-cyan-400 transition hover:text-cyan-300"
            >
              View all skills →
            </Link>
          </div>

        </div>
      </section>

{/* =====================================================
    PROJECTS
===================================================== */}
<section className="border-t border-slate-900 py-28">

  <div className="mx-auto max-w-7xl px-6">

    {/* Section Heading */}
    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          My Work
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Featured Projects
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Some of the projects and applications I work on while
          improving my development skills.
        </p>
      </div>

      <Link
        href="/projects"
        className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
      >
        View all projects →
      </Link>

    </div>


    {/* Project Cards */}
    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* =================================================
          PROJECT 1
      ================================================= */}
      <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-950/30">

        {/* Preview */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40">

          {/* Fake Browser */}
          <div className="absolute left-6 right-6 top-8 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-2xl transition duration-500 group-hover:scale-105">

            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

              <div className="ml-3 h-2 w-24 rounded-full bg-slate-800" />
            </div>

            {/* Chat UI */}
            <div className="flex h-40">

              <div className="w-1/3 border-r border-slate-800 p-3">
                <div className="h-3 w-16 rounded bg-cyan-400/30" />

                <div className="mt-5 space-y-3">
                  <div className="h-7 rounded-lg bg-slate-900" />
                  <div className="h-7 rounded-lg bg-slate-900" />
                  <div className="h-7 rounded-lg bg-slate-900" />
                </div>
              </div>

              <div className="flex-1 p-4">
                <div className="h-3 w-24 rounded bg-slate-700" />

                <div className="mt-6 flex justify-end">
                  <div className="h-8 w-28 rounded-xl bg-cyan-400/20" />
                </div>

                <div className="mt-3">
                  <div className="h-8 w-32 rounded-xl bg-slate-800" />
                </div>

                <div className="mt-5 h-7 rounded-lg bg-slate-900" />
              </div>

            </div>

          </div>

          {/* Number */}
          <span className="absolute bottom-4 right-5 font-mono text-5xl font-bold text-white/5">
            01
          </span>

        </div>


        {/* Content */}
        <div className="p-7">

          <div className="flex items-start justify-between gap-4">

            <h3 className="text-2xl font-semibold">
              Real-Time Messaging App
            </h3>

            <span className="text-cyan-400">
              ↗
            </span>

          </div>

          <p className="mt-4 leading-7 text-slate-400">
            A modern messaging application focused on real-time
            communication and a clean user experience.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js", "React", "Supabase"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex gap-5">

            <a
              href="#"
              className="text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Live Demo →
            </a>

            <a
              href="#"
              className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
            >
              GitHub →
            </a>

          </div>

        </div>

      </article>


      {/* =================================================
          PROJECT 2
      ================================================= */}
      <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-950/30">

        {/* Preview */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/30">

          <div className="absolute left-6 right-6 top-8 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-2xl transition duration-500 group-hover:scale-105">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">

              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>

              <div className="h-2 w-20 rounded-full bg-slate-800" />

            </div>

            {/* Social UI */}
            <div className="p-5">

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-cyan-400/30" />

                <div>
                  <div className="h-2.5 w-20 rounded bg-slate-700" />
                  <div className="mt-2 h-2 w-12 rounded bg-slate-800" />
                </div>
              </div>

              <div className="mt-5 h-16 rounded-lg bg-slate-900" />

              <div className="mt-4 flex gap-3">
                <div className="h-3 w-10 rounded bg-cyan-400/30" />
                <div className="h-3 w-10 rounded bg-slate-800" />
                <div className="h-3 w-10 rounded bg-slate-800" />
              </div>

            </div>

          </div>

          <span className="absolute bottom-4 right-5 font-mono text-5xl font-bold text-white/5">
            02
          </span>

        </div>


        {/* Content */}
        <div className="p-7">

          <div className="flex items-start justify-between gap-4">

            <h3 className="text-2xl font-semibold">
              Social Media Application
            </h3>

            <span className="text-cyan-400">
              ↗
            </span>

          </div>

          <p className="mt-4 leading-7 text-slate-400">
            A social platform with posts, comments, likes and
            user profile functionality.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js", "React", "Supabase"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex gap-5">

            <a
              href="#"
              className="text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Live Demo →
            </a>

            <a
              href="#"
              className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
            >
              GitHub →
            </a>

          </div>

        </div>

      </article>


      {/* =================================================
          PROJECT 3
      ================================================= */}
      <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-950/30">

        {/* Preview */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/40">

          <div className="absolute left-6 right-6 top-8 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-2xl transition duration-500 group-hover:scale-105">

            {/* Header */}
            <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>

            {/* AI UI */}
            <div className="p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  AI
                </div>

                <div>
                  <div className="h-2.5 w-24 rounded bg-slate-700" />
                  <div className="mt-2 h-2 w-16 rounded bg-slate-800" />
                </div>

              </div>

              <div className="mt-5 space-y-3">
                <div className="h-8 rounded-lg bg-slate-900" />
                <div className="ml-auto h-8 w-3/4 rounded-lg bg-cyan-400/10" />
                <div className="h-8 rounded-lg bg-slate-900" />
              </div>

            </div>

          </div>

          <span className="absolute bottom-4 right-5 font-mono text-5xl font-bold text-white/5">
            03
          </span>

        </div>


        {/* Content */}
        <div className="p-7">

          <div className="flex items-start justify-between gap-4">

            <h3 className="text-2xl font-semibold">
              AI Chatbot
            </h3>

            <span className="text-cyan-400">
              ↗
            </span>

          </div>

          <p className="mt-4 leading-7 text-slate-400">
            A conversational web interface designed for interacting
            with AI services through a modern responsive UI.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js", "React", "API"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex gap-5">

            <a
              href="#"
              className="text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Live Demo →
            </a>

            <a
              href="#"
              className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
            >
              GitHub →
            </a>

          </div>

        </div>

      </article>

    </div>

  </div>
</section>

      {/* =====================================================
          WHY WORK WITH ME
      ===================================================== */}
      <section className="border-t border-slate-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Why Work With Me
            </p>

            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Focused on building better software.
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
              <div className="text-3xl text-cyan-400">
                {"</>"}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Clean Development
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                I focus on writing readable, structured and maintainable
                code.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
              <div className="text-3xl text-cyan-400">
                {"{}"}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Problem Solving
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                I break complex problems into smaller pieces and work toward
                practical solutions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
              <div className="text-3xl text-cyan-400">
                {"<>"}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Always Learning
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                I continuously learn new technologies and improve through
                hands-on projects.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT CTA
      ===================================================== */}
      <section className="border-t border-slate-900 py-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/60 px-6 py-16 text-center sm:px-12">

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Let's Connect
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Have a project in mind?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                I'm always interested in new opportunities, projects and
                collaborations.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-block rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Let's Talk →
              </Link>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}