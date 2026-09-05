import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { mapConfig, site } from "@/lib/site";

const embedSrc = `https://maps.google.com/maps?q=${mapConfig.lat},${mapConfig.lng}&z=${mapConfig.zoom}&output=embed`;

const details = [
  { label: "Address", value: `${site.address.line1}, ${site.address.line2}` },
  { label: "Hours", value: site.hours },
  { label: "Phone", value: site.phone, href: site.phoneHref },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
];

export default function LocationMap() {
  return (
    <section id="location" className="border-t border-line py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHead
          kicker="Find Us"
          title="Find the gym"
          body="Park out front, badge in, train. Any hour."
        />

        <Reveal className="grid gap-px overflow-hidden rounded-sm border border-line bg-line lg:grid-cols-[1fr_1.5fr]">
          <div className="bg-ink-card p-7 sm:p-8 lg:p-10">
            <dl className="space-y-7">
              {details.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-chalk/90">
                    {item.href ? (
                      <a href={item.href} className="hover:text-brand">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={mapConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Get Directions
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
                aria-hidden
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7v9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="relative min-h-[22rem] bg-ink-soft lg:min-h-[30rem]">
            <iframe
              src={embedSrc}
              title={`Map to ${mapConfig.label}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.1] invert-[0.92] hue-rotate-180"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
