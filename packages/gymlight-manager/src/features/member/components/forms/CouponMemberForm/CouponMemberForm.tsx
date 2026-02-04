import {
  Input,
  PhoneInput,
  INPUT_OPTIONS,
  Select,
  Textarea,
  LabeledContainer,
  SquareButton,
  GenderSelect,
} from 'gymlight-design-system';

import type { IBranchNameResponse } from '@/types';

import { useCouponMemberForm } from '@/features/member/hooks';

import * as Styled from '@/features/member/components/forms/Form.styles';

export interface ICouponMemberFormProps {
  isEdit?: boolean;
  initName?: string;
  initContent?: string;
  initPhone?: string;
  initBranchId?: number;
  initBranchName?: string;
  initCouponDays?: number;
  initRefferedId?: number;
}

const CouponMemberForm = ({
  isEdit,
  initContent,
  initName,
  initPhone,
  initBranchId,
  initBranchName,
  initCouponDays,
}: ICouponMemberFormProps) => {
  const {
    register,
    errors,
    isAdmin,
    branchOptionData,
    onSubmitRegister,
    onSubmitEdit,
    activeMembers,
    onChangeBranchIdState,
    formKey,
  } = useCouponMemberForm({ initBranchId });

  const branchOptions =
    initBranchId && initBranchName
      ? [
          ...[{ branchId: initBranchId, name: initBranchName }],
          ...(branchOptionData
            ? branchOptionData.filter(({ branchId }) => branchId !== initBranchId)
            : []),
        ]
      : branchOptionData || ([] as IBranchNameResponse[]);

  return (
    <Styled.Wrapper key={formKey}>
      <Styled.SmallLabeledContainerWrapper>
        <LabeledContainer labelText="이름" labelRatio={1} contentRatio={3}>
          <Input
            type="text"
            errorMessage={errors.name}
            {...register({
              name: 'name',
              defaultValue: initName || '',
              placeholder: '이름',
              validationRules: INPUT_OPTIONS.NAME,
            })}
          />
        </LabeledContainer>

        <LabeledContainer labelText="연락처" labelRatio={1} contentRatio={3}>
          <PhoneInput
            name="phone"
            placeholder="휴대폰 번호"
            defaultValue={initPhone || ''}
            register={register}
            validationRules={INPUT_OPTIONS.PHONE}
            errors={errors}
            wide
          />
        </LabeledContainer>
        <LabeledContainer labelText="성별" labelRatio={1} contentRatio={3}>
          <GenderSelect
            values={['남', '여']}
            defaultValue={'남'}
            {...register({
              name: 'gender',
              validationRules: {
                required: '성별을 선택해주세요.',
              },
            })}
          />
        </LabeledContainer>
        {isAdmin ? (
          <LabeledContainer labelText="사용 지점" labelRatio={1} contentRatio={3} bold>
            <Select onChange={onChangeBranchIdState} defaultValue={initBranchId}>
              {branchOptions.map(({ branchId, name: branchName }, index) => (
                <option key={index} value={branchId}>
                  {branchName}
                </option>
              ))}
            </Select>
          </LabeledContainer>
        ) : (
          ''
        )}

        <LabeledContainer labelText="추천인" labelRatio={1} contentRatio={3}>
          <Select {...register({ name: 'referrerId' })}>
            <option>추천인 이름 / 연락처</option>
            {activeMembers?.map(({ name, phone, memberId }, index) => (
              <option key={`activeMember-${index}`} value={memberId}>{`${name}/${phone}`}</option>
            ))}
          </Select>
        </LabeledContainer>

        <LabeledContainer labelText="쿠폰 장수 (일)" labelRatio={1} contentRatio={3}>
          <Input
            type="number"
            errorMessage={errors.number}
            {...register({
              name: 'couponDays',
              defaultValue: initCouponDays || 1,
            })}
          />
        </LabeledContainer>
      </Styled.SmallLabeledContainerWrapper>

      <LabeledContainer labelText="메모" vertical bold>
        <Textarea
          size="normal"
          {...register({
            defaultValue: initContent || '',
            name: 'content',
            placeholder: '메모',
          })}
          maxTextLength={150}
        />
      </LabeledContainer>
      <SquareButton
        type="submit"
        variant="primary"
        onClick={isEdit ? onSubmitEdit : onSubmitRegister}
      >
        {isEdit ? '쿠폰 정보 수정' : '쿠폰 등록'}
      </SquareButton>
    </Styled.Wrapper>
  );
};

export default CouponMemberForm;
