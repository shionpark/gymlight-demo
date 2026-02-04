import * as Styled from '../contracts.styles';

import { LabeledContainer, Checkbox } from 'gymlight-design-system';

import { MembershipAgreementTerms, AgreementAcknowledgment } from '@/constants';

import type { PaymentType } from '@/types';

export interface IMembershipAgreementContractProps {
  username: string;
  gender: string;
  address: string;
  birth: string;
  phone: string;
  visitPath?: string;
  joinReason?: string;
  enrollCategory: string;
  productName: string;
  notes?: string;
  option: { ot: boolean; miracleTenDay: boolean };
  otProgramDateTime: string;
  paymentMethod: PaymentType;
  ptFee: number;
  membershipFee: number;
  lockerFee: number;
  clothesFee: number;
  accountOwnerName: string;
  accountNumber: string;

  totalPrice: number;
  discountAmount: number;
  discountReason: string;

  totalAmount: number;

  paidAmount: number;
  cardAmount: number;
  cardApprovalNo: string;
  cardCompany: string;
  cashAmount: number;
  bankTransferAmount: number;

  receivableAmount: number;

  contractDate: string;
  signatureImage: string;
}

const MembershipAgreementContract = ({
  username,
  gender,
  birth,
  phone,
  address,
  visitPath,
  joinReason,
  enrollCategory,
  productName,
  notes,
  option: { ot, miracleTenDay },
  otProgramDateTime,
  paymentMethod,

  membershipFee,
  lockerFee,
  clothesFee,
  ptFee,

  totalPrice,
  discountAmount,
  discountReason,

  totalAmount,
  paidAmount,
  cardAmount,
  cardApprovalNo,
  cardCompany,

  cashAmount,
  bankTransferAmount,
  accountNumber,
  accountOwnerName,

  receivableAmount,

  signatureImage,
  contractDate,
}: IMembershipAgreementContractProps) => {
  return (
    <Styled.Wrapper>
      <Styled.OneSideWrapper>
        <Styled.MainTitle>짐라이트 회원가입 계약서</Styled.MainTitle>
        <Styled.SubTitle>GYMLIGHT MEMBERSHIP AGREEMENT</Styled.SubTitle>
        <Styled.Section>
          <Styled.SectionTitle>개인 명세자료 / Personal Information</Styled.SectionTitle>
          <Styled.SectionRow>
            <LabeledContainer labelText="성명" bold>
              {username}
            </LabeledContainer>
            <LabeledContainer labelText="성별" bold>
              {gender}
            </LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="생년월일" bold>
              {birth}
            </LabeledContainer>
            <LabeledContainer labelText="연락처" bold>
              {phone}
            </LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="주소" bold>
              {address}
            </LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="방문경로" bold>
              {visitPath}
            </LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="가입이유" bold>
              {joinReason}
            </LabeledContainer>
          </Styled.SectionRow>
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionTitle>특이사항 및 옵션 / Option & Special Note</Styled.SectionTitle>
          <Styled.SectionRow>
            <LabeledContainer labelText="특이사항" bold>
              {notes}
            </LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="가입유형" bold>
              {enrollCategory}
            </LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="상품" bold>
              {productName}
            </LabeledContainer>
          </Styled.SectionRow>
          <Styled.SectionRow>
            <LabeledContainer labelText="옵션" bold vertical={false}>
              <LabeledContainer labelText="OT">
                <span>
                  <Checkbox checked={ot} />
                  {ot ? `첫 수업 희망일: ${otProgramDateTime}` : '희망 안함'}
                </span>
              </LabeledContainer>
              <LabeledContainer labelText="미라클 텐데이">
                <span>
                  <Checkbox checked={miracleTenDay} /> {miracleTenDay ? '희망' : '희망 안함'}
                </span>
              </LabeledContainer>
            </LabeledContainer>
          </Styled.SectionRow>
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionTitle>회비 부가세 포함 / Membership Fee</Styled.SectionTitle>
          <Styled.FeeWrapper>
            {discountAmount > 0 && discountReason ? (
              <Styled.SectionRow>
                <LabeledContainer labelText="할인 사유" bold>
                  {discountReason}
                </LabeledContainer>
              </Styled.SectionRow>
            ) : (
              ''
            )}
            <Styled.SectionRow>
              <LabeledContainer labelText="회원권" bold>
                {membershipFee}원
              </LabeledContainer>
              <LabeledContainer labelText="PT" bold>
                {ptFee}원
              </LabeledContainer>
            </Styled.SectionRow>
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
          <Styled.dateContainer>{contractDate}</Styled.dateContainer>
          <Styled.SignaturesContainer>
            <Styled.SignatureWrapper>
              <Styled.SignatureHeader>회원 서명</Styled.SignatureHeader>
              <Styled.SignatureImage src={signatureImage} />
            </Styled.SignatureWrapper>
          </Styled.SignaturesContainer>
        </Styled.Section>
      </Styled.OneSideWrapper>
      <Styled.TermContainer>
        <Styled.MainTitle>이용 약관 전문</Styled.MainTitle>
        {MembershipAgreementTerms.toSorted((a, b) => a.id - b.id).map((section) => (
          <Styled.Section key={section.id}>
            <Styled.TermTitle>{section.title}</Styled.TermTitle>
            {section.content}
          </Styled.Section>
        ))}
      </Styled.TermContainer>
    </Styled.Wrapper>
  );
};

export default MembershipAgreementContract;
