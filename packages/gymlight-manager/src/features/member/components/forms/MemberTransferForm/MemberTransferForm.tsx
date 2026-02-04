import { IReturnOfUseMemberTransferForm } from '@/features/member/hooks';

import * as Styled from '../ContractForm.styles';
import {
  Checkbox,
  DateSelect,
  GenderSelect,
  Input,
  LabeledContainer,
  PhoneInput,
  Select,
  SquareButton,
  VerticalTable,
} from 'gymlight-design-system';

import { InvisibleWrapper, SignaturePad, TermSlider } from '@/components';

import { TransferApplicationContract } from '@/features/member';
import { tableCellWidth } from '@/styles/variables';
import { AgreementAcknowledgment, TransferApplicationTerm } from '@/constants';

const MemberTransferForm = (props: IReturnOfUseMemberTransferForm) => {
  const {
    onSubmit,

    name,
    phone,

    transfereeGender,
    onChangeTransfereeGenderSelect,
    signaturePadProps,

    transferFee,
    onChangeTransferFee,

    transfereeName,
    onChangeTransfereeName,
    transfereePhone,
    setTransfereePhone,

    memberCategories,
    transfereeCategoryId,
    onChangeTransfereeCategoryId,

    contractWrapperRef,
    contractProps,

    transferablePayments,
    handleTransferablePaymentClick,
    purchasedProductIds,

    transfereeStartDateSelectStateControlProps,
    transferDateSelectStateControlProps,
    transfereeBirthDateSelectStateControlProps,
  } = props;

  const transferableTableHeaderCells = ['✔️', '상품 정보'];

  const transferableTableColumnWidths = [tableCellWidth.checkbox, tableCellWidth.md];
  const transferableTableRows = transferablePayments
    ? transferablePayments.map((payment) => [
        <Checkbox
          id={payment.purchasedProductId.toString()}
          checked={purchasedProductIds.includes(payment.purchasedProductId)}
          onClick={() => handleTransferablePaymentClick(payment.purchasedProductId)}
        />,
        payment.productName,
      ])
    : [[]];

  return (
    <Styled.Wrapper>
      <InvisibleWrapper ref={contractWrapperRef}>
        <TransferApplicationContract {...contractProps} />
      </InvisibleWrapper>
      <Styled.MainTitle>짐라이트 양도 신청서</Styled.MainTitle>
      <Styled.SubTitle>GYMLIGHT TRANSFER APPLICATION</Styled.SubTitle>
      <Styled.Section>
        <Styled.SectionTitle>양도인 정보 / Transferer Info</Styled.SectionTitle>
        <Styled.SectionRow>
          <LabeledContainer labelText="성명" bold labelRatio={1} contentRatio={2}>
            <Input type="text" value={name} defaultValue={name} readOnly />
          </LabeledContainer>
          <LabeledContainer labelText="연락처" bold labelRatio={1} contentRatio={2}>
            <PhoneInput name="phone" stateValue={phone} errors={{}} readonly />
          </LabeledContainer>
        </Styled.SectionRow>
      </Styled.Section>

      <Styled.Section>
        <Styled.SectionTitle>양도 정보 / Transfer Info</Styled.SectionTitle>
        <Styled.SectionRow>
          <LabeledContainer vertical bold labelText="양도 상품 선택">
            <VerticalTable
              height={15}
              tableHeaderCells={transferableTableHeaderCells}
              columnWidths={transferableTableColumnWidths}
              tableRows={transferableTableRows}
            />
          </LabeledContainer>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <LabeledContainer labelText="양도일" bold labelRatio={1} contentRatio={5.2}>
            <DateSelect name="양도일" {...transferDateSelectStateControlProps} errors={{}} />
          </LabeledContainer>
          <LabeledContainer labelText="양도 수수료">
            <Input
              name="양도 수수료"
              type="number"
              value={transferFee.toString()}
              onChange={onChangeTransferFee}
            />
          </LabeledContainer>
        </Styled.SectionRow>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>양수인 정보 / Transferee Info</Styled.SectionTitle>
        <Styled.SectionRow>
          <LabeledContainer labelText="성명" bold labelRatio={1} contentRatio={2}>
            <Input
              type="text"
              value={transfereeName}
              defaultValue={transfereeName}
              onChange={onChangeTransfereeName}
            />
          </LabeledContainer>
          <LabeledContainer labelText="연락처" bold labelRatio={1} contentRatio={2}>
            <PhoneInput
              name="phone"
              stateValue={transfereePhone}
              onChangeState={setTransfereePhone}
              errors={{}}
            />
          </LabeledContainer>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <LabeledContainer labelText="생년월일" bold labelRatio={1} contentRatio={5.2}>
            <DateSelect
              name="생년월일"
              {...transfereeBirthDateSelectStateControlProps}
              errors={{}}
            />
          </LabeledContainer>
          <LabeledContainer labelText="성별" bold labelRatio={1} contentRatio={2}>
            <GenderSelect
              values={['남', '여']}
              value={transfereeGender}
              onChange={onChangeTransfereeGenderSelect}
            />
          </LabeledContainer>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <LabeledContainer labelText="회원 유형" bold labelRatio={1} contentRatio={5.2}>
            <Select value={transfereeCategoryId} onChange={onChangeTransfereeCategoryId}>
              {memberCategories?.map(({ code, memberCategoryId, name }) => (
                <option value={memberCategoryId}>{name}</option>
              ))}
            </Select>
          </LabeledContainer>
          <LabeledContainer labelText="시작일" bold labelRatio={1} contentRatio={5.2}>
            <DateSelect name="시작일" {...transfereeStartDateSelectStateControlProps} errors={{}} />
          </LabeledContainer>
        </Styled.SectionRow>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>양도 약관 / Terms</Styled.SectionTitle>
        <TermSlider term={TransferApplicationTerm} />
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>서명</Styled.SectionTitle>
        <Styled.Explanation>{AgreementAcknowledgment} </Styled.Explanation>
        <Styled.SignaturesContainer>
          <Styled.SignatureWrapper>
            <SignaturePad title="회원서명" {...signaturePadProps} />
          </Styled.SignatureWrapper>
        </Styled.SignaturesContainer>
      </Styled.Section>
      <SquareButton onClick={onSubmit} variant="primary" wide>
        양도 신청
      </SquareButton>
    </Styled.Wrapper>
  );
};

export default MemberTransferForm;
