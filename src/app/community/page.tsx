import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { staff } from "@/lib/content";

export const metadata: Metadata = { title: "스탭소개 | 챔프코리아" };

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        title="스탭소개"
        subtitle="현장에서 챔프코리아와 함께하는 프로 스탭 & 필드 테스터"
        breadcrumb={[{ label: "커뮤니티" }, { label: "스탭소개" }]}
      />

      <div className="contain py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {staff.map((s) => (
            <Reveal key={s.name}>
              <div className="group overflow-hidden rounded-2xl border border-line">
                <div
                  className="relative aspect-[3/4]"
                  style={{
                    background: `linear-gradient(150deg, hsl(${s.hue} 50% 25%), hsl(${s.hue} 60% 48%))`,
                  }}
                >
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-ink">
                    {s.role}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-extrabold text-ink">{s.name}</h3>
                  <p className="mt-1 text-sm text-muted">{s.field}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
