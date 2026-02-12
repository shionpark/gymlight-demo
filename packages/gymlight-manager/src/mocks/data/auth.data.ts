/**
 * Mock 인증 데이터
 */

// JWT 형식의 가짜 액세스 토큰
export const mockAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZW1haWwiOiJhZG1pbkBneW1saWdodC5jb20iLCJyb2xlIjoi6rSA66as7J6QIiwiaWF0IjoxNzA0MDY3MjAwLCJleHAiOjE3MDQxNTM2MDB9.mock-signature';

// 데모용 계정 목록
export const demoAccounts = [
  { email: 'admin@gymlight.com', password: 'demo1234', role: '관리자' },
  { email: 'manager@gymlight.com', password: 'demo1234', role: '매니저' },
  { email: 'trainer@gymlight.com', password: 'demo1234', role: '트레이너' },
  { email: 'fc@gymlight.com', password: 'demo1234', role: 'FC' },
] as const;

/**
 * 유효한 데모 계정인지 확인
 */
export const isValidDemoAccount = (email: string): boolean => {
  return email.endsWith('@gymlight.com') || demoAccounts.some((account) => account.email === email);
};
