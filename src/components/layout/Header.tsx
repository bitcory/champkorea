"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, Menu, Store } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav, productGroups } from "@/lib/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      {/* Top bar: logo · search · util */}
      <div className="border-b border-line">
        <div className="contain flex items-center gap-6 py-4">
          <Link href="/" className="flex shrink-0 items-center" aria-label="챔프코리아 홈">
            <Image
              src="/logo.png"
              alt="CHAMP KOREA"
              width={323}
              height={187}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </Link>

          {/* Search — centered */}
          <form
            action="/product/search"
            className="hidden flex-1 justify-center lg:flex"
          >
            <div className="flex w-full max-w-md items-center rounded-full border border-line bg-surface px-4">
              <input
                name="sk"
                placeholder="검색어를 입력해주세요."
                className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted"
              />
              <button aria-label="검색" className="text-muted hover:text-accent">
                <Search size={18} strokeWidth={2} />
              </button>
            </div>
          </form>

          {/* Store */}
          <a
            href="https://smartstore.naver.com/jaywalking"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 flex-col items-center gap-1 text-[11px] font-medium text-ink transition-colors hover:text-accent lg:flex"
          >
            <Store size={20} strokeWidth={1.8} />
            스토어
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="메뉴 열기"
            onClick={() => setMobileOpen(true)}
            className="ml-auto flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <Menu size={26} className="text-ink" />
          </button>
        </div>
      </div>

      {/* GNB with mega-menu — dark, professional nav bar */}
      <div
        className="relative hidden bg-ink lg:block"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="contain">
          <ul className="-ml-6 flex items-stretch gap-1">
            {mainNav.map((item) => {
              const active = openMenu === item.label;
              return (
                <li
                  key={item.label}
                  onMouseEnter={() => setOpenMenu(item.label)}
                  className="group"
                >
                  <Link
                    href={item.href}
                    className={`relative flex h-14 items-center px-6 text-[15px] font-semibold transition-colors ${
                      active ? "text-sky-400" : "text-white"
                    } hover:text-sky-400`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3 bottom-0 h-0.5 origin-center bg-sky-400 transition-transform ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mega panel — distinct lighter surface + smooth slide-down */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              key="mega"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full origin-top overflow-hidden border-t-2 border-sky-500 bg-gradient-to-b from-[#1b2940] to-[#16202f] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.55)]"
            >
              <MegaPanel label={openMenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function MegaPanel({ label }: { label: string }) {
  const item = mainNav.find((n) => n.label === label);
  if (!item) return null;

  // Product mega-menu — three-level grid (lighter surface, professional look)
  if (item.productGroups) {
    return (
      <div className="contain grid grid-cols-4 gap-8 py-9 text-white">
        {productGroups.map((group) => (
          <div key={group.no}>
            <Link
              href={`/product?cat=${group.no}`}
              className="mb-3 block border-b border-sky-500/30 pb-2 text-base font-bold text-white transition-colors hover:text-sky-400"
            >
              {group.name}
            </Link>
            <ul className="space-y-0.5">
              {group.categories.map((cat) => (
                <li key={cat.no}>
                  <Link
                    href={`/product?cat=${cat.no}`}
                    className="-mx-2 block rounded-md px-2 py-1 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-sky-400"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  if (item.children) {
    return (
      <div className="contain flex flex-wrap gap-x-2 gap-y-1 py-5 text-white">
        {item.children.map((c) => (
          <Link
            key={c.href + c.label}
            href={c.href}
            className="rounded-md px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-sky-400"
          >
            {c.label}
          </Link>
        ))}
      </div>
    );
  }

  return null;
}
