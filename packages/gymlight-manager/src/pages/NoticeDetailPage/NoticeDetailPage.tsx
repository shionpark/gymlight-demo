import { useOutletContext } from 'react-router';

import { AuthLoading } from '@/features/auth';
import { NoticeContent } from '@/features/notice/components';
import type { NoticeNavigationProps } from '@/features/notice/hooks';

const NoticeDetailPage = () => {
  const navigationProps: NoticeNavigationProps = useOutletContext();

  if (navigationProps.isLoading) {
    return <AuthLoading />;
  }

  return <NoticeContent {...navigationProps} />;
};

export default NoticeDetailPage;
