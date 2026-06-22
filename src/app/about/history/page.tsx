import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { history } from "@/lib/content";

export const metadata: Metadata = { title: "회사 연혁 | 챔프코리아" };

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        title="회사 연혁"
        subtitle="1986년부터 이어온 챔프코리아의 발자취"
        breadcrumb={[{ label: "챔프코리아" }, { label: "회사 연혁" }]}
      />

      <div className="contain py-16 lg:py-20">
        <div className="relative mx-auto max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-[88px] top-2 bottom-2 w-px bg-line sm:left-[120px]" />

          <div className="space-y-12">
            {history.map((h) => (
              <Reveal key={h.year}>
                <div className="relative flex gap-6 sm:gap-10">
                  <div className="w-[72px] shrink-0 text-right sm:w-[96px]">
                    <span className="text-2xl font-extrabold text-accent">{h.year}</span>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-white sm:-left-[34px]" />
                    <ul className="space-y-2">
                      {h.items.map((item, i) => (
                        <li key={i} className="leading-relaxed text-ink">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
