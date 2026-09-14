const projects = [
  {
    title: "Real-Time Messaging App",
    description:
      "A real-time messaging application with user authentication and a clean chat interface.",
    tech: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    github: "https://github.com/yourusername",
    live: "#",
  },
  {
    title: "Social Media Application",
    description:
      "A social media platform where users can create posts, add comments, like posts and manage their profiles.",
    tech: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    github: "https://github.com/yourusername",
    live: "#",
  },
  {
    title: "AI Chatbot",
    description:
      "A modern AI chatbot interface designed to communicate with an AI model through an API.",
    tech: ["Next.js", "React", "API", "Tailwind CSS"],
    github: "https://github.com/yourusername",
    live: "#",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-5 py-20">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            My Work
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Here are some of the projects I have worked on while developing
            my skills and building real-world applications.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60"
            >
              {/* Project Preview */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10" />

                <div className="relative rounded-xl border border-slate-700 bg-slate-950 px-8 py-5 font-mono text-3xl text-cyan-400 shadow-xl transition duration-300 group-hover:scale-105">
                  {"</>"}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-7">
                <h2 className="text-2xl font-semibold">
                  {project.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs text-cyan-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-7 flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>
    </main>
  );
}