import type { DurationUnitType, ProductCategoryType } from '@/types';

import type { ForwardRefExoticComponent, SVGProps } from 'react';

import {
  BarsArrowDownIcon as DescIcon,
  BarsArrowUpIcon as AscIcon,
} from '@heroicons/react/24/outline';

/** 숫자를 1,000 단위로 포맷팅하는 유틸 함수 */
export const formatPrice = (price: number) => new Intl.NumberFormat('ko-KR').format(price);

/** 테이블에서 날짜 형식의 데이터를 포맷팅하는 유틸 함수 */
export const formatDate = (date: Date | string, point: string, order: number) =>
  date.toString().split(point)[order];

/** 상품 categoryId를 입력받아 상품 이름을 반환하는 유틸 함수 */
export const formatCategoryId = (categoryId: number) => {
  const categoryMap: { [key: number]: ProductCategoryType } = {
    1: '패키지',
    2: '회원권',
    3: '운동복',
    4: '락커',
    5: 'PT',
  };
  return categoryMap[categoryId] || categoryId;
};

/** 30일 미만일 경우 '일', 30일 이상일 경우 '개월'로 환산하는 유틸 함수 */
export const formatDurationUnit = (duration: number) => {
  if (duration <= 0) {
    return { value: +duration, unit: '일' };
  } else if (duration < 30) {
    return { value: +duration, unit: '일' };
  } else {
    return { value: Number(+duration / 30), unit: '개월' };
  }
};

export const formatDuration = (
  duration: number,
): {
  formattedValue: number;
  overMonth: boolean;
  durationUnit: '개월' | '일';
} => {
  const formattedValue = duration >= 30 ? duration / 30 : duration;
  const overMonth = duration >= 30;
  return { formattedValue, overMonth, durationUnit: overMonth ? '개월' : '일' };
};

export const formatDurationFromUnit = (
  duration: number | undefined,
  unit: DurationUnitType,
): number => {
  if (!duration) return 0;
  return unit === '개월' ? duration * 30 : duration;
};

/**년 월 일을 입력받아 YYYY-MM-DD 포멧으로 반환 */
export const formatYYYYMMDD = (
  year?: number | string,
  month?: number | string,
  day?: number | string,
) => `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

/** YYYY-MM-DD 형식의 날짜 데이터를, 년 월 일 로 쪼갠후 0을 제거후반환 */
export const splitYYYYMMDD = (dateString: string) => dateString.split('-').map((num) => `${+num}`);

/**Sort값에 따른 아이콘을 반환하는 유틸함수 */
export const getSortIconStyle = <T extends string>(
  sortOptions: T[],
): Record<T, ForwardRefExoticComponent<SVGProps<SVGSVGElement>>> =>
  sortOptions.reduce(
    (acc, option) => {
      if (/오름차순/.test(option)) {
        acc[option] = AscIcon;
      } else if (/내림차순/.test(option)) {
        acc[option] = DescIcon;
      } else if (/최신순/.test(option)) {
        acc[option] = AscIcon;
      } else if (/오래된순/.test(option)) {
        acc[option] = DescIcon;
      } else if (/역순/.test(option)) {
        acc[option] = DescIcon;
      } else {
        acc[option] = AscIcon;
      }
      return acc;
    },
    {} as Record<T, ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>,
  );

/**
 * 문자열이 20자를 넘어가면 ...으로 대체하는 함수
 * @param text - 입력 문자열
 * @param maxLength - 최대 길이 (기본값: 20)
 * @returns - 처리된 문자열
 */
export const truncateText = (text: string, maxLength: number = 20): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

export const formatNumberToKoreanCurrency = (num: number | string) => {
  if (isNaN(+num)) return 'N/A';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
