import { useNavigate, useParams } from 'react-router';
import { URLS } from '@/constants';
import { useNoticeDetail } from '@/features/notice/hooks';

export const useNoticeNavigation = () => {
  const navigate = useNavigate();

  const { noticeId: noticeIdParam } = useParams();
  const noticeId = noticeIdParam ? +noticeIdParam : undefined;

  const goToNoticeDetail = (noticeId?: number) => {
    if (!noticeId) return;
    navigate(`${URLS.CLIENT.NOTICE}/${noticeId}`);
  };

  const goToNoticeListPage = () => navigate(URLS.CLIENT.NOTICE);

  const { data: noticeDetailData, isLoading } = useNoticeDetail(noticeId);
  const { data: previousNoticeData } = useNoticeDetail(
    typeof noticeId === 'number' ? noticeId - 1 : undefined,
  );
  const { data: followingNoticeData } = useNoticeDetail(
    typeof noticeId === 'number' ? noticeId + 1 : undefined,
  );

  return {
    noticeIdParam,
    isLoading,
    noticeDetailData,
    previousNoticeData,
    followingNoticeData,
    goToNoticeDetail,
    goToNoticeListPage,
  };
};

export interface NoticeNavigationProps extends ReturnType<typeof useNoticeNavigation> {}
