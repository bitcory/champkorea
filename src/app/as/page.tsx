"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function AsPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <PageHeader title="A/S 신청" breadcrumb={[{ label: "A/S 신청" }]} />
        <div className="contain py-24 text-center">
          <CheckCircle2 className="mx-auto text-accent" size={56} />
          <h2 className="mt-5 text-2xl font-extrabold text-ink">
            A/S 신청이 접수되었습니다
          </h2>
          <p className="mt-3 text-muted">
            접수 내용은 순차적으로 처리되며, 진행 상황은 고객센터(032-868-1004)로 안내드립니다.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 rounded-full border border-line px-7 py-3 text-sm font-bold text-ink hover:bg-surface"
          >
            다시 신청하기
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="A/S 신청"
        subtitle="제품 수리 및 점검을 온라인으로 접수하세요"
        breadcrumb={[{ label: "A/S 신청" }]}
      />

      <div className="contain py-16 lg:py-20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mx-auto max-w-2xl space-y-5"
        >
          <Field label="이름" required>
            <input required className={inputCls} placeholder="신청자 성함" />
          </Field>
          <Field label="연락처" required>
            <input required className={inputCls} placeholder="010-0000-0000" />
          </Field>
          <Field label="제품명" required>
            <input required className={inputCls} placeholder="예) 챔프코리아 프로헌터 갑오징어 로드" />
          </Field>
          <Field label="구입처">
            <input className={inputCls} placeholder="구입한 매장 또는 온라인몰" />
          </Field>
          <Field label="증상 / 요청 내용" required>
            <textarea
              required
              rows={6}
              className={`${inputCls} resize-none`}
              placeholder="고장 증상이나 요청 사항을 자세히 적어주세요."
            />
          </Field>

          <label className="flex items-center gap-2 text-sm text-muted">
            <input type="checkbox" required className="h-4 w-4 accent-[var(--accent)]" />
            개인정보 수집 및 이용에 동의합니다. (필수)
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-accent py-4 text-sm font-bold text-white transition-transform hover:scale-[1.01]"
          >
            A/S 신청하기
          </button>
        </form>
      </div>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-point">*</span>}
      </label>
      {children}
    </div>
  );
}
