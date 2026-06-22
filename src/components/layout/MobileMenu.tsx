"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { mainNav, utilMenu, productGroups } from "@/lib/navigation";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-white transition-transform lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Image
            src="/logo.png"
            alt="CHAMP KOREA"
            width={323}
            height={187}
            className="h-9 w-auto"
          />
          <button aria-label="닫기" onClick={onClose} className="text-ink">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-3">
          <ul className="divide-y divide-line">
            {mainNav.map((item) => {
              const hasChildren = item.children || item.productGroups;
              const isOpen = expanded === item.label;
              return (
                <li key={item.label} className="py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-3 text-base font-semibold text-ink"
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        aria-label="하위 메뉴"
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        className="px-3 py-2 text-muted"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {isOpen && item.children && (
                    <ul className="pb-3 pl-3">
                      {item.children.map((c) => (
                        <li key={c.href + c.label}>
                          <Link
                            href={c.href}
                            onClick={onClose}
                            className="block py-2 text-sm text-muted"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {isOpen && item.productGroups && (
                    <ul className="pb-3 pl-3">
                      {productGroups.map((g) => (
                        <li key={g.no}>
                          <Link
                            href={`/product?cat=${g.no}`}
                            onClick={onClose}
                            className="block py-2 text-sm font-medium text-ink"
                          >
                            {g.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="grid grid-cols-3 gap-2 border-t border-line p-4 text-center text-xs">
          {utilMenu.map((u) => (
            <a
              key={u.label}
              href={u.href}
              target={"external" in u && u.external ? "_blank" : undefined}
              rel={"external" in u && u.external ? "noopener noreferrer" : undefined}
              className="rounded bg-surface py-2 font-medium text-ink"
            >
              {u.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
