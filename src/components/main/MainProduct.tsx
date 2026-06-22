"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { products } from "@/lib/products";
import { productGroups } from "@/lib/navigation";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import Reveal from "@/components/Reveal";

const groupNames = ["전체", ...productGroups.map((g) => g.name)];

export default function MainProduct() {
  const [filter, setFilter] = useState("전체");
  const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true });

  const list =
    filter === "전체" ? products : products.filter((p) => p.group === filter);

  return (
    <section className="py-20 lg:py-24">
      <div className="contain">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="PRODUCTS"
            title="제품 라인업"
            desc="어종과 기법에 최적화된 챔프코리아의 프리미엄 로드"
          />
          <a
            href="/product"
            className="self-start text-sm font-semibold text-accent hover:underline sm:self-auto"
          >
            전체 제품 보기 →
          </a>
        </div>

        {/* Category quick filter chips (mirrors 어종별 검색) */}
        <Reveal>
          <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
            {groupNames.map((g) => (
              <button
                key={g}
                onClick={() => setFilter(g)}
                className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                  filter === g
                    ? "border-accent bg-accent text-white"
                    : "border-line text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Product slider */}
        <div className="mt-8 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {list.map((p) => (
              <div
                key={p.id}
                className="min-w-0 flex-[0_0_72%] sm:flex-[0_0_42%] lg:flex-[0_0_23%]"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
