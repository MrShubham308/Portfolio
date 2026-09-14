export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      description: "Building modern and responsive user interfaces.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      description: "Building APIs and server-side applications.",
      skills: ["Node.js", "REST API"],
    },
    {
      title: "Database",
      description: "Working with structured and NoSQL databases.",
      skills: ["SQL", "MongoDB", "Supabase"],
    },
    {
      title: "Tools & Workflow",
      description: "Tools I use during development.",
      skills: ["Git", "GitHub", "VS Code", "npm"],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Skills
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Technologies I work with
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A collection of technologies and tools I use to build modern
            web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
            >
              <h2 className="text-2xl font-semibold">
                {group.title}
              </h2>

              <p className="mt-3 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}