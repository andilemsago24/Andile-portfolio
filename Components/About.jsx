import Image from "next/image";

const focusAreas = [
  "Web development",
  "Responsive design",
  "Problem solving",
  "Continuous learning",
  "Software engineering",
];

const aboutStars = [
  { top: 8, left: 7, delay: -0.5, size: 0.9 },
  { top: 15, left: 31, delay: -2.2, size: 0.65 },
  { top: 9, left: 58, delay: -1.1, size: 0.75 },
  { top: 19, left: 91, delay: -3.4, size: 1 },
  { top: 29, left: 15, delay: -4.1, size: 0.7 },
  { top: 35, left: 45, delay: -1.8, size: 0.95 },
  { top: 27, left: 76, delay: -2.8, size: 0.65 },
  { top: 46, left: 5, delay: -3.7, size: 0.85 },
  { top: 52, left: 35, delay: -0.9, size: 0.7 },
  { top: 43, left: 68, delay: -4.5, size: 1 },
  { top: 59, left: 94, delay: -2.5, size: 0.75 },
  { top: 68, left: 19, delay: -1.4, size: 0.95 },
  { top: 74, left: 51, delay: -3.2, size: 0.65 },
  { top: 83, left: 83, delay: -0.7, size: 0.9 },
  { top: 91, left: 39, delay: -4.3, size: 0.8 },
  { top: 96, left: 70, delay: -1.9, size: 0.7 },
];

const shootingStars = [
  { top: 14, left: 10, delay: -0.5 },
  { top: 38, left: 62, delay: -1.8 },
  { top: 61, left: 24, delay: -3.1 },
  { top: 82, left: 73, delay: -4.4 },
];

export default function About() {
  return (
    <section id="about" className="relative isolate min-h-screen overflow-hidden bg-black px-6 py-16 text-white md:py-24">
      <div aria-hidden="true" className="about-stars">
        {aboutStars.map((star, index) => (
          <span
            key={index}
            className="about-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              fontSize: `${star.size}rem`,
            }}
          >
            ✦
          </span>
        ))}
        {shootingStars.map((star, index) => (
          <span
            key={`shooting-star-${index}`}
            className="about-shooting-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <section className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <p className="hero-enter hero-delay-1 mb-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
              <span className="h-px w-8 bg-pink-400" />
              Get to know me
            </p>

            <h1 className="hero-enter hero-delay-2 max-w-2xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Hello, I am <span className="text-pink-400">Andile</span>
            </h1>

            <p className="hero-enter hero-delay-3 mt-6 text-xl font-medium text-slate-300 md:text-2xl">
              Aspiring software developer
            </p>

            <div className="hero-enter hero-delay-4 mt-8 max-w-2xl space-y-5 text-base leading-8 text-slate-400 md:text-lg">
              <p>
                I am passionate about technology and creating digital
                experiences that solve real-world problems.
              </p>
              <p>
                I am developing my skills in building responsive websites,
                understanding programming concepts, and working with modern web
                technologies. I enjoy learning, solving problems, and
                continuously improving as I work toward becoming a professional
                software engineer.
              </p>
            </div>
          </div>

          <div className="hero-enter hero-delay-4 mx-auto flex w-full max-w-md justify-center">
            <Image
              src="/developer-illustration.svg"
              alt="Illustration of a developer working at a laptop"
              width={800}
              height={1000}
              priority
              className="aspect-[4/5] w-full rounded-2xl border border-pink-400/30 object-cover shadow-2xl shadow-pink-950/30"
            />
          </div>
        </section>

        <section className="mt-20 border-t border-slate-800 pt-10 md:mt-28 md:pt-12">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
                What I care about
              </p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                My areas of focus
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-pink-400"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
