import Reveal from "@/components/reveal";

export default function SectionHead({
  kicker,
  title,
  body,
}: {
  kicker?: string;
  title: string;
  body?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      {kicker && (
        <p className="mb-4 flex items-center gap-3 text-sm font-semibold text-brand">
          <span className="h-px w-8 bg-brand" />
          {kicker}
        </p>
      )}
      <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.08] tracking-tight">
        {title}
      </h2>
      {body && <p className="mt-4 text-lg text-muted">{body}</p>}
    </Reveal>
  );
}
