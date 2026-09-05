import { navLinks, site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink px-5 pb-10 pt-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-base font-bold uppercase tracking-tight">
              {site.name} <span className="text-brand">{site.nameAccent}</span>
            </h3>
            <p className="mt-3 text-sm text-muted">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <a
              href={site.phoneHref}
              className="block text-sm text-muted hover:text-chalk"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block text-sm text-muted hover:text-chalk"
            >
              {site.email}
            </a>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Hours</h4>
            <p className="text-sm text-muted">{site.hours}</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Explore</h4>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-muted hover:text-chalk"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-12 text-xs text-muted/60">
          © {new Date().getFullYear()} {site.name} {site.nameAccent}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
