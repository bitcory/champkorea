// Site navigation model, reconstructed from the original NS Rod site (nsrod.co.kr).
// Three-level product taxonomy is the defining structure of the original GNB.

export type SubCategory = { no: number; name: string };
export type Category = { no: number; name: string; children?: SubCategory[] };
export type ProductGroup = { no: number; name: string; categories: Category[] };

/** Top-level GNB menus */
export type NavItem = {
  label: string;
  href: string;
  /** product mega-menu groups (제품소개 only) */
  productGroups?: ProductGroup[];
  /** simple sub-links (about, community, etc.) */
  children?: { label: string; href: string }[];
};

export const utilMenu = [
  { label: "스토어", href: "https://smartstore.naver.com/jaywalking", external: true, icon: "store" },
  { label: "다운로드", href: "/reference", icon: "download" },
  { label: "E카다로그", href: "/catalog", icon: "book" },
  { label: "ENGLISH", href: "/en", icon: "globe" },
  { label: "B2B Mall", href: "/b2b", external: true, icon: "building" },
] as const;

export const productGroups: ProductGroup[] = [
  {
    no: 1,
    name: "바다",
    categories: [
      {
        no: 5,
        name: "바다루어",
        children: [
          { no: 11, name: "농어" }, { no: 12, name: "인쇼어" }, { no: 13, name: "볼락" },
          { no: 14, name: "전갱이" }, { no: 15, name: "무늬오징어" }, { no: 16, name: "갑오징어" },
          { no: 17, name: "문어" }, { no: 18, name: "주꾸미" }, { no: 19, name: "한치" },
          { no: 20, name: "갈치" }, { no: 21, name: "투톱" },
        ],
      },
      {
        no: 6,
        name: "지깅&파핑",
        children: [
          { no: 22, name: "러버지깅" }, { no: 23, name: "광어다운샷" }, { no: 24, name: "라이트지깅" },
          { no: 25, name: "지깅" }, { no: 26, name: "갈치지깅" }, { no: 27, name: "슬로우지깅" },
          { no: 28, name: "파핑" }, { no: 29, name: "쇼어지깅" }, { no: 30, name: "삼치" },
          { no: 31, name: "빅게임" },
        ],
      },
      {
        no: 7,
        name: "선상",
        children: [
          { no: 32, name: "하이브리드" }, { no: 33, name: "선상우럭" }, { no: 34, name: "갈치" },
          { no: 35, name: "선상외줄" }, { no: 36, name: "카고" }, { no: 37, name: "흘림낚시" },
        ],
      },
      { no: 8, name: "갯바위", children: [{ no: 38, name: "갯바위" }, { no: 39, name: "돌돔" }, { no: 40, name: "샤프트" }] },
      { no: 9, name: "원투", children: [{ no: 41, name: "바다" }, { no: 42, name: "민물" }] },
      { no: 10, name: "양어장" },
      { no: 66, name: "모바일로드" },
    ],
  },
  {
    no: 2,
    name: "민물",
    categories: [
      { no: 43, name: "배스" }, { no: 44, name: "계류" }, { no: 45, name: "송어" },
      { no: 46, name: "가물치" }, { no: 48, name: "민물낚시" }, { no: 67, name: "모바일로드" },
    ],
  },
  {
    no: 3,
    name: "릴",
    categories: [{ no: 49, name: "스피닝" }, { no: 50, name: "베이트" }],
  },
  {
    no: 4,
    name: "낚시용품",
    categories: [
      {
        no: 51,
        name: "바다루어",
        children: [
          { no: 53, name: "바다 하드베이트" }, { no: 54, name: "바다 소프트 베이트" }, { no: 55, name: "바다루어 기타" },
        ],
      },
      {
        no: 52,
        name: "민물루어",
        children: [
          { no: 56, name: "민물 하드베이트" }, { no: 57, name: "민물 소프트 베이트" }, { no: 58, name: "민물루어 기타" },
        ],
      },
      { no: 59, name: "메탈지그" }, { no: 60, name: "훅" }, { no: 61, name: "라인" },
      { no: 62, name: "의류" }, { no: 63, name: "가방 & 태클박스" }, { no: 64, name: "뜰채" },
      { no: 65, name: "기타소품" },
    ],
  },
];

export const mainNav: NavItem[] = [
  {
    label: "챔프코리아",
    href: "/about/greetings",
    children: [
      { label: "회사소개 (CEO인사말)", href: "/about/greetings" },
      { label: "회사 연혁", href: "/about/history" },
      { label: "오시는길", href: "/about/directions" },
    ],
  },
  { label: "제품소개", href: "/product", productGroups },
  {
    label: "커뮤니티",
    href: "/community",
    children: [
      { label: "스탭소개", href: "/community" },
      { label: "SOCIAL", href: "/community/social" },
    ],
  },
  { label: "취급점안내", href: "/store" },
  { label: "A/S 신청", href: "/as" },
  { label: "공지사항", href: "/notice" },
];
