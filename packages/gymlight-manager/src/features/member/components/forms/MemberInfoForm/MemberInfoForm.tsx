import { useEffect } from 'react';

import {
  DateSelect,
  GenderSelect,
  Input,
  LabeledContainer,
  PhoneInput,
  SelectWithCustomOption,
  SquareButton,
} from 'gymlight-design-system';

import { GENDERS, JoinReasons, VisitPaths } from '@/constants';

import { AddressSearchBox, SelfieCamera } from '@/components';

import {
  IUpdateMemberInfoFormFields,
  IUseMemberInfoFormParams,
  useMemberInfoForm,
} from '@/features/member';

import * as Styled from './MemberInfoForm.styles';

import * as FormStyled from '../Form.styles';

interface IMemberInfoFormProps extends IUpdateMemberInfoFormFields, IUseMemberInfoFormParams {
  memberId: number;
  startDate?: string;
  birthDate?: string;
}
const MemberInfoForm = ({
  name,
  gender,
  phone,
  memberId,

  initVisitPath,
  initVisitPathOther,
  initJoinReason,
  initJoinReasonOther,
  startDate,
  birthDate,
  address,
}: IMemberInfoFormProps) => {
  const {
    errors,
    register,
    getHandleValidSubmit,
    addressBoxProps,
    setAddress,
    setInitDates,
    startDateSelectStateControlProps,
    birthDateSelectStateControlProps,
    isEdit,
    onClickCancelEdit,
    onClickEdit,
    joinReason,
    onChangeJoinReason,

    joinReasonOther,
    onChangeJoinReasonOther,

    visitPath,
    onChangeVisitPath,

    visitPathOther,
    onChangeVisitPathOther,
    selfieCameraProps,
    isEditImage,
    onClickIsEditImage,
    formKey,
  } = useMemberInfoForm({
    initJoinReason,
    initJoinReasonOther,
    initVisitPath,
    initVisitPathOther,
  });

  const {
    address: addressState,
    showAddressBox,
    setShowAddressBox,
    handleAddressInputChange,
    handleAddressChange,
    handleErrorChange,
  } = addressBoxProps;

  useEffect(() => {
    if (address && !addressState) {
      setAddress(address);
    }
  }, [address, addressState, setAddress]);

  useEffect(() => {
    if (startDate || birthDate) {
      setInitDates({
        startDate: startDate || '0000-00-00',
        birthDate: birthDate || '0000-00-00',
      });
    }
  }, []);

  const handleSubmit = getHandleValidSubmit(memberId);

  return (
    <Styled.Wrapper key={formKey}>
      <FormStyled.Wrapper>
        <LabeledContainer labelText="성명" bold labelRatio={1} contentRatio={5.2}>
          <Input
            type="text"
            {...register({ name: 'name' })}
            defaultValue={name}
            readOnly={!isEdit}
          />
        </LabeledContainer>
        <LabeledContainer labelText="연락처" bold labelRatio={1} contentRatio={5.2}>
          <PhoneInput
            errors={errors}
            name="phone"
            register={register}
            defaultValue={phone}
            readonly={!isEdit}
            wide
          />
        </LabeledContainer>
        <LabeledContainer labelText="생년월일" bold labelRatio={1} contentRatio={5.2}>
          <DateSelect name="birthDate" {...birthDateSelectStateControlProps} disabled={!isEdit} />
        </LabeledContainer>
        <LabeledContainer labelText="성별" bold labelRatio={1} contentRatio={5.2}>
          <GenderSelect
            values={GENDERS as unknown as string[]}
            {...register({ name: 'gender' })}
            defaultValue={gender}
            disabled={!isEdit}
          />
        </LabeledContainer>
        <LabeledContainer labelText="방문경로" bold labelRatio={1} contentRatio={5.2}>
          <SelectWithCustomOption
            disabled={!isEdit}
            triggerValue="기타"
            value={visitPath}
            defaultCustomValue={visitPathOther}
            onChange={onChangeVisitPath}
            onChangeCustomValueInput={onChangeVisitPathOther}
            withCancelButton={false}
          >
            {VisitPaths.map((path) => (
              <option>{path}</option>
            ))}
          </SelectWithCustomOption>
        </LabeledContainer>
        <LabeledContainer
          labelText="가입이유"
          bold
          labelRatio={1}
          contentRatio={5.2}
          defaultValue={joinReason}
        >
          <SelectWithCustomOption
            withCancelButton={false}
            disabled={!isEdit}
            triggerValue="기타"
            value={joinReason}
            defaultCustomValue={joinReasonOther}
            onChange={onChangeJoinReason}
            onChangeCustomValueInput={onChangeJoinReasonOther}
          >
            {JoinReasons.map((reason) => (
              <option>{reason}</option>
            ))}
          </SelectWithCustomOption>
        </LabeledContainer>
        <LabeledContainer labelText="주소" bold labelRatio={1} contentRatio={5.2}>
          <Styled.AddressInputContainer>
            <Input
              type="text"
              readOnly
              value={addressState as string}
              onChange={handleAddressInputChange}
            />
            <SquareButton
              disabled={!isEdit}
              type="button"
              size="small"
              variant="normal"
              onClick={() => setShowAddressBox((prev: boolean) => !prev)}
            >
              {showAddressBox ? '닫기' : '주소 찾기'}
            </SquareButton>
          </Styled.AddressInputContainer>
        </LabeledContainer>

        <Styled.ConditionalComponentWrapper isEdit={showAddressBox}>
          <h4>주소 검색</h4>
          <AddressSearchBox
            takeAddressState={handleAddressChange}
            takeErrorState={handleErrorChange}
          />
        </Styled.ConditionalComponentWrapper>

        <LabeledContainer labelText="시작일" bold labelRatio={1} contentRatio={5.2}>
          <DateSelect name="startDate" {...startDateSelectStateControlProps} disabled={!isEdit} />
        </LabeledContainer>
        <LabeledContainer
          labelText="사진"
          bold
          labelRatio={1}
          contentRatio={5.2}
          contentAlign="start"
        >
          <Styled.ProfileImageContainer isEdit={isEdit}>
            <img src={selfieCameraProps.normalProps.photoString || ''} alt="프로필 사진" />
          </Styled.ProfileImageContainer>
          {isEdit ? (
            <Styled.CameraOpenButtonWrapper>
              <SquareButton onClick={onClickIsEditImage}>
                {isEditImage ? '카메라 닫기' : '카메라 열기'}
              </SquareButton>
            </Styled.CameraOpenButtonWrapper>
          ) : (
            ''
          )}
        </LabeledContainer>
        <Styled.ConditionalComponentWrapper isEdit={isEditImage}>
          <SelfieCamera {...selfieCameraProps.normalProps} ref={selfieCameraProps.ref} />
        </Styled.ConditionalComponentWrapper>
        {isEdit ? (
          <Styled.SquareButtonContainer>
            <SquareButton onClick={onClickCancelEdit}>취소</SquareButton>
            <SquareButton onClick={handleSubmit} variant="primary">
              수정 완료
            </SquareButton>
          </Styled.SquareButtonContainer>
        ) : (
          <SquareButton onClick={onClickEdit}>정보 수정 </SquareButton>
        )}
      </FormStyled.Wrapper>
    </Styled.Wrapper>
  );
};

export default MemberInfoForm;
