import { memo } from 'react';

import * as Styled from '../contracts.styles';

import { LabeledContainer } from 'gymlight-design-system';

import { RefundAcknowledgment, TransferApplicationTerm } from '@/constants';
import { GenderType } from '@/types';

interface ITransferApplicationContractProps {
  transferorInfo: {
    name: string;
    phone: string;
  };
  transfereeInfo: {
    name: string;
    gender: GenderType;
    birthDate: string;
    startDate: string;
    phone: string;
  };
  transferFee: number;
  contractDate: string;
  signatureImage?: string;
}

const TransferApplicationContract = ({
  transferorInfo,
  transfereeInfo,
  signatureImage,
  contractDate,
  transferFee,
}: ITransferApplicationContractProps) => (
  <Styled.Wrapper>
    <Styled.OneSideWrapper>
      <Styled.MainTitle>짐라이트 양도 신청서</Styled.MainTitle>
      <Styled.SubTitle>GYMLIGHT TRANSFER APPLICATION</Styled.SubTitle>

      <Styled.Section>
        <Styled.SectionTitle>양도인 정보 / Transferer Info</Styled.SectionTitle>
        <Styled.SectionRow>
          <LabeledContainer labelText="양도인">{transferorInfo.name}</LabeledContainer>
          <LabeledContainer labelText="전화번호">{transferorInfo.phone}</LabeledContainer>
        </Styled.SectionRow>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>양수인 정보 / Transferee Info</Styled.SectionTitle>
        <Styled.SectionRow>
          <LabeledContainer labelText="이름">{transfereeInfo.name}</LabeledContainer>
          <LabeledContainer labelText="전화번호">{transfereeInfo.phone}</LabeledContainer>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <LabeledContainer labelText="성별">{transfereeInfo.gender}</LabeledContainer>
          <LabeledContainer labelText="생년월일">{transfereeInfo.birthDate}</LabeledContainer>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <LabeledContainer labelText="시작일">{transfereeInfo.startDate}</LabeledContainer>
        </Styled.SectionRow>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>양도정보 / Transfer Info</Styled.SectionTitle>
        <Styled.SectionRow>
          <LabeledContainer labelText="양도수수료">{transferFee}</LabeledContainer>
        </Styled.SectionRow>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle> 서명 </Styled.SectionTitle>
        <Styled.Explanation>{RefundAcknowledgment} </Styled.Explanation>
        <Styled.dateContainer>서명일: {contractDate}</Styled.dateContainer>
        <Styled.SignaturesContainer>
          <Styled.SignatureWrapper>
            <Styled.SignatureHeader>양도인 서명</Styled.SignatureHeader>
            <Styled.SignatureImage src={signatureImage} />
          </Styled.SignatureWrapper>
        </Styled.SignaturesContainer>
      </Styled.Section>
    </Styled.OneSideWrapper>
    <Styled.OneSideWrapper>
      <Styled.MainTitle>양도 약관</Styled.MainTitle>
      <Styled.SubTitle>TRANSFER APPLICATION TERMS</Styled.SubTitle>
      {TransferApplicationTerm.toSorted((a, b) => a.id - b.id).map((section) => (
        <Styled.Section>
          <Styled.TermTitle>{section.title}</Styled.TermTitle>
          <Styled.InContractExplanation> {section.content}</Styled.InContractExplanation>
        </Styled.Section>
      ))}
    </Styled.OneSideWrapper>
  </Styled.Wrapper>
);

export default memo(TransferApplicationContract);
