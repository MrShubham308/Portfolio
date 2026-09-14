export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About Me
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            I enjoy building things that live on the web.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I am a Software Developer focused on building modern and
            user-friendly web applications. I enjoy turning ideas into
            practical products and solving problems through code.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {/* About Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 lg:col-span-2">
            <h2 className="text-2xl font-semibold">
              Who I Am
            </h2>

            <div className="mt-5 space-y-5 leading-8 text-slate-400">
              <p>
                I am passionate about software development and web
                technologies. I like creating clean, responsive and
                easy-to-use interfaces.
              </p>

              <p>
                My development journey includes working with JavaScript,
                React, Next.js, Node.js, SQL and MongoDB. I am continuously
                learning and improving my skills by building real projects.
              </p>

              <p>
                My goal is to work on real-world software projects, contribute
                to a professional development team and grow as a Software
                Developer.
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
            <h2 className="text-2xl font-semibold">
              Quick Info
            </h2>

            <div className="mt-6 space-y-5">

              <div>
                <p className="text-sm text-slate-500">
                  Role
                </p>

                <p className="mt-1 text-slate-200">
                  Software Developer
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Focus
                </p>

                <p className="mt-1 text-slate-200">
                  Web Development
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Frontend
                </p>

                <p className="mt-1 text-slate-200">
                  React / Next.js
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Backend
                </p>

                <p className="mt-1 text-slate-200">
                  Node.js
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            What I Do
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            My development approach
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-400">
              <div className="text-3xl">
                {"</>"}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Clean Code
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                I try to write simple, readable and maintainable code.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-400">
              <div className="text-3xl">
                {"{}"}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Problem Solving
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                I enjoy breaking problems into smaller pieces and finding
                practical solutions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-400">
              <div className="text-3xl">
                {"<>"}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Continuous Learning
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                I continuously learn new technologies and improve my
                development skills.
              </p>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}