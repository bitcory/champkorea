import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/main/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "검색 | 챔프코리아",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ sk?: string }>;
}) {
  const { sk } = await searchParams;
  const keyword = (sk ?? "").trim();

  const results = keyword
    ? products.filter((p) => {
        const hay = `${p.name} ${p.series} ${p.group}`.toLowerCase();
        return hay.includes(keyword.toLowerCase());
      })
    : [];

  return (
    <>
      <PageHeader
        title="검색 결과"
        subtitle={
          keyword
            ? `‘${keyword}’ 에 대한 검색 결과 ${results.length}건`
            : "검색어를 입력해주세요."
        }
        breadcrumb={[{ label: "검색" }]}
      />

      <div className="contain py-12 lg:py-16">
        {keyword && results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line py-24 text-center text-muted">
            ‘{keyword}’ 에 대한 검색 결과가 없습니다.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
