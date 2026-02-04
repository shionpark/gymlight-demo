import { memo } from 'react';

import { RefundAcknowledgment, TerminationApplicationTerms } from '@/constants';

import * as Styled from '../contracts.styles';
import { LabeledContainer } from 'gymlight-design-system';

interface ITerminationApplicationContractProps {
  applicationData: {
    name: string;
    phone: string;

    productName?: string;
    paidAmount?: string;
    paymentMethod?: '현금' | '카드';
    startDate?: string;
    refundDate?: string;
    refundReason?: string;
  };

  deductionData?: {
    penaltyAmount?: string;
    usagePeriod?: string;
    usageAmount?: string;
    freePtAmount?: string;
    gift?: string;
    totalDeductionAmount?: string;
    refundAmount?: number;
  };

  refundData?: {
    method: '카드취소' | '계좌이체';
    provider: string;
    identifier: string;
    ownerName: string;
  };

  signatureImage: string;

  date: string;
}

const TerminationApplicationContract = ({
  applicationData,
  deductionData,

  refundData,
  signatureImage,

  date,
}: ITerminationApplicationContractProps) => {
  return (
    <Styled.Wrapper>
      <Styled.OneSideWrapper>
        <Styled.MainTitle>짐라이트 해지 신청서</Styled.MainTitle>
        <Styled.SubTitle>GYMLIGHT TERMINATION APPLICATION</Styled.SubTitle>
        <Styled.Section>
          <Styled.SectionTitle>해지 신청 정보</Styled.SectionTitle>
          <Styled.SectionRow>
            <LabeledContainer labelText="성명">{applicationData.name}</LabeledContainer>
            <LabeledContainer labelText="연락처">{applicationData.phone}</LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="상품이름">{applicationData.productName}</LabeledContainer>
            <LabeledContainer labelText="등록금액">{applicationData.paidAmount}</LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="가입일">{applicationData.startDate}</LabeledContainer>
            <LabeledContainer labelText="해지일">{applicationData.refundDate}</LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="사유" labelRatio={1} contentRatio={3}>
              {applicationData.refundReason}
            </LabeledContainer>
          </Styled.SectionRow>
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionTitle>공제 정보</Styled.SectionTitle>
          <Styled.SectionRow>
            <LabeledContainer labelText="사용기간">{deductionData?.usagePeriod}</LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="사은품">{deductionData?.gift}</LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="위약금 10%">
              {deductionData?.penaltyAmount}
            </LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="이용료">{deductionData?.usageAmount}</LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="FREE P.T.">{deductionData?.freePtAmount}</LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="총 공제 금액">
              {deductionData?.totalDeductionAmount}
            </LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="환급액">{deductionData?.refundAmount}</LabeledContainer>
          </Styled.SectionRow>
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionTitle>환불 정보</Styled.SectionTitle>
          <Styled.SectionRow>
            <LabeledContainer labelText="환불/지불 수단">{refundData?.method}</LabeledContainer>
            <LabeledContainer labelText="명의자 이름">{refundData?.ownerName}</LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="카드사/은행">{refundData?.provider}</LabeledContainer>
            <LabeledContainer labelText="카드번호/계좌번호">
              {refundData?.identifier}
            </LabeledContainer>
          </Styled.SectionRow>
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionTitle>서명</Styled.SectionTitle>
          <Styled.Explanation>{RefundAcknowledgment} </Styled.Explanation>
          <Styled.dateContainer>서명일: {date}</Styled.dateContainer>
          <Styled.SignaturesContainer>
            <Styled.SignatureWrapper>
              <Styled.SignatureHeader>회원 서명</Styled.SignatureHeader>
              <Styled.SignatureImage src={signatureImage} />
            </Styled.SignatureWrapper>
          </Styled.SignaturesContainer>
        </Styled.Section>
      </Styled.OneSideWrapper>
      <Styled.OneSideWrapper>
        <Styled.MainTitle>해지 약관</Styled.MainTitle>
        <Styled.SubTitle>TERMINATION TERMS</Styled.SubTitle>

        {TerminationApplicationTerms.toSorted((a, b) => a.id - b.id).map((section) => (
          <Styled.Section>
            <Styled.TermTitle>{section.title}</Styled.TermTitle>
            <Styled.InContractExplanation> {section.content}</Styled.InContractExplanation>
          </Styled.Section>
        ))}
      </Styled.OneSideWrapper>
    </Styled.Wrapper>
  );
};

export default memo(TerminationApplicationContract);
