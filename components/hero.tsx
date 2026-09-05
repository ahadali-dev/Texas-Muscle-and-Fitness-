import Image from "next/image";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pb-20"
    >
      <Image
        src="/gym_env_1.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-ink" />
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand/20 blur-[140px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-10 px-5 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-12 lg:px-10">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand sm:text-sm">
            <span className="h-px w-6 bg-brand sm:w-8" />
            San Antonio · Open 24/7
          </p>
          <h1 className="font-display text-[clamp(2.75rem,9vw,6rem)] font-bold uppercase leading-[0.95] tracking-tight">
            24 hours.
            <br />
            <span className="text-brand">Zero excuses.</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-muted sm:mt-6 sm:text-lg">
            Real equipment. Real coaches. San Antonio&rsquo;s 24/7 gym off Loop
            1604.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={site.phoneHref}
              className="rounded-sm bg-brand px-7 py-4 text-center font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-dark sm:px-8"
            >
              Book a Free Tour
            </a>
            <a
              href="#services"
              className="rounded-sm border border-line px-7 py-4 text-center font-semibold transition-colors hover:border-chalk hover:bg-white/5 sm:px-8"
            >
              See Programs
            </a>
          </div>
        </div>

        <div className="rounded-sm border border-line bg-ink-card/85 p-6 backdrop-blur-sm sm:p-8">
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
            {[
              { num: "24/7", label: "Always open" },
              { num: "100%", label: "FB recommend" },
              { num: "3", label: "Programs" },
            ].map((item) => (
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
    </section>
  );
}
