import { CloseButton } from '@/components';
import { URLS } from '@/constants';

import { MemberStatusFlag, useMemberModals } from '@/features/member';

import type { MemberWithCoords } from '../../hooks';

import * as Styled from './Content.styles';

interface ContentProps {
  member?: MemberWithCoords;
  closeContent: (memberId: number) => void;
}

const Content = ({ member, closeContent }: ContentProps) => {
  const { memberId, name, address, phone, status, startDate, endDate } = member?.member || {};

  const { openMemberDetailsModal } = useMemberModals();

  return (
    <Styled.Wrapper>
      <Styled.Name>
        <span onClick={memberId ? () => openMemberDetailsModal({ memberId }) : undefined}>
          {name}
        </span>
        <MemberStatusFlag status={status || '활성화'} />
        <CloseButton
          className="close-button"
          onClick={memberId ? () => closeContent(memberId) : undefined}
        />
      </Styled.Name>
      <Styled.Body>
        <img src={URLS.CLIENT.DEFAULT_PROFILE} />
        <Styled.Description>
          <span>{address}</span>
          <span>{phone}</span>
          <span>
            {startDate} ~ {endDate}
          </span>
        </Styled.Description>
      </Styled.Body>
    </Styled.Wrapper>
  );
};

export default Content;
