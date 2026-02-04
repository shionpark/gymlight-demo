import { Link } from 'react-router-dom';

import { URLS } from '@/constants';

import { useNoticeDetail } from '@/features/notice/hooks';
import { useNoticeDashboard } from '@/features/dashboard/hooks';

import NoticeCard from './NoticeCard';
import { DashboardContainer } from '../../DashboardContainer';

const NoticeDashboard = () => {
  const { data: noticeData } = useNoticeDashboard();
  const { data: noticeDetailData } = useNoticeDetail(noticeData?.noticeId || 0);

  const url = `${URLS.CLIENT.NOTICE}/${noticeData?.noticeId}`;

  return (
    <DashboardContainer title="최근 공지사항" url={URLS.CLIENT.NOTICE}>
      <Link to={url}>
        <NoticeCard
          noticeData={noticeData}
          type={noticeDetailData?.type}
          content={noticeDetailData?.content}
          createdAt={noticeDetailData?.createdAt}
          authorName={noticeDetailData?.authorName}
        />
      </Link>
    </DashboardContainer>
  );
};

export default NoticeDashboard;
