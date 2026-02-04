import { truncateText } from '@/utils';
import type { IRecentNoticeResponse } from '@/types';

import { NoticeTypes } from '@/features/notice/constant';
import { NoticeTypeFlag } from '@/features/notice/components';
import NoticeCardDetails from './NoticeCardDetails';

import * as Styled from './NoticeCard.styles';

interface INoticeCardProps {
  noticeData?: IRecentNoticeResponse;
  type?: NoticeTypes;
  content?: string;
  createdAt?: string;
  authorName?: string;
}

const NoticeCard = ({ noticeData, type, content, createdAt, authorName }: INoticeCardProps) => {
  const createdDate = createdAt ? createdAt.split('T').map((time) => time.toString())[0] : '';
  const truncatedText = truncateText(content || '', 60);

  return (
    <Styled.Wrapper>
      <Styled.NoticeHeader>
        <NoticeTypeFlag type={type || '알수없음'} />
        <div>
          <Styled.NoticeTitle>{noticeData?.title}</Styled.NoticeTitle>
          <NoticeCardDetails createdDate={createdDate} authorName={authorName} views={0} />
        </div>
      </Styled.NoticeHeader>
      <Styled.NoticeContent>{truncatedText}</Styled.NoticeContent>
    </Styled.Wrapper>
  );
};

export default NoticeCard;
