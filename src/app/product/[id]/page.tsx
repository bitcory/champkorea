import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/main/ProductCard";
import { getProduct, products } from "@/lib/products";
import { getCategoryInfo } from "@/lib/categories";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  return { title: product ? `${product.name} | 챔프코리아` : "제품 | 챔프코리아" };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const info = getCategoryInfo(product.catNo);
  const breadcrumb = [
    { label: "제품소개", href: "/product" },
    ...(info
      ? info.breadcrumb.map((c) => ({ label: c.name, href: `/product?cat=${c.no}` }))
      : []),
    { label: product.name },
  ];

  const related = products
    .filter((p) => p.groupNo === product.groupNo && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <PageHeader title={product.name} breadcrumb={breadcrumb} />

      <div className="contain py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image */}
          <div
            className="relative aspect-square overflow-hidden rounded-3xl"
            style={
              product.image
                ? undefined
                : {
                    background: `linear-gradient(150deg, hsl(${product.hue} 55% 28%), hsl(${product.hue} 60% 50%))`,
                  }
            }
          >
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="h-[78%] w-2 rotate-[28deg] rounded-full bg-white/80" />
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-sm font-semibold text-accent">{product.series}</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink">{product.name}</h2>
            {product.tag && (
              <span
                className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold text-white ${
                  product.tag === "NEW" ? "bg-point" : "bg-ink"
                }`}
              >
                {product.tag}
              </span>
            )}
            {product.summary && (
              <p className="mt-5 leading-relaxed text-muted">{product.summary}</p>
            )}

            {product.price && (
              <div className="mt-6 rounded-2xl bg-surface p-5">
                <div className="flex items-baseline gap-2">
                  {product.price.discount > 0 && (
                    <span className="text-2xl font-extrabold text-point">
                      {product.price.discount}%
                    </span>
                  )}
                  <span className="text-3xl font-extrabold text-ink">
                    {product.price.sale.toLocaleString("ko-KR")}원
                  </span>
                </div>
                {product.price.discount > 0 && (
                  <span className="text-sm text-muted line-through">
                    정가 {product.price.original.toLocaleString("ko-KR")}원
                  </span>
                )}
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {product.freeShipping && (
                    <span className="rounded bg-white px-2 py-1 font-medium text-ink">
                      무료배송
                    </span>
                  )}
                  {product.todayShip && (
                    <span className="rounded bg-accent/10 px-2 py-1 font-medium text-accent">
                      오늘출발
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Specs */}
            {product.specs && (
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex py-3.5 text-sm">
                    <dt className="w-28 shrink-0 font-semibold text-ink">{s.label}</dt>
                    <dd className="text-muted">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              {product.href ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
                >
                  네이버 스토어에서 구매 <ExternalLink size={16} />
                </a>
              ) : (
                <Link
                  href="/store"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
                >
                  취급점 안내
                </Link>
              )}
              <Link
                href="/product"
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-bold text-ink hover:bg-surface"
              >
                <ChevronLeft size={16} /> 목록으로
              </Link>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h3 className="mb-6 text-xl font-extrabold text-ink">
              같은 카테고리의 다른 제품
            </h3>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
