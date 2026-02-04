import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { ADMIN_PAGES, COMMON_PAGES, TRAINER_PAGES, URLS } from '@/constants';
import { currentPageState } from '@/states';

const urlToPageName = {
  // 대시보드
  [URLS.CLIENT.DASHBOARD]: COMMON_PAGES.DASHBOARD,

  // 인증/인가
  [URLS.CLIENT.JOIN]: COMMON_PAGES.JOIN,
  [URLS.CLIENT.LOGIN]: COMMON_PAGES.LOGIN,

  // 마이 페이지
  [URLS.CLIENT.MY_PAGE]: COMMON_PAGES.MY_PAGE,

  // 공통 페이지
  [URLS.CLIENT.NOTICE]: COMMON_PAGES.NOTICE,
  [URLS.CLIENT.MEMBER]: COMMON_PAGES.MEMBER,
  [URLS.CLIENT.PRODUCT]: COMMON_PAGES.PRODUCT,
  [URLS.CLIENT.LOCKER]: COMMON_PAGES.LOCKER,
  [URLS.CLIENT.ATTENDANCE]: COMMON_PAGES.ATTENDANCE,

  // 관리자 페이지
  [URLS.CLIENT.STAFF]: ADMIN_PAGES.STAFF,
  [URLS.CLIENT.STATISTICS]: ADMIN_PAGES.STATISTICS,
  [URLS.CLIENT.ACCOUNTING]: ADMIN_PAGES.ACCOUNTING,
  [URLS.CLIENT.BRANCH]: ADMIN_PAGES.BRANCH,
  [URLS.CLIENT.TEAM]: ADMIN_PAGES.TEAM,

  // 사용자 - 트레이너 페이지
  [URLS.CLIENT.MY_WORK]: TRAINER_PAGES.MY_WORK,
};

export const useCurrentPage = () => {
  const location = useLocation();
  const setCurrentPage = useSetRecoilState(currentPageState);

  useEffect(() => {
    const pageName =
      urlToPageName[location.pathname as keyof typeof urlToPageName] || '알 수 없는 페이지';

    setCurrentPage(pageName);
  }, [location.pathname, setCurrentPage]);
};
