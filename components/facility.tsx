import Image from "next/image";
import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { gallery, site } from "@/lib/site";

export default function Facility() {
  return (
    <section id="facility" className="border-t border-line py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHead
          kicker="The Floor"
          title="See the floor"
          body={`${site.address.line1}. Full equipment floor, open around the clock.`}
        />

        <Reveal className="grid gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:grid-rows-2">
          {gallery.map((shot, i) => (
            <div
              key={shot.src}
              className={`group relative overflow-hidden rounded-sm border border-line ${
                i === 0
                  ? "h-56 sm:col-span-2 sm:h-72 md:row-span-2 md:h-auto md:min-h-[26rem]"
                  : "h-44 sm:h-52"
              }`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/25 transition-opacity group-hover:opacity-0" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
