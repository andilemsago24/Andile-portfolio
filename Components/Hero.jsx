
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="hero-background relative isolate flex min-h-[85vh] items-center overflow-hidden bg-black text-white">
      <span aria-hidden="true" className="hero-orb hero-orb-one" />
      <span aria-hidden="true" className="hero-orb hero-orb-two" />
      <span aria-hidden="true" className="hero-orb hero-orb-three" />
      <span aria-hidden="true" className="hero-orb hero-orb-four" />
      <span aria-hidden="true" className="hero-orb hero-orb-five" />
      <span aria-hidden="true" className="hero-orb hero-orb-six" />
      <span aria-hidden="true" className="hero-orb hero-orb-seven" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
        <div>
          <p className="hero-enter hero-delay-1 mb-5 text-lg font-medium text-pink-400">
            HELLO, WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="hero-enter hero-delay-2 mb-6 text-5xl font-bold md:text-7xl">
            I am Andile
          </h1>

          <h2 className="hero-enter hero-delay-3 mb-6 text-2xl text-neutral-300 md:text-4xl">
            Aspiring Software Developer
          </h2>

          <p className="hero-enter hero-delay-4 mb-10 max-w-2xl text-lg leading-8 text-neutral-400">
            I am passionate about building modern, responsive and
            user-friendly websites. I enjoy learning new technologies
            and solving problems through code.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-pink-600 px-7 py-3 font-semibold transition duration-200 hover:-translate-y-1 hover:bg-pink-700"
            >
              View My Projects
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-pink-400/50 px-7 py-3 text-pink-100 transition duration-200 hover:-translate-y-1 hover:bg-pink-500/10"
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="hero-enter hero-delay-4 relative mx-auto flex w-full max-w-sm justify-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-full border-2 border-pink-400/30 shadow-2xl shadow-pink-950/30">
            <Image
              src="/img3.jpeg"
              alt="Andile in professional attire"
              width={900}
              height={1600}
              priority
              className="h-full w-full object-cover object-[center_10%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
