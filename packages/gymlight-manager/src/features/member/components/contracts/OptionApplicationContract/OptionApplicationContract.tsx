import { memo } from 'react';

import { LabeledContainer } from 'gymlight-design-system';

import { AgreementAcknowledgment, OptionApplicationTerm } from '@/constants';
import * as Styled from '../contracts.styles';

interface IOptionApplicationContractProps {
  name?: string;
  phone?: string;

  signatureImage?: string;
  contractDate?: string;

  period?: string | number;
  productName?: string;

  totalPrice?: number;
  discountAmount?: number;
  discountReason?: string;
  totalAmount?: number;
  receivableAmount?: number;
  clothesFee?: number;
  lockerFee?: number;

  paymentMethod?: string;
  cashAmount?: number;
  cardAmount?: number;
  cardCompany?: string;
  cardApprovalNo?: string;
  bankTransferAmount?: number;
  accountNumber?: string;
  accountOwnerName?: string;
  paidAmount?: number;
}

const OptionApplicationContract = ({
  name,
  phone,
  clothesFee,
  lockerFee,

  receivableAmount,
  period,

  paidAmount,
  cardAmount,
  cashAmount,

  signatureImage,
  productName,
  totalPrice,
  totalAmount,
  discountAmount,
  discountReason,
  paymentMethod,
  contractDate,
  cardCompany,
  cardApprovalNo,
  bankTransferAmount,
  accountNumber,

  accountOwnerName,
}: IOptionApplicationContractProps) => {
  return (
    <Styled.Wrapper>
      <Styled.OneSideWrapper>
        <Styled.MainTitle>짐라이트 옵션 신청서</Styled.MainTitle>
        <Styled.SubTitle>OPTION APPLICATION</Styled.SubTitle>
        <Styled.Section>
          <Styled.SectionTitle>고객 정보</Styled.SectionTitle>
          <Styled.SectionRow>
            <LabeledContainer bold labelText="성명">
              {name}
            </LabeledContainer>
            <LabeledContainer bold labelText="전화번호">
              {phone}
            </LabeledContainer>
          </Styled.SectionRow>
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionTitle>결제 정보</Styled.SectionTitle>
          <Styled.SectionRow>
            <LabeledContainer bold labelText="기간" labelRatio={0.97} contentRatio={3}>
              {period}
            </LabeledContainer>
          </Styled.SectionRow>

          <Styled.SectionRow>
            <LabeledContainer labelText="상품" bold>
              {productName}
            </LabeledContainer>
          </Styled.SectionRow>
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionTitle>회비 부가세 포함 / Membership Fee</Styled.SectionTitle>
          <Styled.FeeWrapper>
            {discountAmount && discountReason ? (
              <Styled.SectionRow>
                <LabeledContainer labelText="할인 사유" bold>
                  {discountReason}
                </LabeledContainer>
              </Styled.SectionRow>
            ) : (
              ''
            )}
            <Styled.SectionRow>
              <LabeledContainer labelText="락카" bold>
                {lockerFee}원
              </LabeledContainer>
              <LabeledContainer labelText="운동복" bold>
                {clothesFee}원
              </LabeledContainer>
            </Styled.SectionRow>
            <Styled.SectionRow>
              <LabeledContainer labelText="총 상품 금액" bold>
                {totalPrice}원
              </LabeledContainer>
              <LabeledContainer labelText="할인 금액" bold>
                {discountAmount}원
              </LabeledContainer>
            </Styled.SectionRow>
            <Styled.SectionRow>
              <LabeledContainer labelText="청구 금액" bold>
                {totalAmount}원
              </LabeledContainer>
              <LabeledContainer labelText="결제 수단" bold labelRatio={1} contentRatio={2}>
                {paymentMethod}
              </LabeledContainer>
            </Styled.SectionRow>
            <Styled.SectionRow>
              <LabeledContainer labelText="현금" bold labelRatio={1} contentRatio={2}>
                {cashAmount}원
              </LabeledContainer>
              <LabeledContainer labelText="카드" bold labelRatio={1} contentRatio={2}>
                {cardAmount}원
              </LabeledContainer>
            </Styled.SectionRow>
            <Styled.SectionRow>
              <LabeledContainer labelText="카드사" bold labelRatio={1} contentRatio={2}>
                {cardCompany}
              </LabeledContainer>
              <LabeledContainer labelText="승인번호" bold labelRatio={1} contentRatio={2}>
                {cardApprovalNo}원
              </LabeledContainer>
            </Styled.SectionRow>

            <Styled.SectionRow>
              <LabeledContainer labelText="계좌이체" bold labelRatio={1} contentRatio={2}>
                {bankTransferAmount}원
              </LabeledContainer>
              <LabeledContainer labelText="입금자명" bold labelRatio={1} contentRatio={2}>
                {accountOwnerName}
              </LabeledContainer>
            </Styled.SectionRow>
            <Styled.SectionRow>
              <LabeledContainer labelText="계좌정보" bold labelRatio={1} contentRatio={2}>
                {accountNumber}원
              </LabeledContainer>
            </Styled.SectionRow>
            <Styled.SectionRow>
              <LabeledContainer labelText="총 결제 금액" bold labelRatio={1} contentRatio={2}>
                {paidAmount}원
              </LabeledContainer>
              <LabeledContainer labelText="미수금" bold labelRatio={1} contentRatio={2}>
                {receivableAmount}원
              </LabeledContainer>
            </Styled.SectionRow>
          </Styled.FeeWrapper>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionTitle> 서명 </Styled.SectionTitle>
          <Styled.Explanation>{AgreementAcknowledgment} </Styled.Explanation>
          <Styled.dateContainer>신청일: {contractDate}</Styled.dateContainer>
          <Styled.SignaturesContainer>
            <Styled.SignatureWrapper>
              <Styled.SignatureHeader>회원 서명</Styled.SignatureHeader>
              <Styled.SignatureImage src={signatureImage} />
            </Styled.SignatureWrapper>
          </Styled.SignaturesContainer>
        </Styled.Section>
      </Styled.OneSideWrapper>
      <Styled.TermContainer>
        <Styled.MainTitle>옵션 신청 약관</Styled.MainTitle>
        <Styled.SubTitle>OPTION APPLICATION TERMS</Styled.SubTitle>
        {OptionApplicationTerm.toSorted((a, b) => a.id - b.id).map((section) => (
          <Styled.Section key={section.id}>
            <Styled.TermTitle>{section.title}</Styled.TermTitle>
            <Styled.InContractExplanation>{section.content} </Styled.InContractExplanation>
          </Styled.Section>
        ))}
      </Styled.TermContainer>
    </Styled.Wrapper>
  );
};

export default memo(OptionApplicationContract);
