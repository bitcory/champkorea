import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "E-카다로그 | 챔프코리아" };

const catalogs = [
  { title: "2026 통합 카탈로그", desc: "선상 · 루어 · 민물 전 라인업", hue: 205 },
  { title: "선상 로드 카탈로그", desc: "갈치 · 갑오징어 · 문어 · 쭈꾸미", hue: 220 },
  { title: "루어 로드 카탈로그", desc: "농어 · 한치 · 지깅 · 파핑", hue: 196 },
  { title: "민물 로드 카탈로그", desc: "붕어 · 잉어 · 장어 · 가물치", hue: 150 },
];

export default function CatalogPage() {
  return (
    <>
      <PageHeader
        title="E-카다로그"
        subtitle="챔프코리아 제품 카탈로그를 온라인으로 열람하세요"
        breadcrumb={[{ label: "E-카다로그" }]}
      />

      <div className="contain py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {catalogs.map((c) => (
            <Reveal key={c.title}>
              <a href="#" className="group block">
                <div
                  className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl text-white transition-transform group-hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(150deg, hsl(${c.hue} 50% 22%), hsl(${c.hue} 60% 45%))`,
                  }}
                >
                  <BookOpen size={40} className="opacity-80" />
                </div>
                <h3 className="mt-3 text-base font-bold text-ink group-hover:text-accent">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{c.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
