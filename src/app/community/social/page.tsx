import type { Metadata } from "next";
import { Camera, PlaySquare } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "SOCIAL | 챔프코리아" };

const feed = [
  { hue: 205, label: "선상 갈치 필드 테스트" },
  { hue: 192, label: "프로헌터 신제품 프리뷰" },
  { hue: 150, label: "월하조어 민물 조행기" },
  { hue: 14, label: "프로스탭 인터뷰" },
  { hue: 268, label: "여름 시즌 이벤트" },
  { hue: 35, label: "초보자 캐스팅 튜토리얼" },
  { hue: 220, label: "갑오징어 에깅 하이라이트" },
  { hue: 196, label: "쭈꾸미 조행 브이로그" },
];

export default function SocialPage() {
  return (
    <>
      <PageHeader
        title="SOCIAL"
        subtitle="인스타그램과 유튜브에서 챔프코리아의 최신 소식을 만나보세요"
        breadcrumb={[{ label: "커뮤니티" }, { label: "SOCIAL" }]}
      />

      <div className="contain py-16 lg:py-20">
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            <Camera size={18} /> 인스타그램
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-point px-7 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            <PlaySquare size={18} /> 유튜브
          </a>
        </div>

        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {feed.map((f, i) => (
              <a
                key={i}
                href="#"
                className="group relative aspect-square overflow-hidden rounded-xl"
                style={{
                  background: `linear-gradient(150deg, hsl(${f.hue} 45% 25%), hsl(${f.hue} 60% 45%))`,
                }}
              >
                <span className="absolute inset-0 flex items-end p-3 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {f.label}
                </span>
                <span className="absolute inset-0 transition-colors group-hover:bg-black/30" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
}
