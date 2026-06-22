import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CategorySidebar from "@/components/product/CategorySidebar";
import ProductCard from "@/components/main/ProductCard";
import { products } from "@/lib/products";
import { getCategoryInfo } from "@/lib/categories";

export const metadata: Metadata = {
  title: "제품소개 | 챔프코리아",
};

export default async function ProductListPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const catNo = cat ? Number(cat) : undefined;
  const info = getCategoryInfo(catNo);

  const list = info
    ? products.filter((p) => info.descendants.has(p.catNo))
    : products;

  const title = info ? info.breadcrumb[info.breadcrumb.length - 1].name : "전체 제품";
  const breadcrumb = [
    { label: "제품소개", href: "/product" },
    ...(info
      ? info.breadcrumb.map((c) => ({
          label: c.name,
          href: `/product?cat=${c.no}`,
        }))
      : []),
  ];

  return (
    <>
      <PageHeader
        title={title}
        subtitle="어종과 기법에 최적화된 챔프코리아의 프리미엄 로드 라인업"
        breadcrumb={breadcrumb}
      />

      <div className="contain py-12 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row">
          <CategorySidebar activeNo={catNo} />

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
              <p className="text-sm text-muted">
                총 <span className="font-bold text-ink">{list.length}</span>개의 제품
              </p>
            </div>

            {list.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-line py-24 text-center text-muted">
                해당 카테고리에 등록된 제품이 없습니다.
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
                {list.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
