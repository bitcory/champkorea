import type { Metadata } from "next";
import { MapPin, Phone, Printer, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "오시는길 | 챔프코리아" };

const address = "인천광역시 남동구 염전로411번길 38 (간석동)";

const info = [
  { icon: MapPin, label: "주소", value: address },
  { icon: Phone, label: "본사", value: "032-868-5427" },
  { icon: Phone, label: "고객센터", value: "032-868-1004" },
  { icon: Printer, label: "팩스", value: "032-868-5423" },
  { icon: Clock, label: "운영시간", value: "평일 09:00 ~ 18:00 (점심 12:00 ~ 13:00, 주말·공휴일 휴무)" },
];

export default function DirectionsPage() {
  return (
    <>
      <PageHeader
        title="오시는길"
        subtitle="챔프코리아 본사 위치 및 연락처 안내"
        breadcrumb={[{ label: "챔프코리아" }, { label: "오시는길" }]}
      />

      <div className="contain py-16 lg:py-20">
        <div className="overflow-hidden rounded-3xl border border-line">
          <iframe
            title="챔프코리아 본사 위치"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed&z=16`}
            className="h-[360px] w-full lg:h-[440px]"
            loading="lazy"
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {info.map((i) => (
            <div
              key={i.label}
              className="flex items-start gap-4 rounded-2xl border border-line p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-accent">
                <i.icon size={20} strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-sm font-semibold text-muted">{i.label}</p>
                <p className="mt-0.5 font-medium text-ink">{i.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
