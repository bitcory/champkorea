import Link from "next/link";
import { Wrench, MapPin, BookOpen, Download } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "@/components/Reveal";

const notices = [
  { id: 1, title: "2026 NS 신제품 카탈로그 출시 안내", date: "2026.06.10" },
  { id: 2, title: "여름 시즌 A/S 접수 및 처리 일정 공지", date: "2026.06.02" },
  { id: 3, title: "B2B Mall 시스템 업데이트 안내", date: "2026.05.21" },
  { id: 4, title: "전국 취급점 신규 입점 안내", date: "2026.05.09" },
];

const quickLinks = [
  { label: "A/S 신청", desc: "온라인 수리 접수", href: "/as", Icon: Wrench },
  { label: "취급점 안내", desc: "가까운 매장 찾기", href: "/store", Icon: MapPin },
  { label: "E-카다로그", desc: "제품 카탈로그 열람", href: "/catalog", Icon: BookOpen },
  { label: "다운로드", desc: "자료실 / 설명서", href: "/reference", Icon: Download },
];

export default function MainNoticeQuick() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="contain grid gap-12 lg:grid-cols-2">
        {/* Notice */}
        <div>
          <div className="flex items-end justify-between">
            <SectionTitle eyebrow="NEWS" title="공지사항" />
            <Link href="/notice" className="text-sm font-semibold text-accent hover:underline">
              더보기 →
            </Link>
          </div>
          <Reveal>
            <ul className="mt-6 divide-y divide-line border-t border-ink/10">
              {notices.map((n) => (
                <li key={n.id}>
                  <Link
                    href={`/notice/${n.id}`}
                    className="flex items-center justify-between gap-4 py-4 group"
                  >
                    <span className="truncate text-[15px] text-ink group-hover:text-accent">
                      {n.title}
                    </span>
                    <span className="shrink-0 text-sm text-muted">{n.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Quick */}
        <div>
          <SectionTitle eyebrow="QUICK MENU" title="바로가기" />
          <Reveal>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {quickLinks.map((q) => (
                <Link
                  key={q.label}
                  href={q.href}
                  className="group flex flex-col gap-2 rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <q.Icon size={24} strokeWidth={1.8} />
                  </span>
                  <span className="mt-2 text-base font-bold text-ink">{q.label}</span>
                  <span className="text-sm text-muted">{q.desc}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
