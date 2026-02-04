import {
  Input,
  LabeledContainer,
  PhoneInput,
  Select,
  SquareButton,
  SelectWithCustomOption,
} from 'gymlight-design-system';

import { InvisibleWrapper, SignaturePad, TermSlider } from '@/components';

import {
  AgreementAcknowledgment,
  CardProviders,
  OptionApplicationTerm,
  PaymentMethods,
} from '@/constants';

import {
  OptionApplicationContract,
  type IReturnOfUseAdditionOptionPurchaseForm,
} from '@/features/member';

import { ProductPurchaseGrid } from '@/features/product';

import * as Styled from './OptionApplicationForm.styles';

const OptionApplicationForm = (props: IReturnOfUseAdditionOptionPurchaseForm) => {
  const {
    onSubmit,

    name,
    phone,

    period,
    onChangePeriod,

    selectedItems,

    totalPrice,
    paymentMethod,
    onChangePaymentMethod,

    totalAmount,
    paidAmount,
    cardAmount,
    onChangeCardAmount,
    cashAmount,
    onChangeCashAmount,
    bankTransferAmount,
    onChangeBankTransferAmount,

    cardApprovalNo,
    onChangeCardApprovalNo,
    cardCompany,
    cardCompanyOther,

    receivableAmount,
    accountNumber,
    onChangeAccountNumber,
    accountOwnerName,

    onChangeAccountOwnerName,

    discountAmount,
    onChangeDiscountAmount,
    discountReason,
    onChangeDiscountReason,
    onChangeCardProviderSelect,

    selectedProductNames,
    productGridProps,

    showProductSelect,
    onClickShowProductSelect,

    signaturePadProps,
    contractProps,
    contractWrapperRef,
  } = props;

  const CardAmountSection = (
    <>
      <Styled.SectionRow>
        <LabeledContainer labelText="카드 결제금액" bold labelRatio={1} contentRatio={2}>
          <Styled.ReadonlyInputContainer>
            <Input type="number" value={cardAmount.toString()} onChange={onChangeCardAmount} />
            <span>원</span>
          </Styled.ReadonlyInputContainer>
        </LabeledContainer>
      </Styled.SectionRow>
      <Styled.SectionRow>
        <LabeledContainer labelText="카드사" bold labelRatio={1} contentRatio={2}>
          <SelectWithCustomOption
            triggerValue="기타"
            name="카드사"
            value={cardCompany === '기타' ? cardCompanyOther : cardCompany}
            onChange={onChangeCardProviderSelect}
          >
            {CardProviders.map((companyName) => (
              <option>{companyName}</option>
            ))}
          </SelectWithCustomOption>
        </LabeledContainer>
        <LabeledContainer labelText="카드 승인번호" bold labelRatio={1} contentRatio={3}>
          <Input name="cardApprovalNo" value={cardApprovalNo} onChange={onChangeCardApprovalNo} />
        </LabeledContainer>
      </Styled.SectionRow>
    </>
  );

  const TransferAmountSection = (
    <>
      <Styled.SectionRow>
        <LabeledContainer labelText="계좌이체 금액" bold labelRatio={1} contentRatio={2}>
          <Styled.ReadonlyInputContainer>
            <Input value={bankTransferAmount.toString()} onChange={onChangeBankTransferAmount} />
            <span>원</span>
          </Styled.ReadonlyInputContainer>
        </LabeledContainer>
      </Styled.SectionRow>
      <Styled.SectionRow>
        <LabeledContainer labelText="입금자명" bold labelRatio={1} contentRatio={2}>
          <Input
            name="accountOwnerName"
            value={accountOwnerName}
            onChange={onChangeAccountOwnerName}
          />
        </LabeledContainer>
        <LabeledContainer labelText="입금 계좌정보" bold labelRatio={1} contentRatio={3}>
          <Input name="accountNumber" value={accountNumber} onChange={onChangeAccountNumber} />
        </LabeledContainer>
      </Styled.SectionRow>
    </>
  );

  const CashAmountSection = (
    <Styled.SectionRow>
      <LabeledContainer labelText="현금 결제금액" bold labelRatio={1} contentRatio={2}>
        <Styled.ReadonlyInputContainer>
          <Input type="number" value={cashAmount.toString()} onChange={onChangeCashAmount} />
          <span>원</span>
        </Styled.ReadonlyInputContainer>
      </LabeledContainer>
    </Styled.SectionRow>
  );

  return (
    <Styled.Wrapper>
      <InvisibleWrapper ref={contractWrapperRef}>
        <OptionApplicationContract {...contractProps} />
      </InvisibleWrapper>
      <Styled.MainTitle>옵션 신청서</Styled.MainTitle>
      <Styled.SubTitle>OPTION APPLICATION</Styled.SubTitle>
      <Styled.Section>
        <Styled.SectionTitle>개인 명세자료 / Personal Information</Styled.SectionTitle>
        <Styled.SectionRow>
          <LabeledContainer labelText="성명" bold labelRatio={1} contentRatio={2}>
            <Input type="text" value={name} readOnly />
          </LabeledContainer>
          <LabeledContainer labelText="연락처" bold labelRatio={1} contentRatio={2}>
            <PhoneInput name="phone" stateValue={phone} errors={{}} readonly />
          </LabeledContainer>
        </Styled.SectionRow>

        <Styled.SectionRow>
          <LabeledContainer labelText="상품" bold labelRatio={1} contentRatio={5}>
            <Styled.InputWithButtonWrapper>
              <Input readOnly value={selectedProductNames} />
              <SquareButton
                type="button"
                size="small"
                variant="normal"
                onClick={onClickShowProductSelect}
              >
                {showProductSelect ? '닫기' : '상품선택'}
              </SquareButton>
            </Styled.InputWithButtonWrapper>
          </LabeledContainer>
        </Styled.SectionRow>
        {showProductSelect && (
          <>
            {
              //@ts-ignore
              <ProductPurchaseGrid {...productGridProps} />
            }
          </>
        )}
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionRow>
          <LabeledContainer labelText="기간" bold labelRatio={1} contentRatio={5}>
            <Input value={period} onChange={onChangePeriod} />
          </LabeledContainer>
        </Styled.SectionRow>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>회비 부가세 포함 / Membership Fee</Styled.SectionTitle>

        {selectedItems?.map((item) => (
          <Styled.SectionRow>
            <LabeledContainer labelText={item.name} labelRatio={1} contentRatio={5}>
              <Styled.ReadonlyInputContainer>
                <Input readOnly value={item.sellingPrice.toString()} />
                <span>원</span>
              </Styled.ReadonlyInputContainer>
            </LabeledContainer>
          </Styled.SectionRow>
        ))}
        <Styled.SectionRow>
          <LabeledContainer labelText="총 상품 금액" bold labelRatio={1} contentRatio={2}>
            <Styled.ReadonlyInputContainer>
              <Input readOnly value={totalPrice.toString()} />
              <span>원</span>
            </Styled.ReadonlyInputContainer>
          </LabeledContainer>
          <LabeledContainer labelText="할인 금액" bold labelRatio={1} contentRatio={2}>
            <Styled.ReadonlyInputContainer>
              <Input value={discountAmount.toString()} onChange={onChangeDiscountAmount} />
              <span>원</span>
            </Styled.ReadonlyInputContainer>
          </LabeledContainer>
        </Styled.SectionRow>
        {discountAmount ? (
          <Styled.SectionRow>
            <LabeledContainer labelText="할인 사유" bold labelRatio={1} contentRatio={5}>
              <Input
                name="discountReason"
                value={discountReason}
                onChange={onChangeDiscountReason}
              />
            </LabeledContainer>
          </Styled.SectionRow>
        ) : (
          ''
        )}
        <Styled.SectionRow>
          <LabeledContainer labelText="청구 금액" bold labelRatio={1} contentRatio={5}>
            <Styled.ReadonlyInputContainer>
              <Input readOnly value={totalAmount.toString()} />
              <span> 원</span>
            </Styled.ReadonlyInputContainer>
          </LabeledContainer>
        </Styled.SectionRow>

        <Styled.SectionRow>
          <LabeledContainer labelText="결제 수단" bold labelRatio={1} contentRatio={2}>
            <Select value={paymentMethod} onChange={onChangePaymentMethod}>
              {PaymentMethods.map((method) => (
                <option>{method}</option>
              ))}
            </Select>
          </LabeledContainer>
        </Styled.SectionRow>
        {paymentMethod === '현금' && CashAmountSection}
        {paymentMethod === '카드' && CardAmountSection}
        {paymentMethod === '계좌이체' && TransferAmountSection}
        {paymentMethod === '복합' && (
          <>
            {CashAmountSection}
            {CardAmountSection}
            {TransferAmountSection}
          </>
        )}
        <Styled.SectionRow>
          <LabeledContainer labelText="결제 금액" bold labelRatio={1} contentRatio={2}>
            <Styled.ReadonlyInputContainer>
              <Input readOnly value={paidAmount.toString()} />
              <span>원</span>
            </Styled.ReadonlyInputContainer>
          </LabeledContainer>
          <LabeledContainer labelText="미수금" bold labelRatio={1} contentRatio={2}>
            <Styled.ReadonlyInputContainer>
              <Input readOnly value={receivableAmount.toString()} />
              <span>원</span>
            </Styled.ReadonlyInputContainer>
          </LabeledContainer>
        </Styled.SectionRow>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>이용 약관 / Terms</Styled.SectionTitle>
        <TermSlider term={OptionApplicationTerm} />
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
      <SquareButton
        onClick={() => {
          onSubmit();
        }}
        variant="primary"
        wide
      >
        가입
      </SquareButton>
    </Styled.Wrapper>
  );
};

export default OptionApplicationForm;
