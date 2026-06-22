"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Slide =
  | {
      type: "image";
      src: string;
      alt: string;
      href: string;
      // bias the crop on narrow screens so the headline stays visible
      position?: string;
    }
  | {
      type: "text";
      eyebrow: string;
      title: string;
      desc: string;
      cta: string;
      href: string;
      gradient: string;
    };

const slides: Slide[] = [
  {
    type: "image",
    src: "/hero/banner-hero-v2.png",
    alt: "40년 제조 기술로 완성한 선상 전문 로드 — CHAMP KOREA",
    href: "/product?cat=7",
    position: "35% center",
  },
  {
    type: "text",
    eyebrow: "INSHORE GAME",
    title: "더 가볍게,\n더 정교하게",
    desc: "감도와 캐스팅 비거리를 극대화한 인쇼어 루어 로드",
    cta: "루어 로드 보기",
    href: "/product?cat=5",
    gradient: "linear-gradient(120deg,#0d1622 0%,#1c2735 55%,#2b4a6b 100%)",
  },
  {
    type: "text",
    eyebrow: "FRESHWATER",
    title: "필드를 압도하는\n배스 피네스",
    desc: "민물 루어 게임을 위한 정밀 튜닝 로드 라인업",
    cta: "민물 로드 보기",
    href: "/product?cat=2",
    gradient: "linear-gradient(120deg,#06251c 0%,#0e6b4e 60%,#19a06f 100%)",
  },
];

export default function MainVisual() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[440px] sm:h-[520px] lg:h-[600px]">
                {s.type === "image" ? (
                  <a href={s.href} className="block h-full w-full" aria-label={s.alt}>
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      priority={i === 0}
                      sizes="100vw"
                      className="object-cover"
                      style={{ objectPosition: s.position ?? "center" }}
                    />
                  </a>
                ) : (
                  <div
                    className="flex h-full items-center"
                    style={{ background: s.gradient }}
                  >
                    <div className="contain">
                      <div className="max-w-xl text-white">
                        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-white/70">
                          {s.eyebrow}
                        </p>
                        <h2 className="whitespace-pre-line text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                          {s.title}
                        </h2>
                        <p className="mt-5 text-base text-white/80 sm:text-lg">
                          {s.desc}
                        </p>
                        <a
                          href={s.href}
                          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-105"
                        >
                          {s.cta}
                          <span>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`슬라이드 ${i + 1}`}
            onClick={() => embla?.scrollTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              selected === i ? "w-8 bg-white" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
