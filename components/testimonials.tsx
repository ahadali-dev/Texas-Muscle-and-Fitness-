import ReviewCarousel from "@/components/review-carousel";
import SectionHead from "@/components/section-head";
import Stars from "@/components/stars";
import Reveal from "@/components/reveal";
import { reviews, site } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="reviews" className="border-t border-line py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="lg:flex-1">
            <SectionHead
              kicker="Reviews"
              title="What members say"
              body="Straight from Google. No edits."
            />
          </div>

          <Reveal
            delay={120}
            className="flex shrink-0 items-center gap-6 rounded-sm border border-line bg-ink-card px-7 py-5 lg:mb-14"
          >
            <div>
              <div className="font-display text-4xl font-bold leading-none">
                {site.rating}
              </div>
              <Stars className="mt-2" />
            </div>
            <div className="h-12 w-px bg-line" />
            <p className="text-sm text-muted">
              {site.googleReviews} Google reviews
              <br />
              {site.facebookRecommends} recommend on Facebook
            </p>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed track so cards bleed past the container edge */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <ReviewCarousel />
        <p className="mt-6 text-xs text-muted/70">
          Showing {reviews.length} of {site.googleReviews} Google reviews.
        </p>
      </div>
    </section>
  );
}
