import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "챔프코리아 | CHAMP KOREA — 프로페셔널 피싱기어",
  description:
    "40년 제조 기술로 완성한 바다·민물 루어, 지깅, 선상, 릴, 낚시용품. 챔프코리아의 프리미엄 낚시대 라인업을 만나보세요.",
  openGraph: {
    title: "챔프코리아 | CHAMP KOREA",
    description: "챔프코리아 공식 홈페이지입니다. Design for the angler.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
