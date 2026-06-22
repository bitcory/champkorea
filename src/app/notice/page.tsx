import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { notices } from "@/lib/content";

export const metadata: Metadata = { title: "공지사항 | 챔프코리아" };

export default function NoticeListPage() {
  return (
    <>
      <PageHeader
        title="공지사항"
        subtitle="챔프코리아의 새로운 소식을 확인하세요"
        breadcrumb={[{ label: "공지사항" }]}
      />

      <div className="contain py-16 lg:py-20">
        <ul className="border-t-2 border-ink">
          {notices.map((n) => (
            <li key={n.id} className="border-b border-line">
              <Link
                href={`/notice/${n.id}`}
                className="group flex items-center gap-4 py-5"
              >
                <span className="hidden w-16 shrink-0 text-center text-sm font-bold text-accent sm:block">
                  {n.category}
                </span>
                <span className="flex-1 truncate text-[15px] font-medium text-ink group-hover:text-accent">
                  {n.title}
                </span>
                <span className="shrink-0 text-sm text-muted">{n.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
