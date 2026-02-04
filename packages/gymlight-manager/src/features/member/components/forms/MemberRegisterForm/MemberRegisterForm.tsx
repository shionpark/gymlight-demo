import {
  Checkbox,
  Input,
  LabeledContainer,
  PhoneInput,
  DateSelect,
  Select,
  GenderSelect,
  SquareButton,
  SelectWithCustomOption,
} from 'gymlight-design-system';

import { AddressSearchBox, InvisibleWrapper, SignaturePad, TermSlider } from '@/components';

import {
  AgreementAcknowledgment,
  CardProviders,
  MembershipAgreementTerms,
  JoinReasons,
  VisitPaths,
  JoinCategories,
  PaymentMethods,
} from '@/constants';

import { IReturnOfUseMemberRegisterForm, MembershipAgreementContract } from '@/features/member';

import { ProductPurchaseGrid } from '@/features/product';

import * as Styled from '../ContractForm.styles';

const MemberRegisterForm = (props: IReturnOfUseMemberRegisterForm) => {
  const {
    addressBoxProps: {
      address,
      handleAddressInputChange,
      showAddressBox,
      setShowAddressBox,
      handleAddressChange,
      handleErrorChange,
    },
    onSubmit,

    name,
    onChangeName,
    gender,
    onChangeGenderSelect,
    notes,
    onChangeNotes,
    joinReason,
    joinReasonOther,

    onChangeJoinReasonSelect,

    joinCategory,
    onChangeJoinCategorySelect,
    birthDateSelectStateControlProps,
    phone,
    setPhone,

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

    isApplyingOT,
    toggleIsApplyingOt,

    otDateSelectStateControlProps,
    otYearRange,
    otTime,
    onChangeOtTime,

    startDateSelectStateProps,

    isApplyingMiracleTenDays,
    toggleIsApplyingMiracleTenDays,

    selectedProductNames,
    productGridProps,

    visitPath,
    onChangeVisitPathSelect,
    visitPathOther,

    showProductSelect,
    onClickShowProductSelect,

    signaturePadProps,
    contractProps,
    contractWrapperRef,

    isReRegister,

    branchListData,
    onChangeBranchId,
    branchId,
    isAdmin,
  } = props;

  const CardAmountSection = (
    <>
      <Styled.SectionRow>
        <LabeledContainer labelText="카드 결제금액" bold labelRatio={1} contentRatio={2}>
          <Styled.WriteInputContainer>
            <Input type="number" value={cardAmount.toString()} onChange={onChangeCardAmount} />
            <span>원</span>
          </Styled.WriteInputContainer>
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
          <Styled.WriteInputContainer>
            <Input value={bankTransferAmount.toString()} onChange={onChangeBankTransferAmount} />
            <span>원</span>
          </Styled.WriteInputContainer>
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
        <Styled.WriteInputContainer>
          <Input type="number" value={cashAmount.toString()} onChange={onChangeCashAmount} />
          <span>원</span>
        </Styled.WriteInputContainer>
      </LabeledContainer>
    </Styled.SectionRow>
  );

  return (
    <Styled.Wrapper>
      <InvisibleWrapper ref={contractWrapperRef}>
        <MembershipAgreementContract {...contractProps} />
      </InvisibleWrapper>
      <Styled.MainTitle>짐라이트 회원가입 계약서</Styled.MainTitle>
      <Styled.SubTitle>GYMLIGHT MEMBERSHIP AGREEMENT</Styled.SubTitle>
      <Styled.Section>
        <Styled.SectionTitle>개인 명세자료 / Personal Information</Styled.SectionTitle>
        <Styled.SectionRow>
          <LabeledContainer labelText="성명" bold labelRatio={1} contentRatio={2}>
            <Input
              type="text"
              value={name}
              defaultValue={name}
              onChange={onChangeName}
              readOnly={isReRegister}
            />
          </LabeledContainer>
          <LabeledContainer labelText="연락처" bold labelRatio={1} contentRatio={2}>
            <PhoneInput
              name="phone"
              stateValue={phone}
              onChangeState={setPhone}
              errors={{}}
              readonly={isReRegister}
            />
          </LabeledContainer>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <LabeledContainer labelText="생년월일" bold labelRatio={1} contentRatio={5.2}>
            <DateSelect
              name="생년월일"
              {...birthDateSelectStateControlProps}
              disabled={isReRegister}
            />
          </LabeledContainer>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <LabeledContainer labelText="성별" bold labelRatio={1} contentRatio={2}>
            <GenderSelect
              values={['남', '여']}
              value={gender}
              onChange={onChangeGenderSelect}
              disabled={isReRegister}
            />
          </LabeledContainer>

          <LabeledContainer labelText="가입유형" bold labelRatio={1} contentRatio={2}>
            <Select value={joinCategory} onChange={onChangeJoinCategorySelect}>
              {JoinCategories.map((joinCategory) => (
                <option>{joinCategory}</option>
              ))}
            </Select>
          </LabeledContainer>
        </Styled.SectionRow>

        <Styled.SectionRow>
          <LabeledContainer labelText="방문경로" bold labelRatio={1} contentRatio={2}>
            <SelectWithCustomOption
              disabled={isReRegister}
              triggerValue="기타"
              value={visitPath === '기타' ? visitPathOther : visitPath}
              onChange={onChangeVisitPathSelect}
            >
              {VisitPaths.map((path) => (
                <option>{path}</option>
              ))}
            </SelectWithCustomOption>
          </LabeledContainer>

          <LabeledContainer labelText="가입이유" bold labelRatio={1} contentRatio={2}>
            <SelectWithCustomOption
              disabled={isReRegister}
              triggerValue="기타"
              name="joinReason"
              value={joinReason === '기타' ? joinReasonOther : joinReason}
              onChange={onChangeJoinReasonSelect}
            >
              {JoinReasons.map((reason) => (
                <option>{reason}</option>
              ))}
            </SelectWithCustomOption>
          </LabeledContainer>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <LabeledContainer labelText="주소" bold labelRatio={1} contentRatio={5.2}>
            <Styled.InputWithButtonWrapper>
              <Input
                type="text"
                readOnly
                value={address as string}
                onChange={handleAddressInputChange}
              />
              <SquareButton
                type="button"
                size="small"
                variant="normal"
                onClick={() => setShowAddressBox((prev: boolean) => !prev)}
              >
                {showAddressBox ? '닫기' : '주소 찾기'}
              </SquareButton>
            </Styled.InputWithButtonWrapper>
          </LabeledContainer>
        </Styled.SectionRow>
        {showAddressBox && (
          <Styled.AddressBoxContainer>
            <h3>주소 검색</h3>
            <AddressSearchBox
              takeAddressState={handleAddressChange}
              takeErrorState={handleErrorChange}
            />
          </Styled.AddressBoxContainer>
        )}
      </Styled.Section>

      {branchListData && isAdmin && !isReRegister && (
        <Styled.SectionRow>
          <LabeledContainer labelText="지점" bold labelRatio={1} contentRatio={5.2}>
            <Select
              name="branchId"
              value={branchId as number}
              onChange={onChangeBranchId}
              defaultValue={branchId}
            >
              {branchListData?.map(({ branchId, name: branchName }, index) => (
                <option key={index} value={branchId}>
                  {branchName}
                </option>
              ))}
            </Select>
          </LabeledContainer>
        </Styled.SectionRow>
      )}

      <Styled.Section>
        <Styled.SectionTitle>특이사항 및 옵션 / Option & Special Note</Styled.SectionTitle>
        <Styled.SectionRow>
          <LabeledContainer labelText="특이사항" bold labelRatio={1} contentRatio={5}>
            <Input name="notes" value={notes} onChange={onChangeNotes} />
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
        <Styled.SectionRow>
          <LabeledContainer labelText="이용 시작일" bold labelRatio={1} contentRatio={5.2}>
            <DateSelect name="startDate" {...startDateSelectStateProps} yearRange={otYearRange} />
          </LabeledContainer>
        </Styled.SectionRow>
        <Styled.SectionRow>
          <LabeledContainer labelText="옵션" bold vertical={false} labelRatio={1} contentRatio={5}>
            <LabeledContainer labelText="OT">
              <Checkbox checked={isApplyingOT} onClick={toggleIsApplyingOt} id="ot-check" />
            </LabeledContainer>
            {isApplyingOT && (
              <LabeledContainer labelText="첫 OT 희망일" bold labelRatio={1} contentRatio={5.2}>
                <DateSelect
                  name="otProgramDateTime"
                  {...otDateSelectStateControlProps}
                  yearRange={otYearRange}
                />
                <Input name="otTime" onChange={onChangeOtTime} value={otTime} type="time" />
              </LabeledContainer>
            )}
            <LabeledContainer labelText="미라클 텐데이">
              <Checkbox
                id="miracle-check"
                checked={isApplyingMiracleTenDays}
                onClick={toggleIsApplyingMiracleTenDays}
              />
            </LabeledContainer>
          </LabeledContainer>
        </Styled.SectionRow>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>회비 부가세 포함 / Membership Fee</Styled.SectionTitle>

        {selectedItems?.map((item) => (
          <Styled.SectionRow>
            <LabeledContainer labelText={item.name} labelRatio={1} contentRatio={5}>
              <Styled.WriteInputContainer>
                <Input readOnly value={item.sellingPrice.toString()} />
                <span>원</span>
              </Styled.WriteInputContainer>
            </LabeledContainer>
          </Styled.SectionRow>
        ))}
        <Styled.SectionRow>
          <LabeledContainer labelText="총 상품 금액" bold labelRatio={1} contentRatio={2}>
            <Styled.WriteInputContainer>
              <Input readOnly value={totalPrice.toString()} />
              <span>원</span>
            </Styled.WriteInputContainer>
          </LabeledContainer>
          <LabeledContainer labelText="할인 금액" bold labelRatio={1} contentRatio={2}>
            <Styled.WriteInputContainer>
              <Input value={discountAmount.toString()} onChange={onChangeDiscountAmount} />
              <span>원</span>
            </Styled.WriteInputContainer>
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
            <Styled.WriteInputContainer>
              <Input readOnly value={totalAmount.toString()} />
              <span> 원</span>
            </Styled.WriteInputContainer>
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
            <Styled.WriteInputContainer>
              <Input readOnly value={paidAmount.toString()} />
              <span>원</span>
            </Styled.WriteInputContainer>
          </LabeledContainer>
          <LabeledContainer labelText="미수금" bold labelRatio={1} contentRatio={2}>
            <Styled.WriteInputContainer>
              <Input readOnly value={receivableAmount.toString()} />
              <span>원</span>
            </Styled.WriteInputContainer>
          </LabeledContainer>
        </Styled.SectionRow>
      </Styled.Section>
      <Styled.Section>
        <Styled.SectionTitle>이용 약관 / Terms</Styled.SectionTitle>
        <TermSlider term={MembershipAgreementTerms} />
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

export default MemberRegisterForm;
