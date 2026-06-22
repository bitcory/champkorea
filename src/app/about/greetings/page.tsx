import type { Metadata } from "next";
import Image from "next/image";
import { Award, Factory, Globe, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "회사소개 | 챔프코리아" };

const stats = [
  { icon: Factory, value: "40년+", label: "낚시대 제조 기술" },
  { icon: Users, value: "200+", label: "전국 취급점" },
  { icon: Globe, value: "10+", label: "수출 파트너 국가" },
  { icon: Award, value: "100%", label: "국내 자체 생산" },
];

export default function GreetingsPage() {
  return (
    <>
      <PageHeader
        title="회사소개"
        subtitle="Design for the angler — 낚시인을 위한 프로페셔널 피싱기어"
        breadcrumb={[{ label: "챔프코리아" }, { label: "회사소개" }]}
      />

      <div className="contain py-16 lg:py-20">
        {/* Intro */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.18em] text-accent">CHAMP KOREA</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              40년 제조 기술로 완성한
              <br />
              바다를 지배하는 한 번의 캐스팅
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              챔프코리아는 1986년 창립 이래 오직 낚시대 하나에 집중해 온 전문 제조 기업입니다.
              자체 카본 블랭크 생산 라인과 끊임없는 연구개발을 통해 선상·루어·민물 전 분야에서
              낚시인이 신뢰할 수 있는 하이퀄리티 로드를 합리적인 가격에 선보이고 있습니다.
            </p>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-line p-6 text-center"
              >
                <s.icon className="mx-auto text-accent" size={28} strokeWidth={1.8} />
                <p className="mt-3 text-2xl font-extrabold text-ink">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CEO message */}
        <Reveal>
          <div className="mt-20 grid gap-10 rounded-3xl bg-surface p-8 lg:grid-cols-[1fr_1.6fr] lg:p-12">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/about/ceo-greeting.png"
                alt="낚싯대 제조 현장에서 제품을 살펴보는 챔프코리아 리더"
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.18em] text-accent">CEO 인사말</p>
              <h3 className="mt-3 text-2xl font-extrabold text-ink">
                낚시인의 손끝에서 완성되는 제품을 만듭니다
              </h3>
              <div className="mt-5 space-y-4 leading-relaxed text-muted">
                <p>
                  안녕하십니까. 챔프코리아 홈페이지를 찾아주신 여러분께 진심으로 감사드립니다.
                </p>
                <p>
                  저희는 화려한 마케팅보다 손끝에 전해지는 감도와 휨새, 그리고 오랜 시간 함께할 수
                  있는 내구성을 가장 중요한 가치로 여깁니다. 40년간 축적한 제조 기술과 현장 프로
                  스탭들의 피드백을 모든 제품에 담아내고 있습니다.
                </p>
                <p>
                  앞으로도 “좋은 가격과 신뢰를 담은 하이퀄리티 로드”라는 약속을 지키며,
                  낚시인 여러분의 가장 든든한 파트너가 되겠습니다.
                </p>
              </div>
              <p className="mt-6 font-semibold text-ink">챔프코리아 임직원 일동</p>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
