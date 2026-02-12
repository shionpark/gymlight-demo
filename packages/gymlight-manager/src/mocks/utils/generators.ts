import type { GenderType, MemberStatusType } from '@/types';

// 한국 성씨 (빈도순)
const KOREAN_LAST_NAMES = [
  '김', '이', '박', '최', '정', '강', '조', '윤', '장', '임',
  '한', '오', '서', '신', '권', '황', '안', '송', '류', '홍',
];

// 한국 이름 (남성)
const KOREAN_MALE_FIRST_NAMES = [
  '민준', '서준', '도윤', '예준', '시우', '하준', '주원', '지호', '지후', '준서',
  '준우', '현우', '도현', '지훈', '건우', '우진', '선우', '서진', '민재', '현준',
  '연우', '유준', '정우', '승현', '승우', '시윤', '준혁', '은우', '지환', '승민',
];

// 한국 이름 (여성)
const KOREAN_FEMALE_FIRST_NAMES = [
  '서윤', '서연', '지우', '서현', '하은', '하윤', '민서', '지유', '윤서', '채원',
  '수아', '지아', '지윤', '다은', '은서', '예은', '수빈', '소율', '예서', '소윤',
  '지민', '채은', '유나', '윤아', '예린', '아린', '서영', '유진', '민지', '수현',
];

// 서울 지역 주소
const SEOUL_ADDRESSES = [
  '서울특별시 마포구 서강로 123',
  '서울특별시 서대문구 연희로 456',
  '서울특별시 은평구 구산동 789',
  '서울특별시 마포구 백범로 234',
  '서울특별시 서대문구 이화여대길 567',
  '서울특별시 은평구 통일로 890',
  '서울특별시 마포구 와우산로 111',
  '서울특별시 서대문구 성산로 222',
  '서울특별시 은평구 증산로 333',
  '서울특별시 마포구 양화로 444',
];

/**
 * 랜덤 요소 선택
 */
const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * 범위 내 랜덤 정수
 */
const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 한국어 이름 생성
 */
export const generateKoreanName = (gender?: GenderType): string => {
  const lastName = getRandomElement(KOREAN_LAST_NAMES);
  const firstNames = gender === '여' ? KOREAN_FEMALE_FIRST_NAMES : KOREAN_MALE_FIRST_NAMES;
  const firstName = getRandomElement(firstNames);

  return lastName + firstName;
};

/**
 * 한국 전화번호 생성 (010-XXXX-XXXX)
 */
export const generateKoreanPhone = (): string => {
  const middle = String(getRandomInt(1000, 9999));
  const last = String(getRandomInt(1000, 9999));

  return `010-${middle}-${last}`;
};

/**
 * 생년월일 생성 (YYYY-MM-DD)
 */
export const generateBirthDate = (minAge: number = 20, maxAge: number = 50): string => {
  const now = new Date();
  const age = getRandomInt(minAge, maxAge);
  const birthYear = now.getFullYear() - age;
  const birthMonth = String(getRandomInt(1, 12)).padStart(2, '0');
  const birthDay = String(getRandomInt(1, 28)).padStart(2, '0');

  return `${birthYear}-${birthMonth}-${birthDay}`;
};

/**
 * 나이 계산
 */
export const calculateAge = (birthDate: string): number => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

/**
 * 한국 주소 생성
 */
export const generateKoreanAddress = (): string => {
  const baseAddress = getRandomElement(SEOUL_ADDRESSES);
  const detailNumber = getRandomInt(101, 2505);

  return `${baseAddress} ${detailNumber}호`;
};

/**
 * 날짜 생성 (오늘 기준 +/- days)
 */
export const generateDate = (daysOffset: number = 0): string => {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);

  return date.toISOString().split('T')[0];
};

/**
 * 과거 날짜 생성 (최근 N일 내)
 */
export const generatePastDate = (withinDays: number = 365): string => {
  const daysAgo = getRandomInt(0, withinDays);
  return generateDate(-daysAgo);
};

/**
 * 미래 날짜 생성 (N일 후까지)
 */
export const generateFutureDate = (withinDays: number = 365): string => {
  const daysLater = getRandomInt(1, withinDays);
  return generateDate(daysLater);
};

/**
 * 성별 생성
 */
export const generateGender = (): GenderType => {
  return Math.random() > 0.5 ? '남' : '여';
};

/**
 * 회원 상태 생성 (가중치 적용)
 */
export const generateMemberStatus = (): MemberStatusType => {
  const random = Math.random();

  if (random < 0.6) return '활성화';
  if (random < 0.75) return '만료예정';
  if (random < 0.9) return '만료';
  return '홀딩';
};

/**
 * 이메일 생성
 */
export const generateEmail = (name: string, domain: string = 'example.com'): string => {
  const randomNum = getRandomInt(1, 999);
  // 한글 이름을 romanized로 변환하는 대신 랜덤 문자열 사용
  const emailId = `user${randomNum}`;

  return `${emailId}@${domain}`;
};

/**
 * 회원 번호 생성 (YYYYMMDD + 지점코드 + 일련번호)
 */
export const generateMemberNo = (branchCode: string, sequence: number): string => {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0].replace(/-/g, '');
  const seqStr = String(sequence).padStart(4, '0');

  return `${dateStr}${branchCode}${seqStr}`;
};

/**
 * 금액 생성 (만원 단위)
 */
export const generatePrice = (min: number = 10, max: number = 100): number => {
  return getRandomInt(min, max) * 10000;
};

/**
 * 세션 횟수 생성
 */
export const generateSessions = (min: number = 10, max: number = 50): number => {
  return getRandomInt(min, max);
};

/**
 * 남은 일수 생성
 */
export const generateRemainingDays = (status: MemberStatusType): number => {
  switch (status) {
    case '활성화':
      return getRandomInt(30, 180);
    case '만료예정':
      return getRandomInt(1, 14);
    case '만료':
      return 0;
    case '홀딩':
      return getRandomInt(0, 90);
    default:
      return 0;
  }
};
