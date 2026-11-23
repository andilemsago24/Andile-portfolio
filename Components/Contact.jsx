export default function Contact() {
  return (
    <section id="contact" className="relative isolate min-h-screen overflow-hidden bg-black px-6 py-16 text-white md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[30rem] rounded-full bg-pink-500/10 blur-3xl"
      />

      <div aria-hidden="true" className="contact-moons">
        <span className="contact-moon contact-moon-one" />
        <span className="contact-moon contact-moon-two" />
        <span className="contact-moon contact-moon-three" />
        <span className="contact-moon contact-moon-four" />
        <span className="contact-moon contact-moon-five" />
        <span className="contact-moon contact-moon-six" />
        <span className="contact-moon contact-moon-seven" />
        <span className="contact-moon contact-moon-eight" />
        <span className="contact-moon contact-moon-nine" />
        <span className="contact-moon contact-moon-ten" />
        <span className="contact-moon contact-moon-eleven" />
        <span className="contact-moon contact-moon-twelve" />
        <span className="contact-moon contact-moon-thirteen" />
        <span className="contact-moon contact-moon-fourteen" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="hero-enter hero-delay-1 mb-14 max-w-3xl md:mb-20">
          <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
            <span className="h-px w-8 bg-pink-400" />
            Get in touch
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Let&apos;s connect<span className="text-pink-400"></span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I&apos;am open to learning opportunities, collaborations, and
            projects that help me grow as a developer. Have something in mind?
            I&apos;would be glad to hear from you.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[1fr_0.85fr] md:gap-12">
          <section aria-labelledby="contact-details-heading">
            <h2
              id="contact-details-heading"
              className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500"
            >
              Contact details
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="https://github.com/andilemsago24"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-enter hero-delay-2 group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:bg-slate-900"
              >
                <span className="mb-8 flex size-11 items-center justify-center rounded-xl border border-pink-400/20 bg-pink-400/10 text-pink-300">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.72 1.15 1.72 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                </span>
                <span className="block text-sm text-slate-500">GitHub</span>
                <span className="mt-1 flex items-center gap-2 font-semibold text-slate-100">
                  andilemsago24
                  <span
                    aria-hidden="true"
                    className="text-pink-300 transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
              </a>

              <div className="hero-enter hero-delay-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                <span
                  aria-hidden="true"
                  className="mb-8 flex size-11 items-center justify-center rounded-xl border border-pink-400/20 bg-pink-400/10 text-pink-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="size-5"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span className="block text-sm text-slate-500">Location</span>
                <span className="mt-1 block font-semibold text-slate-100">
                  Zimbabwe
                </span>
              </div>
            </div>
          </section>

          <aside className="hero-enter hero-delay-4 relative overflow-hidden rounded-2xl border border-pink-400/20 bg-gradient-to-br from-pink-500/10 via-slate-900 to-slate-900 p-8 md:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 size-40 rounded-full border border-pink-400/10"
            />
            <div
              aria-hidden="true"
              className="absolute -right-2 -top-2 size-24 rounded-full border border-pink-400/10"
            />

            <div className="relative">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Open to opportunities
              </span>

              <h2 className="text-2xl font-bold leading-snug md:text-3xl">
                Let&apos;s build something meaningful.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                I&apos;am always interested in connecting with people who care
                about technology, creative ideas, and building useful things.
              </p>

              <a
                href="https://github.com/andilemsago24"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-pink-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300"
              >
                Connect on GitHub
                <span aria-hidden="true">&nearr;</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
