import { HttpResponse } from 'msw';

/**
 * Axios 인터셉터가 response.data.data를 추출하므로
 * MSW 응답도 동일한 구조로 래핑
 */
export const wrapResponse = <T>(data: T) => {
  return HttpResponse.json({ data });
};

/**
 * 에러 응답 래퍼
 */
export const errorResponse = (message: string, status: number = 400) => {
  return HttpResponse.json(
    { message, data: null },
    { status },
  );
};

/**
 * 401 Unauthorized 응답
 */
export const unauthorizedResponse = (message: string = '인증이 필요합니다.') => {
  return errorResponse(message, 401);
};

/**
 * 404 Not Found 응답
 */
export const notFoundResponse = (message: string = '리소스를 찾을 수 없습니다.') => {
  return errorResponse(message, 404);
};
