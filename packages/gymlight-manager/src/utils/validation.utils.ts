/**
 * 유틸리티 함수: 객체의 값 중 하나라도 비어있으면 true를 반환
 * @param obj - 검사할 객체
 * @returns boolean - 비어있는 값이 있으면 true, 없으면 false
 */
export const hasEmptyFields = (obj: Record<string, any>): boolean => {
  return Object.values(obj).some((value) => value === '' || value === null || value === undefined);
};
