import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { notices } from "@/lib/content";

export function generateStaticParams() {
  return notices.map((n) => ({ id: String(n.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const notice = notices.find((n) => n.id === Number(id));
  return { title: notice ? `${notice.title} | 챔프코리아` : "공지사항 | 챔프코리아" };
}

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notice = notices.find((n) => n.id === Number(id));
  if (!notice) notFound();

  return (
    <>
      <PageHeader
        title="공지사항"
        breadcrumb={[{ label: "공지사항", href: "/notice" }, { label: notice.title }]}
      />

      <div className="contain py-16 lg:py-20">
        <article className="mx-auto max-w-3xl">
          <div className="border-b border-line pb-6">
            <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent">
              {notice.category}
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-ink">{notice.title}</h2>
            <p className="mt-2 text-sm text-muted">{notice.date}</p>
          </div>

          <div className="space-y-4 py-8 leading-relaxed text-ink">
            {notice.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <Link
            href="/notice"
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 text-sm font-bold text-ink hover:bg-surface"
          >
            <ChevronLeft size={16} /> 목록으로
          </Link>
        </article>
      </div>
    </>
  );
}
