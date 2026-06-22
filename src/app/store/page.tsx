"use client";

import { useMemo, useState } from "react";
import { MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { dealers } from "@/lib/content";

export default function StorePage() {
  const regions = useMemo(
    () => ["전체", ...Array.from(new Set(dealers.map((d) => d.region)))],
    []
  );
  const [region, setRegion] = useState("전체");
  const [q, setQ] = useState("");

  const list = dealers.filter((d) => {
    const okRegion = region === "전체" || d.region === region;
    const okQ =
      !q ||
      d.name.includes(q) ||
      d.address.includes(q);
    return okRegion && okQ;
  });

  return (
    <>
      <PageHeader
        title="취급점 안내"
        subtitle="전국 챔프코리아 취급점을 확인하세요"
        breadcrumb={[{ label: "취급점안내" }]}
      />

      <div className="contain py-16 lg:py-20">
        {/* search */}
        <div className="mb-6 flex items-center rounded-full border border-line bg-surface px-5">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="매장명 또는 주소로 검색"
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>

        {/* region chips */}
        <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-1">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                region === r
                  ? "border-accent bg-accent text-white"
                  : "border-line text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <p className="mb-4 text-sm text-muted">
          총 <span className="font-bold text-ink">{list.length}</span>개의 취급점
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {list.map((d, i) => (
            <div key={i} className="rounded-2xl border border-line p-6">
              <div className="flex items-center gap-2">
                <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent">
                  {d.region}
                </span>
                <h3 className="text-lg font-bold text-ink">{d.name}</h3>
              </div>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                {d.address}
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-sm text-muted">
                <Phone size={16} className="shrink-0 text-accent" />
                {d.phone}
              </p>
            </div>
          ))}
        </div>

        {list.length === 0 && (
          <div className="rounded-2xl border border-dashed border-line py-24 text-center text-muted">
            검색 결과가 없습니다.
          </div>
        )}
      </div>
    </>
  );
}
