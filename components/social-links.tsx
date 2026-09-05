import { socials } from "@/lib/site";

const icons: Record<string, React.ReactNode> = {
  Facebook: (
    <path d="M14 8.5h2.2V5.6C15.8 5.5 15 5.4 14.1 5.4c-2 0-3.4 1.2-3.4 3.5v2H8v3.1h2.7V22h3.2v-8h2.6l.4-3.1h-3V9.3c0-.5.2-.8.9-.8z" />
  ),
};

export default function SocialLinks({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            {icons[social.label]}
          </svg>
        </a>
      ))}
    </div>
  );
}
