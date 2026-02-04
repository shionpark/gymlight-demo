import {
  Input,
  LabeledContainer,
  PhoneInput,
  SquareButton,
  Textarea,
  VerticalTable,
  Checkbox,
} from 'gymlight-design-system';
import { InvisibleWrapper, SignaturePad } from '@/components';

import { RefundAcknowledgment } from '@/constants';

import { TerminationApplicationContract, useMemberPaymentRefundForm } from '@/features/member';

import * as ContractStyled from '../ContractForm.styles';
import { tableCellWidth } from '@/styles/variables';

interface IMemberPaymentRefundFormProps {
  initName?: string;
  initPhone?: string;
  memberId: number;
}

const MemberPaymentRefundForm = ({
  initName,
  initPhone,
  memberId,
}: IMemberPaymentRefundFormProps) => {
  const {
    name,
    phone,
    refundAmount,
    onChangeRefundAmount,
    refundReason,
    onChangeRefundReason,
    signaturePadProps,
    contractProps,
    contractWrapperRef,
    refundablePayments,
    handleRefundablePaymentClick,
    onSubmit,
  } = useMemberPaymentRefundForm({ initName, initPhone, memberId });

  const refundableTableHeaderCells = ['✔️', '상품 이름'];

  const refundableTableColumnWidths = [tableCellWidth.checkbox, tableCellWidth.md];
  const refundableTableRows = refundablePayments
    ? refundablePayments.map((payment) => [
        <Checkbox
          id={payment.purchasedProductId.toString()}
          onClick={() => handleRefundablePaymentClick(payment.purchasedProductId)}
        />,
        payment.productName,
      ])
    : [[]];

  return (
    <ContractStyled.Wrapper>
      <InvisibleWrapper ref={contractWrapperRef}>
        <TerminationApplicationContract {...contractProps} />
      </InvisibleWrapper>
      <ContractStyled.MainTitle>짐라이트 해지 계약서</ContractStyled.MainTitle>
      <ContractStyled.SubTitle>TERMINATION APPLICATION</ContractStyled.SubTitle>
      <ContractStyled.Section>
        <ContractStyled.SectionTitle>
          개인 명세자료 / Personal Information
        </ContractStyled.SectionTitle>
        <ContractStyled.SectionRow>
          <LabeledContainer labelText="이름" labelRatio={1} contentRatio={3}>
            <Input type="text" value={name} readOnly />
          </LabeledContainer>
          <LabeledContainer labelText="연락처" labelRatio={1} contentRatio={3}>
            <PhoneInput name="phone" stateValue={phone} errors={{}} readonly wide />
          </LabeledContainer>
        </ContractStyled.SectionRow>
      </ContractStyled.Section>
      <ContractStyled.Section>
        <ContractStyled.SectionTitle>
          환불 신청 정보/ Refund Request Information
        </ContractStyled.SectionTitle>
        <ContractStyled.SectionRow>
          <LabeledContainer vertical bold labelText="환불 상품 선택">
            <VerticalTable
              height={15}
              tableHeaderCells={refundableTableHeaderCells}
              columnWidths={refundableTableColumnWidths}
              tableRows={refundableTableRows}
            />
          </LabeledContainer>
        </ContractStyled.SectionRow>

        <ContractStyled.SectionRow>
          <LabeledContainer labelText="환불 금액" bold labelRatio={1} contentRatio={2}>
            <ContractStyled.WriteInputContainer>
              <Input value={refundAmount.toString()} onChange={onChangeRefundAmount} />
              <span>원</span>
            </ContractStyled.WriteInputContainer>
          </LabeledContainer>
        </ContractStyled.SectionRow>
        <ContractStyled.SectionRow>
          {' '}
          <LabeledContainer labelText="환불 이유" vertical bold>
            <Textarea
              size="normal"
              value={refundReason}
              onChange={onChangeRefundReason}
              maxTextLength={150}
            />
          </LabeledContainer>
        </ContractStyled.SectionRow>
      </ContractStyled.Section>

      <ContractStyled.Section>
        <ContractStyled.SectionTitle>서명</ContractStyled.SectionTitle>
        <ContractStyled.Explanation>{RefundAcknowledgment} </ContractStyled.Explanation>
        <ContractStyled.SignaturesContainer>
          <ContractStyled.SignatureWrapper>
            <SignaturePad title="회원서명" {...signaturePadProps} />
          </ContractStyled.SignatureWrapper>
        </ContractStyled.SignaturesContainer>
      </ContractStyled.Section>
      <SquareButton type="submit" wide variant="primary" onClick={onSubmit}>
        해지 신청
      </SquareButton>
    </ContractStyled.Wrapper>
  );
};

export default MemberPaymentRefundForm;
