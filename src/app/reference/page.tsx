import type { Metadata } from "next";
import { FileDown } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { downloads } from "@/lib/content";

export const metadata: Metadata = { title: "다운로드 | 챔프코리아" };

export default function ReferencePage() {
  return (
    <>
      <PageHeader
        title="다운로드"
        subtitle="카탈로그 · 사양서 · 브랜드 자료를 내려받으세요"
        breadcrumb={[{ label: "다운로드" }]}
      />

      <div className="contain py-16 lg:py-20">
        <ul className="border-t-2 border-ink">
          {downloads.map((d) => (
            <li key={d.name} className="border-b border-line">
              <a href="#" className="group flex items-center gap-4 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <FileDown size={20} />
                </span>
                <div className="flex-1">
                  <p className="font-medium text-ink group-hover:text-accent">{d.name}</p>
                  <p className="text-sm text-muted">
                    {d.type} · {d.size}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-accent">받기</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
