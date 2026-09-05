"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SocialLinks from "@/components/social-links";
import { navLinks, site } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Measure the drawer contents so the height transition has a target to ease to.
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setPanelHeight(el.scrollHeight));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Close the menu on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled || open
          ? "border-line bg-ink/90 backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:gap-6 sm:px-6 lg:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <Image
            src="/gym_logo.jpg"
            alt=""
            width={64}
            height={64}
            className="h-12 w-12 rounded-sm object-cover transition-transform duration-500 group-hover:scale-105 sm:h-14 sm:w-14"
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
              className="nav-link transition-colors duration-300 hover:text-chalk"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="sheen hidden rounded-sm bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark sm:inline-block"
          >
            Call the Gym
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => {
              const el = panelRef.current;
              if (el) setPanelHeight(el.scrollHeight);
              setOpen((v) => !v);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-line transition-colors duration-300 hover:border-brand md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute inset-x-0 h-0.5 bg-chalk transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-chalk transition-all duration-200 ${
                  open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute inset-x-0 h-0.5 bg-chalk transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Drawer: height is measured so it eases open instead of snapping */}
      <div
        id="mobile-menu"
        style={{ height: open ? panelHeight : 0 }}
        className={`overflow-hidden border-line bg-ink transition-[height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none md:hidden ${
          open ? "border-t opacity-100" : "opacity-0"
        }`}
      >
        <div ref={panelRef} className="flex flex-col px-5 py-4 sm:px-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`border-b border-line/60 py-3.5 text-sm text-muted transition-all duration-500 last:border-0 hover:text-chalk motion-reduce:transition-none ${
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            tabIndex={open ? 0 : -1}
            style={{
              transitionDelay: open ? `${120 + navLinks.length * 60}ms` : "0ms",
            }}
            className={`mt-5 rounded-sm bg-brand px-5 py-3.5 text-center text-sm font-semibold text-white transition-all duration-500 motion-reduce:transition-none ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            Call {site.phone}
          </a>
          <SocialLinks className="mt-5 justify-center" />
        </div>
      </div>
    </header>
  );
}
