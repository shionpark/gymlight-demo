import { SquareButton } from 'gymlight-design-system';

import type { ICheckedMemberResponse, ProductCategoryType } from '@/types';

import { ProductStatusFlag } from '@/features/product';
import { MemberStatusFlag } from '@/features/member';

import * as Styled from './CheckedInMemberDetail.styles';

interface ICheckedInMemberDetailProps {
  checkedInMember: ICheckedMemberResponse;
  openMemberDetailsModal: ({ memberId }: { memberId: number }) => void;
}

export const CheckedInMemberDetail = ({
  checkedInMember,
  openMemberDetailsModal,
}: ICheckedInMemberDetailProps) => {
  const { memberId, name, status, remainingDays, remainingSessions, time, productTypes } =
    checkedInMember;

  const [originalDate, formattedTime] = time.split(' ');

  const isCountable = (types: string[]) => {
    return types.find((type) => type === 'PT') ? true : false;
  };

  const isCountableState = isCountable(productTypes);

  return (
    <>
      <Styled.Wrapper>
        <Styled.MemberInfo>
          <span>{name}</span>
          <MemberStatusFlag status={status} />
          <SquareButton
            className="more-button"
            size="xsmall"
            variant="outline"
            onClick={() => openMemberDetailsModal({ memberId })}
          >
            상세보기
          </SquareButton>
        </Styled.MemberInfo>
        <Styled.Body>
          <Styled.ProfileImg>
            <img src={'/images/profile.png'} />
            <div className="timeline">
              <span>{originalDate}</span>
              <span>{formattedTime}</span>
            </div>
          </Styled.ProfileImg>
          <Styled.Description>
            <Styled.ProductButtonsWrapper>
              {productTypes.map((productType: string, index: number) => (
                <ProductStatusFlag key={index} status={productType as ProductCategoryType} />
              ))}
            </Styled.ProductButtonsWrapper>
            <span>남은 기간: {remainingDays}일</span>
            <span>남은 횟수: {isCountableState ? `${remainingSessions}회` : '-'}</span>
          </Styled.Description>
        </Styled.Body>
      </Styled.Wrapper>
    </>
  );
};

export default CheckedInMemberDetail;
