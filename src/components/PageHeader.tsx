import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export default function PageHeader({
  title,
  subtitle,
  breadcrumb = [],
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
}) {
  return (
    <div className="bg-ink text-white">
      <div className="contain py-12 lg:py-16">
        <nav className="mb-3 flex flex-wrap items-center gap-1.5 text-sm text-white/50">
          <Link href="/" className="hover:text-white">
            홈
          </Link>
          {breadcrumb.map((b) => (
            <span key={b.label} className="flex items-center gap-1.5">
              <span>/</span>
              {b.href ? (
                <Link href={b.href} className="hover:text-white">
                  {b.label}
                </Link>
              ) : (
                <span className="text-white">{b.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 text-base text-white/60">{subtitle}</p>}
      </div>
    </div>
  );
}
