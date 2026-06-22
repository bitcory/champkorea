import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const isExternal = Boolean(product.href);

  const inner = (
    <>
      <div
        className="relative aspect-square overflow-hidden bg-surface"
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
            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 23vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-30 transition-transform duration-500 group-hover:scale-110">
            <div className="h-[78%] w-1.5 rotate-[28deg] rounded-full bg-white/80" />
          </div>
        )}
        {product.tag && (
          <span
            className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[11px] font-bold text-white ${
              product.tag === "NEW" ? "bg-point" : "bg-ink"
            }`}
          >
            {product.tag}
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs font-medium text-accent">{product.series}</p>
        <h3 className="mt-1 line-clamp-2 min-h-[2.6em] text-[14px] font-bold leading-snug text-ink group-hover:text-accent">
          {product.name}
        </h3>

        {product.price && (
          <div className="mt-2">
            <div className="flex items-baseline gap-1.5">
              {product.price.discount > 0 && (
                <span className="text-[15px] font-extrabold text-point">
                  {product.price.discount}%
                </span>
              )}
              <span className="text-[17px] font-extrabold text-ink">
                {product.price.sale.toLocaleString("ko-KR")}원
              </span>
            </div>
            {product.price.discount > 0 && (
              <span className="text-xs text-muted line-through">
                {product.price.original.toLocaleString("ko-KR")}원
              </span>
            )}
          </div>
        )}

        <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px]">
          {product.freeShipping && (
            <span className="rounded bg-surface px-1.5 py-0.5 font-medium text-ink">
              무료배송
            </span>
          )}
          {product.todayShip && (
            <span className="rounded bg-accent/10 px-1.5 py-0.5 font-medium text-accent">
              오늘출발
            </span>
          )}
          {product.rating != null && (
            <span className="flex items-center gap-0.5 text-muted">
              <Star size={12} className="fill-point text-point" />
              <span className="font-semibold text-ink">{product.rating}</span>
              {product.reviews != null && <span>· 리뷰 {product.reviews}</span>}
            </span>
          )}
        </div>
      </div>
    </>
  );

  const className =
    "group block overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-xl";

  if (isExternal) {
    return (
      <a href={product.href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={`/product/${product.id}`} className={className}>
      {inner}
    </Link>
  );
}
