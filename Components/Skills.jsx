const skillGroups = [
  {
    name: "Web foundations",
    description: "Core skills for building accessible, responsive websites.",
    skills: [
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" },
      { name: "Responsive design", level: "Learning" },
      { name: "CSS Flexbox", level: "Learning" },
      { name: "CSS Grid", level: "Learning" },
      { name: "Accessibility basics", level: "Learning" },
    ],
  },
  {
    name: "JavaScript & frameworks",
    description: "Languages and libraries for interactive web experiences.",
    skills: [
      { name: "JavaScript", level: "Beginner" },
      { name: "TypeScript", level: "Beginner" },
      { name: "React", level: "Beginner" },
      { name: "Next.js", level: "Beginner" },
      { name: "Tailwind CSS", level: "Beginner" },
    ],
  },
  {
    name: "Programming",
    description: "Foundational skills for writing and improving code.",
    skills: [
      { name: "Python", level: "Beginner" },
      { name: "Programming fundamentals", level: "Learning" },
      { name: "Problem solving", level: "Learning" },
      { name: "Debugging", level: "Learning" },
    ],
  },
  {
    name: "Tools & workflow",
    description: "Tools I use to build, manage, and publish projects.",
    skills: [
      { name: "Git & GitHub", level: "Beginner" },
      { name: "Visual Studio Code", level: "Beginner" },
      { name: "npm", level: "Learning" },
      { name: "Web deployment", level: "Learning" },
    ],
  },
];

export default function Skills() {
  const skillCount = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0,
  );

  return (
    <section id="skills" className="relative isolate min-h-screen overflow-hidden bg-black px-6 py-16 text-white md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[30rem] rounded-full bg-pink-500/10 blur-3xl"
      />

      <div aria-hidden="true" className="skills-shooting-stars">
        <span className="skills-shooting-star skills-shooting-star-one" />
        <span className="skills-shooting-star skills-shooting-star-two" />
        <span className="skills-shooting-star skills-shooting-star-three" />
        <span className="skills-shooting-star skills-shooting-star-four" />
        <span className="skills-shooting-star skills-shooting-star-five" />
        <span className="skills-shooting-star skills-shooting-star-six" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="hero-enter hero-delay-1 mb-14 flex flex-col gap-6 border-b border-slate-800 pb-10 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
              <span className="h-px w-8 bg-pink-400" />
              My toolkit
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Skills<span className="text-pink-400"></span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Technologies and tools I&apos;am learning and using to build
              responsive websites and applications. I&apos;m always working to
              improve through practice and new projects.
            </p>
          </div>

          <p className="shrink-0 text-sm font-medium text-slate-400">
            <span className="mr-2 font-mono text-2xl font-semibold text-white">
              {String(skillCount).padStart(2, "0")}
            </span>
            skills in progress
          </p>
        </header>

        <div className="divide-y divide-slate-800">
          {skillGroups.map((group, groupIndex) => (
            <section
              key={group.name}
              aria-labelledby={`skill-group-${groupIndex}`}
              className="hero-enter grid gap-6 py-8 first:pt-0 last:pb-0 md:grid-cols-[0.8fr_1.2fr] md:gap-12"
              style={{ animationDelay: `${250 + groupIndex * 120}ms` }}
            >
              <div className="md:py-2">
                <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-pink-400">
                  {String(groupIndex + 1).padStart(2, "0")} / Category
                </p>
                <h2
                  id={`skill-group-${groupIndex}`}
                  className="text-2xl font-semibold tracking-tight text-white"
                >
                  {group.name}
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                  {group.description}
                </p>
              </div>

              <ul className="grid content-start gap-3 sm:grid-cols-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-slate-800/80 bg-slate-900/50 px-4 py-3 transition-colors hover:border-pink-400/40 hover:bg-slate-900"
                  >
                    <span className="font-medium leading-5 text-slate-200">
                      {skill.name}
                    </span>
                    <span className="shrink-0 rounded-full bg-pink-400/10 px-2.5 py-1 text-xs font-medium text-pink-300">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
