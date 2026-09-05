import Reveal from "@/components/reveal";
import { stats } from "@/lib/site";

export default function ProofStrip() {
  return (
    <div className="border-y border-line bg-ink-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 sm:px-6 sm:py-12 md:grid-cols-4 lg:px-10">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80} className="text-center">
            <div className="font-display text-3xl font-bold sm:text-4xl">
              {stat.num}
            </div>
            <div className="mt-1 text-sm text-muted">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
