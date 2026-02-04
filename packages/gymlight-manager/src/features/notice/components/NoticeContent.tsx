import { DualSideBar, SquareButton } from 'gymlight-design-system';

import { formatDate } from '@/utils';
import { flexColumnStyle } from '@/styles';

import { NoticeTypeFlag } from '@/features/notice/components';
import type { NoticeNavigationProps } from '@/features/notice/hooks';

import * as Styled from './NoticeContent.styles';

const NoticeContent = ({
  noticeDetailData,
  previousNoticeData,
  followingNoticeData,
  goToNoticeDetail,
  goToNoticeListPage,
}: NoticeNavigationProps) => {
  const {
    title,
    content,
    type,
    authorName,
    createdAt,
    updatedAt,
    startDate,
    endDate,
    hasAttachment,
    attachments,
  } = noticeDetailData || {};

  const isEventType = type === '이벤트';

  const formattedCreatedAt = formatDate(createdAt + '', 'T', 0);
  const formattedUpdatedAt = formatDate(updatedAt + '', 'T', 0);
  const formattedStartDate = formatDate(startDate + '', 'T', 0);
  const formattedEndDate = formatDate(endDate + '', 'T', 0);
  const formattedPrevCreatedAt = previousNoticeData
    ? formatDate(previousNoticeData.createdAt + '', 'T', 0)
    : '';
  const formattedFollowCreatedAt = followingNoticeData
    ? formatDate(followingNoticeData.createdAt + '', 'T', 0)
    : '';

  const InfoContainer = ({ label, text }: { label: string; text: string }) => (
    <Styled.DateInfo>
      <Styled.Label>{`${label} : `}</Styled.Label>
      <span>{text}</span>
    </Styled.DateInfo>
  );

  return (
    <>
      <Styled.ContentWrapper>
        <Styled.InfoWrapper>
          <div>
            <NoticeTypeFlag type={type || '알수없음'} />
          </div>
          <Styled.Title>{title}</Styled.Title>
          <DualSideBar
            leftSideChildren={[
              <Styled.DateInfoWrapper>
                <div>{authorName === 'N/A' ? '관리자' : authorName}</div>
                <Styled.Line />
                <InfoContainer label="작성일" text={formattedCreatedAt} />
                <Styled.Line />
                <InfoContainer label="수정일" text={formattedUpdatedAt} />
                {isEventType && (
                  <>
                    <Styled.Line />
                    <InfoContainer
                      label="이벤트 기간"
                      text={`${formattedStartDate} ~ ${formattedEndDate}`}
                    />
                  </>
                )}
              </Styled.DateInfoWrapper>,
            ]}
            rightSideChildren={[
              <Styled.HitsInfo>
                <Styled.EyesIcon />
                <Styled.Label>조회수</Styled.Label>
                <span>{0}</span>
              </Styled.HitsInfo>,
            ]}
          />
        </Styled.InfoWrapper>

        {hasAttachment ? 'HAS' : 'NOPE'}

        {attachments?.map((a) => (
          <div key={a.attachmentId} css={flexColumnStyle}>
            <span>{a.noticeId}</span>
            <span>{a.fileType}</span>
            <span>{a.fileName}</span>
            <span>{a.url}</span>
            <a href={a.url} download={a.fileName}>
              {a.fileName}
            </a>
          </div>
        ))}

        <Styled.Content>{content}</Styled.Content>

        <Styled.OtherPost>
          <DualSideBar
            leftSideChildren={[
              <Styled.LeftSection>
                <Styled.TopArrowIcon />
                <Styled.Label>이전글</Styled.Label>
                <Styled.OtherPostTitle
                  onClick={() => goToNoticeDetail(previousNoticeData?.noticeId)}
                >
                  {previousNoticeData?.title}
                </Styled.OtherPostTitle>
              </Styled.LeftSection>,
            ]}
            rightSideChildren={[<span>{formattedPrevCreatedAt}</span>]}
          />
        </Styled.OtherPost>

        <Styled.OtherPost>
          <DualSideBar
            leftSideChildren={[
              <Styled.LeftSection>
                <Styled.DownArrowIcon />
                <Styled.Label>다음글</Styled.Label>
                <Styled.OtherPostTitle
                  onClick={() => goToNoticeDetail(followingNoticeData?.noticeId)}
                >
                  {followingNoticeData?.title}
                </Styled.OtherPostTitle>
              </Styled.LeftSection>,
            ]}
            rightSideChildren={[<span>{formattedFollowCreatedAt}</span>]}
          />
        </Styled.OtherPost>
      </Styled.ContentWrapper>

      <Styled.ListButtonWrapper>
        <SquareButton variant="primary" onClick={goToNoticeListPage}>
          목록으로
        </SquareButton>
      </Styled.ListButtonWrapper>
    </>
  );
};

export default NoticeContent;
