"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-ink/90 backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:gap-6 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/gym_logo.jpg"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 rounded-sm object-cover sm:h-10 sm:w-10"
          />
          <span className="font-display text-sm font-bold uppercase tracking-tight sm:text-base lg:text-lg">
            {site.name} <span className="text-brand">{site.nameAccent}</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-chalk"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden rounded-sm bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-block"
          >
            Call the Gym
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-line md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-chalk transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-chalk transition-transform ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink md:hidden">
          <div className="flex flex-col px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3 text-sm text-muted last:border-0 hover:text-chalk"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-4 rounded-sm bg-brand px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
