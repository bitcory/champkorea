import Link from "next/link";
import Image from "next/image";
import { Store, Building2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="contain py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Image
              src="/logo.png"
              alt="CHAMP KOREA"
              width={323}
              height={187}
              className="mb-4 h-12 w-auto invert"
            />
            <nav className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
              <Link href="/about/greetings" className="hover:text-white">회사소개</Link>
              <Link href="/privacy" className="font-medium hover:text-white">개인정보처리방침</Link>
              <Link href="/email-policy" className="hover:text-white">이메일무단수집거부</Link>
            </nav>
            <address className="space-y-1 text-sm not-italic leading-relaxed">
              <p className="font-semibold text-white">챔프코리아 (CHAMP KOREA)</p>
              <p>프로페셔널 피싱기어 · Design for the angler</p>
              <p>고객센터 평일 09:00 ~ 18:00 (점심 12:00 ~ 13:00)</p>
            </address>
            <p className="mt-5 text-xs text-white/40">
              Copyright © CHAMP KOREA. All rights reserved.
            </p>
          </div>

          <div className="flex gap-3">
            <SocialLink href="https://smartstore.naver.com/jaywalking" label="스토어" icon={<Store size={18} />} />
            <SocialLink href="/b2b" label="B2B" icon={<Building2 size={18} />} />
            <SocialLink href="/en" label="EN" icon={<Globe size={18} />} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-white"
    >
      {icon}
    </a>
  );
}
