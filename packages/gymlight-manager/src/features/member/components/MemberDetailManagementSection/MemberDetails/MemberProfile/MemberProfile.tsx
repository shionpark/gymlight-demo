import { memo } from 'react';

import { LabeledContainer, StatusButton } from 'gymlight-design-system';
import * as Styled from './MemberProfile.styles';
import type {
  GenderType,
  JoinReasonType,
  MemberStatusType,
  ProductCategoryType,
  VisitPathType,
} from '@/types';

import { MemberStatusFlag } from '../../../MemberStatusFlag';

export interface IMemberProfileProps {
  imageData?: string;
  name?: string;
  gender?: GenderType;

  birthDate?: string;

  startDateYears?: string;
  startDateMonths?: string;
  startDateDays?: string;

  phone?: string; // 연락처
  address?: string; // 주소
  visitPath?: VisitPathType;
  visitPathOther?: string;
  joinReason?: JoinReasonType;
  joinReasonOther?: string;

  trainerId?: number;
  trainerName?: string;
  trainerPhone?: string;

  statusFlags?: (MemberStatusType | ProductCategoryType)[];
}

const MemberProfile = ({
  imageData,
  name,
  gender,
  address,
  birthDate,
  phone,
  statusFlags,
  trainerName,
  trainerPhone,
}: IMemberProfileProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.MemberName>{name} 님</Styled.MemberName>
        {statusFlags?.map((status) => <MemberStatusFlag status={status} />)}
      </Styled.Header>
      <Styled.ProfileWrapper>
        <Styled.ImageContainer>
          <img src={imageData} />
        </Styled.ImageContainer>
        <Styled.InfoContainer>
          <LabeledContainer bold labelText="성별" labelRatio={1} contentRatio={3}>
            {gender}
          </LabeledContainer>
          <LabeledContainer bold labelText="생년월일" labelRatio={1} contentRatio={3}>
            {birthDate}
          </LabeledContainer>
          <LabeledContainer bold labelText="연락처" labelRatio={1} contentRatio={3}>
            {phone}
          </LabeledContainer>
          <LabeledContainer bold labelText="주소" labelRatio={1} contentRatio={3}>
            {address}
          </LabeledContainer>
          <LabeledContainer bold labelText="담당자 정보" labelRatio={1} contentRatio={3}>
            <div>
              {trainerName ? trainerName : '없음'} / {trainerPhone ? trainerPhone : '정보 없음'}
            </div>
          </LabeledContainer>
        </Styled.InfoContainer>
        <Styled.SignificantContainer></Styled.SignificantContainer>
      </Styled.ProfileWrapper>
    </Styled.Wrapper>
  );
};

export default memo(MemberProfile);
