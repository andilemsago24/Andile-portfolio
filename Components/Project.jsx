import Image from "next/image";
import projects from "./projects";

export default function Projects() {
  return (
    <section id="projects" className="relative isolate min-h-screen overflow-hidden bg-black px-6 py-16 text-white md:py-24">
      <div aria-hidden="true" className="projects-circuit">
        <span className="circuit-trace circuit-trace-one" />
        <span className="circuit-trace circuit-trace-two" />
        <span className="circuit-trace circuit-trace-three" />
        <span className="circuit-trace circuit-trace-four" />
        <span className="circuit-trace circuit-trace-five" />
        <span className="circuit-trace circuit-trace-six" />
        <span className="circuit-node circuit-node-one" />
        <span className="circuit-node circuit-node-two" />
        <span className="circuit-node circuit-node-three" />
        <span className="circuit-node circuit-node-four" />
        <span className="circuit-node circuit-node-five" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mb-14 flex flex-col gap-6 border-b border-slate-800 pb-10 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="hero-enter hero-delay-1 mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
              <span className="h-px w-8 bg-pink-400" />
              Selected work
            </p>

            <h1 className="hero-enter hero-delay-2 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Projects<span className="text-pink-400"></span>
            </h1>

            <p className="hero-enter hero-delay-3 mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              A collection of projects I&apos;ve built while learning, exploring
              new technologies, and solving practical problems.
            </p>
          </div>

          <p className="hero-enter hero-delay-4 shrink-0 text-sm font-medium text-slate-400">
            <span className="mr-2 font-mono text-2xl font-semibold text-white">
              {String(projects.length).padStart(2, "0")}
            </span>
            projects
          </p>
        </header>

        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="hero-enter group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/90 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:bg-slate-900"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative aspect-[16/10] shrink-0 overflow-hidden border-b border-slate-800 bg-slate-900">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-pink-950/30 px-6 text-center">
                    <span className="mb-3 h-px w-10 bg-pink-400/70" />
                    <span className="text-sm font-medium text-slate-300">
                      Preview coming soon
                    </span>
                  </div>
                )}
                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/70 px-3 py-1 font-mono text-xs text-white backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="mb-3 min-h-14 text-xl font-semibold leading-snug text-white">
                  {project.title}
                </h2>

                <p className="mb-6 min-h-20 flex-1 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mb-6 flex min-h-12 flex-wrap content-start gap-2">
                  {project.technology.split(", ").map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-800 pt-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-pink-300 transition-colors hover:text-pink-200"
                    >
                      View source on GitHub
                      <span aria-hidden="true">&nearr;</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
