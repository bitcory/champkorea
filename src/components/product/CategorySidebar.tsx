"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { productGroups } from "@/lib/navigation";

/** Left category tree for the product listing. Highlights the active category. */
export default function CategorySidebar({ activeNo }: { activeNo?: number }) {
  // which top groups / categories are expanded — open the group that contains
  // the active category by default
  const [open, setOpen] = useState<Record<number, boolean>>(() => {
    const init: Record<number, boolean> = {};
    for (const g of productGroups) {
      for (const c of g.categories) {
        if (c.no === activeNo || c.children?.some((s) => s.no === activeNo)) {
          init[g.no] = true;
          init[c.no] = true;
        }
      }
      if (g.no === activeNo) init[g.no] = true;
    }
    return init;
  });

  const toggle = (no: number) =>
    setOpen((o) => ({ ...o, [no]: !o[no] }));

  return (
    <aside className="w-full lg:w-64 lg:shrink-0">
      <div className="rounded-2xl border border-line">
        <div className="border-b border-line px-5 py-4">
          <Link href="/product" className="text-lg font-extrabold text-ink">
            제품 카테고리
          </Link>
        </div>
        <nav className="p-2">
          {productGroups.map((group) => {
            const groupOpen = open[group.no];
            return (
              <div key={group.no}>
                <button
                  onClick={() => toggle(group.no)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[15px] font-bold transition-colors ${
                    activeNo === group.no
                      ? "bg-accent/10 text-accent"
                      : "text-ink hover:bg-surface"
                  }`}
                >
                  {group.name}
                  <ChevronDown
                    size={16}
                    className={`text-muted transition-transform ${groupOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {groupOpen && (
                  <div className="pb-1 pl-2">
                    {group.categories.map((cat) => {
                      const hasChildren = (cat.children?.length ?? 0) > 0;
                      const catOpen = open[cat.no];
                      const catActive = activeNo === cat.no;
                      return (
                        <div key={cat.no}>
                          <div className="flex items-center">
                            <Link
                              href={`/product?cat=${cat.no}`}
                              className={`flex-1 rounded-lg px-3 py-2 text-sm transition-colors ${
                                catActive
                                  ? "font-semibold text-accent"
                                  : "text-muted hover:text-ink"
                              }`}
                            >
                              {cat.name}
                            </Link>
                            {hasChildren && (
                              <button
                                aria-label={`${cat.name} 펼치기`}
                                onClick={() => toggle(cat.no)}
                                className="px-2 py-2 text-muted"
                              >
                                <ChevronDown
                                  size={14}
                                  className={`transition-transform ${catOpen ? "rotate-180" : ""}`}
                                />
                              </button>
                            )}
                          </div>
                          {hasChildren && catOpen && (
                            <ul className="mb-1 ml-3 border-l border-line pl-3">
                              {cat.children!.map((sub) => (
                                <li key={sub.no}>
                                  <Link
                                    href={`/product?cat=${sub.no}`}
                                    className={`block py-1.5 text-sm transition-colors ${
                                      activeNo === sub.no
                                        ? "font-semibold text-accent"
                                        : "text-muted hover:text-ink"
                                    }`}
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
