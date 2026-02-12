import { http, delay } from 'msw';

import { URLS } from '@/constants';
import type { UserRoleType } from '@/types';

import { wrapResponse, unauthorizedResponse } from '../utils/response.utils';
import { isValidDemoAccount, mockAccessToken, setCurrentUserByRole, resetCurrentUser } from '../data';

// MSW v2에서는 전체 URL 매칭이 필요하므로 와일드카드 사용
const API_BASE = `*${URLS.API.PREFIX}`;

export const authHandlers = [
  /**
   * POST /api/auth/login - 로그인
   * role 파라미터가 있으면 해당 역할의 사용자로 로그인
   */
  http.post(`${API_BASE}${URLS.API.AUTH.LOGIN}`, async ({ request }) => {
    await delay(300);

    const body = (await request.json()) as { email: string; password: string; role?: UserRoleType };
    const { email, role } = body;

    // @gymlight.com 도메인 이메일이면 로그인 허용
    if (isValidDemoAccount(email)) {
      // 역할이 지정되면 해당 역할의 사용자로 설정
      if (role) {
        setCurrentUserByRole(role);
      }
      return wrapResponse({ accessToken: mockAccessToken });
    }

    return unauthorizedResponse('이메일 또는 비밀번호가 올바르지 않습니다.');
  }),

  /**
   * POST /api/auth/logout - 로그아웃
   */
  http.post(`${API_BASE}${URLS.API.AUTH.LOGOUT}`, async () => {
    await delay(200);
    resetCurrentUser();
    return wrapResponse({ message: '로그아웃 되었습니다.' });
  }),

  /**
   * GET /api/auth/refresh - 토큰 갱신
   */
  http.get(`${API_BASE}${URLS.API.AUTH.REFRESH}`, async () => {
    await delay(200);
    return wrapResponse({ accessToken: mockAccessToken });
  }),

  /**
   * POST /api/auth/join - 회원가입
   */
  http.post(`${API_BASE}${URLS.API.AUTH.JOIN}`, async ({ request }) => {
    await delay(500);

    const body = (await request.json()) as { email: string };
    const { email } = body;

    // 이미 존재하는 이메일 체크 (데모에서는 항상 성공)
    if (email === 'existing@gymlight.com') {
      return unauthorizedResponse('이미 존재하는 이메일입니다.');
    }

    return wrapResponse({
      message: '회원가입이 완료되었습니다. 관리자 승인 후 로그인이 가능합니다.',
    });
  }),
];
