import SectionTitle from "./SectionTitle";
import Reveal from "@/components/Reveal";

const feed = [
  { hue: 205, label: "필드 테스트" },
  { hue: 192, label: "신제품 프리뷰" },
  { hue: 150, label: "조행기" },
  { hue: 14, label: "프로스탭" },
  { hue: 268, label: "이벤트" },
  { hue: 35, label: "튜토리얼" },
];

export default function MainSocial() {
  return (
    <section className="bg-ink py-20 lg:py-24">
      <div className="contain">
        <div className="flex flex-col items-center text-center">
          <SectionTitle
            eyebrow="SOCIAL"
            title="챔프코리아와 함께하는 순간들"
            desc="인스타그램과 유튜브에서 챔프코리아의 최신 소식을 만나보세요"
            align="center"
            dark
          />
        </div>

        <Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
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
                <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="https://smartstore.naver.com/jaywalking"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-7 py-3 text-sm font-bold text-ink transition-transform hover:scale-105"
          >
            네이버 스토어
          </a>
          <a
            href="#"
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            인스타그램
          </a>
        </div>
      </div>
    </section>
  );
}
