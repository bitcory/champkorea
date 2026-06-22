import Reveal from "@/components/Reveal";

export default function SectionTitle({
  eyebrow,
  title,
  desc,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "text-center" : ""}>
        {eyebrow && (
          <p className="mb-2 text-sm font-bold tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
        )}
        <h2
          className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {desc && (
          <p className={`mt-3 text-base ${dark ? "text-white/60" : "text-muted"}`}>
            {desc}
          </p>
        )}
      </div>
    </Reveal>
  );
}
