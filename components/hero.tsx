import Image from "next/image";
import { site } from "@/lib/site";

const heroStats = [
  { num: "24/7", label: "Always open" },
  { num: "100%", label: "FB recommend" },
  { num: "3", label: "Programs" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pb-20"
    >
      <div className="absolute inset-0 anim-kenburns">
        <Image
          src="/gym_env_1.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-ink" />
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand/20 blur-[140px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-10 px-5 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-12 lg:px-10">
        <div>
          <p
            className="anim-up mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand sm:text-sm"
            style={{ animationDelay: "80ms" }}
          >
            <span
              className="anim-rule h-px w-6 bg-brand sm:w-8"
              style={{ animationDelay: "300ms" }}
            />
            San Antonio · Open 24/7
          </p>
          <h1 className="font-display text-[clamp(2.25rem,6.5vw,4.5rem)] font-bold uppercase leading-[0.98] tracking-tight">
            <span
              className="anim-up block"
              style={{ animationDelay: "160ms" }}
            >
              A gym that
            </span>
            <span
              className="anim-up block text-brand"
              style={{ animationDelay: "280ms" }}
            >
              fits your day.
            </span>
          </h1>
          <p
            className="anim-up mt-5 max-w-lg text-base text-muted sm:mt-6 sm:text-lg"
            style={{ animationDelay: "400ms" }}
          >
            A 24/7 open gym facility for all types of training and all types of
            goals.
          </p>
          <div
            className="anim-up mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: "520ms" }}
          >
            <a
              href={site.phoneHref}
              className="sheen group rounded-sm bg-brand px-7 py-4 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_12px_30px_-10px] hover:shadow-brand/70 sm:px-8"
            >
              Book a Free Tour
            </a>
            <a
              href="#services"
              className="rounded-sm border border-line px-7 py-4 text-center font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-chalk hover:bg-white/5 sm:px-8"
            >
              See Programs
            </a>
          </div>
        </div>

        <div
          className="anim-up rounded-sm border border-line bg-ink-card/85 p-6 backdrop-blur-sm sm:p-8"
          style={{ animationDelay: "640ms" }}
        >
          <div className="font-display text-3xl font-bold sm:text-4xl">
            {site.rating} <span className="text-muted">/ 5.0</span>
          </div>
          <div className="mt-2 tracking-[0.2em] text-brand">★★★★★</div>
          <p className="mt-3 text-sm text-muted">
            {site.googleReviews} Google reviews · {site.facebookRecommends}{" "}
            recommend on Facebook
          </p>
          <hr className="my-5 border-line sm:my-6" />
          <dl className="grid grid-cols-3 gap-3 sm:gap-4">
            {heroStats.map((item) => (
              <div key={item.label}>
                <dt className="font-display text-lg font-bold text-brand sm:text-xl">
                  {item.num}
                </dt>
                <dd className="text-[0.7rem] text-muted sm:text-xs">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href="#services"
        aria-label="Scroll to programs"
        className="anim-in absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-brand lg:flex"
        style={{ animationDelay: "900ms" }}
      >
        <span className="text-[0.65rem] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-line">
          <span className="absolute inset-x-0 top-0 h-4 animate-bounce bg-brand" />
        </span>
      </a>
    </section>
  );
}
