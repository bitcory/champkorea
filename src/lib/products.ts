// Real CHAMP KOREA (jaywalking smartstore) product lineup.
// `catNo` is the leaf category number (matches the navigation taxonomy),
// `groupNo` is the top-level group (1 바다 / 2 민물 / 3 릴 / 4 낚시용품).

export type Price = { original: number; sale: number; discount: number };

export type Product = {
  id: string;
  name: string;
  series: string;
  groupNo: number;
  group: string;
  catNo: number;
  tag?: "NEW" | "BEST";
  hue: number;
  /** real thumbnail (URL or local path); falls back to a gradient when absent */
  image?: string;
  /** link to the smartstore product page */
  href?: string;
  price?: Price;
  freeShipping?: boolean;
  todayShip?: boolean;
  rating?: number;
  reviews?: number;
  summary?: string;
  specs?: { label: string; value: string }[];
};

const GROUPS: Record<number, string> = {
  1: "바다",
  2: "민물",
  3: "릴",
  4: "낚시용품",
};

const STORE = "https://smartstore.naver.com/jaywalking";

const defaultSpecs = [
  { label: "소재", value: "고탄성 카본 (High Modulus Carbon)" },
  { label: "가이드", value: "SiC 가이드" },
  { label: "릴시트", value: "경량 카본 릴시트" },
  { label: "원산지", value: "대한민국" },
];

const raw: Omit<Product, "group">[] = [
  {
    id: "excalibur-hanchi-88g",
    image: "/products/1.png",
    name: "챔프코리아 엑스컬리버 한치 풀치 낚시대 88g",
    series: "엑스컬리버 · 한치 풀치",
    groupNo: 1,
    catNo: 19,
    tag: "BEST",
    hue: 210,
    href: STORE,
    price: { original: 118000, sale: 98120, discount: 16 },
    freeShipping: true,
    rating: 4.85,
    reviews: 26,
    summary: "초경량 88g 설계로 장시간 캐스팅에도 부담 없는 한치·풀치 전용 로드.",
  },
  {
    id: "wolhajoeo-daemul-30",
    image: "/products/2.png",
    name: "챔프코리아 월하조어 민물낚시대 붕어 잉어 장어 로드 대물대 30",
    series: "민물낚시대 · 월하조어",
    groupNo: 2,
    catNo: 48,
    hue: 150,
    href: STORE,
    price: { original: 61000, sale: 60000, discount: 1 },
    freeShipping: true,
    summary: "붕어·잉어·장어까지 대응하는 강인한 대물 전용 민물 로드.",
  },
  {
    id: "seaguardian-walking",
    image: "/products/3.png",
    name: "챔프코리아 씨가디언 워킹 풀치 낚시대",
    series: "씨가디언 · 워킹 풀치",
    groupNo: 1,
    catNo: 20,
    tag: "NEW",
    hue: 205,
    href: STORE,
    price: { original: 148000, sale: 124800, discount: 15 },
    freeShipping: true,
    summary: "워킹 낚시에 최적화된 밸런스의 풀치(갈치) 루어 로드.",
  },
  {
    id: "jjukuhunter-165mhl",
    image: "/products/4.png",
    name: "챔프코리아 쭈꾸헌터 쭈꾸미 낚시대 선상 로드 초경량",
    series: "초경량 쭈꾸미 · 쭈꾸헌터 165MHL",
    groupNo: 1,
    catNo: 18,
    hue: 196,
    href: STORE,
    price: { original: 138000, sale: 116300, discount: 15 },
    freeShipping: true,
    summary: "초경량 설계로 입질 감도를 극대화한 선상 쭈꾸미 전용 로드.",
  },
  {
    id: "wolhajoeo-gyeongryang-16",
    image: "/products/5.png",
    name: "챔프코리아 월하조어 민물낚시대 붕어 잉어 장어 로드 경량대 16",
    series: "민물낚시대 · 월하조어",
    groupNo: 2,
    catNo: 48,
    hue: 160,
    href: STORE,
    price: { original: 38000, sale: 37000, discount: 2 },
    freeShipping: true,
    rating: 5,
    reviews: 16,
    summary: "가볍고 경쾌한 운용감의 경량 민물 로드.",
  },
  {
    id: "octopushunter-gapojingeo",
    image: "/products/6.png",
    name: "챔프코리아 옥토푸스헌터 선상 갑오징어 낚시대",
    series: "선상 갑오징어 · 티타늄 초릿대 베이트",
    groupNo: 1,
    catNo: 16,
    tag: "BEST",
    hue: 230,
    href: STORE,
    price: { original: 158000, sale: 133300, discount: 15 },
    freeShipping: true,
    summary: "175cm 초경량 설계 · 수직 에깅에 최적화된 선상 갑오징어 전용 로드.",
  },
  {
    id: "zest-suchojeolgeogi-11m",
    image: "/products/7.png",
    name: "챔프코리아 제스트 수초제거기 풀카본 고탄성 11m",
    series: "제스트 · 풀카본 수초제거기",
    groupNo: 2,
    catNo: 46,
    hue: 120,
    href: STORE,
    price: { original: 258000, sale: 218300, discount: 15 },
    freeShipping: true,
    todayShip: true,
    summary: "풀카본 고탄성 11m 블랭크의 강력한 수초 제거 전용대.",
  },
  {
    id: "vesta-muneo",
    image: "/products/8.png",
    name: "챔프코리아 베스타 선상 문어 낚시대 대물 전용 경질대",
    series: "베스타 · 선상 문어 경질대",
    groupNo: 1,
    catNo: 17,
    hue: 220,
    href: STORE,
    price: { original: 128000, sale: 107800, discount: 15 },
    freeShipping: true,
    summary: "대물 문어를 제압하는 강한 허리힘의 선상 문어 전용 경질대.",
  },
  {
    id: "galchi-zoom-480-660",
    image: "/products/9.png",
    name: "챔프코리아 고급형 갈치낚시대 줌480-660 선상낚시대",
    series: "고급형 · 줌 480-660 선상",
    groupNo: 1,
    catNo: 34,
    hue: 198,
    href: STORE,
    price: { original: 990000, sale: 840500, discount: 15 },
    freeShipping: true,
    summary: "줌 480-660 가변 설계 · 휨새 좋은 프리미엄 선상 갈치 로드.",
  },
  {
    id: "prohunter-gapojingeo-egi",
    image: "/products/10.png",
    name: "챔프코리아 프로헌터 갑오징어 쭈꾸미 낚시대 선상 에깅 로드",
    series: "초경량 · 프로헌터 선상 에깅",
    groupNo: 1,
    catNo: 16,
    tag: "NEW",
    hue: 188,
    href: STORE,
    price: { original: 148000, sale: 124800, discount: 15 },
    freeShipping: true,
    summary: "초경량 프로헌터 시리즈 · 갑오징어·쭈꾸미 겸용 선상 에깅 로드.",
  },
];

export const products: Product[] = raw.map((p) => ({
  ...p,
  group: GROUPS[p.groupNo] ?? "",
  specs: p.specs ?? defaultSpecs,
}));

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
