// Static content for the secondary pages. In production this comes from a CMS.

export const history = [
  { year: "2024", items: ["선상 전문 로드 라인업 전면 리뉴얼", "B2B 몰 오픈 및 전국 취급점 200개 돌파"] },
  { year: "2021", items: ["프로헌터 · 옥토푸스헌터 시리즈 출시", "초경량 카본 공법 자체 개발"] },
  { year: "2018", items: ["네이버 스마트스토어 공식몰 오픈", "글로벌 수출 파트너십 체결"] },
  { year: "2012", items: ["월하조어 민물 로드 시리즈 출시", "연구개발(R&D) 전담 조직 신설"] },
  { year: "2005", items: ["자체 카본 블랭크 생산 라인 구축", "브랜드 CHAMP KOREA 런칭"] },
  { year: "1986", items: ["챔프코리아 창립 — 낚시대 제조 시작"] },
];

export type Notice = {
  id: number;
  title: string;
  date: string;
  category: string;
  body: string[];
};

export const notices: Notice[] = [
  {
    id: 1,
    title: "2026 챔프코리아 신제품 카탈로그 출시 안내",
    date: "2026.06.10",
    category: "공지",
    body: [
      "안녕하세요, 챔프코리아입니다.",
      "2026년 신제품 카탈로그가 출시되었습니다. 선상·루어·민물 전 라인업의 신규 모델과 상세 스펙을 E-카다로그에서 확인하실 수 있습니다.",
      "많은 관심 부탁드립니다. 감사합니다.",
    ],
  },
  {
    id: 2,
    title: "여름 시즌 A/S 접수 및 처리 일정 공지",
    date: "2026.06.02",
    category: "A/S",
    body: [
      "성수기를 맞아 A/S 접수량이 증가하여 처리 기간이 평소보다 2~3일 더 소요될 수 있습니다.",
      "온라인 A/S 신청 후 순차적으로 처리되며, 진행 상황은 고객센터(032-868-1004)로 문의 주시기 바랍니다.",
    ],
  },
  {
    id: 3,
    title: "B2B Mall 시스템 업데이트 안내",
    date: "2026.05.21",
    category: "공지",
    body: ["B2B Mall 주문/정산 시스템이 개선되었습니다. 보다 빠르고 편리한 도매 주문을 이용해 보세요."],
  },
  {
    id: 4,
    title: "전국 취급점 신규 입점 안내",
    date: "2026.05.09",
    category: "취급점",
    body: ["전국 신규 취급점이 추가되었습니다. 가까운 매장은 취급점 안내 페이지에서 확인하실 수 있습니다."],
  },
];

export type Staff = {
  name: string;
  role: string;
  field: string;
  hue: number;
};

export const staff: Staff[] = [
  { name: "김상우", role: "프로 스탭", field: "선상 지깅 · 갈치", hue: 205 },
  { name: "이준혁", role: "프로 스탭", field: "바다 루어 · 농어", hue: 220 },
  { name: "박도윤", role: "필드 테스터", field: "갑오징어 · 에깅", hue: 230 },
  { name: "최민재", role: "필드 테스터", field: "민물 · 붕어", hue: 150 },
  { name: "정해성", role: "프로 스탭", field: "쭈꾸미 · 문어", hue: 196 },
  { name: "한지훈", role: "앰배서더", field: "빅게임 · 파핑", hue: 14 },
];

export type Dealer = {
  region: string;
  name: string;
  address: string;
  phone: string;
};

export const dealers: Dealer[] = [
  { region: "서울", name: "강남 낚시마트", address: "서울 강남구 테헤란로 123", phone: "02-1234-5678" },
  { region: "서울", name: "노원 피싱센터", address: "서울 노원구 동일로 456", phone: "02-2345-6789" },
  { region: "인천", name: "챔프코리아 본사 직영점", address: "인천 남동구 염전로411번길 38", phone: "032-868-5427" },
  { region: "경기", name: "수원 낚시백화점", address: "경기 수원시 팔달구 권광로 789", phone: "031-3456-7890" },
  { region: "경기", name: "고양 피싱프로", address: "경기 고양시 일산동구 중앙로 321", phone: "031-4567-8901" },
  { region: "부산", name: "해운대 바다낚시", address: "부산 해운대구 해운대로 654", phone: "051-5678-9012" },
  { region: "부산", name: "서면 낚시월드", address: "부산 부산진구 중앙대로 987", phone: "051-6789-0123" },
  { region: "강원", name: "속초 동해낚시", address: "강원 속초시 중앙로 159", phone: "033-7890-1234" },
  { region: "충청", name: "대전 한밭낚시", address: "대전 서구 둔산로 753", phone: "042-8901-2345" },
  { region: "전라", name: "여수 남해피싱", address: "전남 여수시 여서로 852", phone: "061-9012-3456" },
  { region: "경상", name: "포항 영일만낚시", address: "경북 포항시 북구 삼흥로 456", phone: "054-0123-4567" },
  { region: "제주", name: "제주 섬낚시", address: "제주 제주시 연동 그랜드로 357", phone: "064-1234-5678" },
];

export const downloads = [
  { name: "2026 통합 카탈로그 (PDF)", size: "24.6 MB", type: "카탈로그" },
  { name: "선상 로드 라인업 사양서", size: "5.2 MB", type: "사양서" },
  { name: "루어 로드 라인업 사양서", size: "4.8 MB", type: "사양서" },
  { name: "제품 보증 및 A/S 안내문", size: "1.1 MB", type: "안내" },
  { name: "브랜드 로고 / BI 가이드", size: "8.3 MB", type: "브랜드" },
];
