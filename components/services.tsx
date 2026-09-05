import Image from "next/image";
import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHead
          kicker="Training"
          title="Three ways to train"
          body="Built around your goal, not a class schedule."
        />

        <div className="grid gap-px bg-line md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 100}
              className="group bg-ink transition-colors hover:bg-ink-card"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              </div>
              <div className="p-7 sm:p-9">
                <p className="mb-4 text-sm font-semibold text-brand">
                  {service.tag}
                </p>
                <h3 className="font-display text-xl font-bold">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
