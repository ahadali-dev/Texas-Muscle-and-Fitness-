import Reveal from "@/components/reveal";
import { site } from "@/lib/site";

export default function Cta() {
  return (
    <section className="bg-brand py-20 text-center sm:py-24 lg:py-28">
      <Reveal className="mx-auto max-w-3xl px-5 sm:px-6">
        <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight text-black">
          Come see it for yourself
        </h2>
        <p className="mt-4 text-lg text-black/70">
          Free tour. No pressure.
        </p>
        <a
          href={site.phoneHref}
          className="sheen mt-9 inline-block rounded-sm bg-black px-8 py-4 font-semibold text-chalk transition-transform duration-300 hover:-translate-y-0.5"
        >
          Call {site.phone}
        </a>
      </Reveal>
    </section>
  );
}
