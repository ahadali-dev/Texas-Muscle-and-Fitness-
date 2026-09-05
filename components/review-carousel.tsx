"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Stars from "@/components/stars";
import { reviews } from "@/lib/site";

const AUTOPLAY_MS = 6000;

export default function ReviewCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

  const step = useCallback(
    (direction: 1 | -1) => {
      const next = (active + direction + reviews.length) % reviews.length;
      scrollToIndex(next);
    },
    [active, scrollToIndex],
  );

  // Track which card is currently snapped into view.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cards = Array.from(track.children) as HTMLElement[];
        const left = track.scrollLeft + track.offsetLeft;
        let closest = 0;
        let best = Infinity;
        cards.forEach((card, i) => {
          const distance = Math.abs(card.offsetLeft - left);
          if (distance < best) {
            best = distance;
            closest = i;
          }
        });
        setActive(closest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Autoplay, paused on hover / focus / touch.
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => step(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, step]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Member reviews"
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <article
            key={review.name + review.when}
            className="group flex w-[85%] shrink-0 snap-start flex-col rounded-sm border border-line bg-ink-card p-8 transition-colors hover:border-brand/60 sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white">
                {review.name.charAt(0)}
              </span>
              <div className="min-w-0">
                <p className="truncate font-semibold">{review.name}</p>
                <p className="truncate text-xs text-muted">{review.meta}</p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <Stars count={review.rating} />
              <span className="text-xs text-muted">{review.when}</span>
            </div>

            <p className="mt-4 grow text-[0.97rem] leading-relaxed text-chalk/85">
              {review.text}
            </p>

            <p className="mt-6 flex items-center gap-2 text-xs text-muted">
              <span className="h-px w-6 bg-brand" />
              Posted on Google
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {reviews.map((review, i) => (
            <button
              key={review.name + review.when}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === active}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-brand" : "w-4 bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>

        <div className="flex shrink-0 gap-3">
          {([-1, 1] as const).map((direction) => (
            <button
              key={direction}
              type="button"
              onClick={() => step(direction)}
              aria-label={direction === -1 ? "Previous review" : "Next review"}
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-line text-chalk transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className={`h-4 w-4 ${direction === -1 ? "rotate-180" : ""}`}
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
