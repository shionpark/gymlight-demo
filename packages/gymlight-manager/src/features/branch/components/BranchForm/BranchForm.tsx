import {
  Input,
  SquareButton,
  INPUT_OPTIONS,
  LabeledContainer,
  DateSelect,
} from 'gymlight-design-system';

import { stopPropagation } from '@/utils';

import { AddressSearchBox } from '@/components';

import { useBranchForm } from '@/features/branch';

import * as Styled from './BranchForm.styles';

export interface IBranchFormProps {
  isEdit?: boolean;
  initAddress?: string;
  branchId?: number;
  initTel?: string;
  initName?: string;
  initCode?: string;
  initOpenYear?: string;
  initOpenMonth?: string;
  initOpenDay?: string;
}

const BranchForm = ({
  isEdit,
  initAddress,
  initName,
  branchId,
  initTel,
  initCode,
  initOpenYear,
  initOpenMonth,
  initOpenDay,
}: IBranchFormProps) => {
  const {
    register,
    errors,
    address,
    showAddressBox,
    setShowAddressBox,
    handleAddressChange,
    handleErrorChange,
    handleSubmitCreateBranch,
    handleSubmitUpdateBranch,
    yearRange,
  } = useBranchForm();

  return (
    <Styled.Wrapper>
      <Styled.Form
        onSubmit={isEdit ? handleSubmitUpdateBranch(branchId!) : handleSubmitCreateBranch}
        onMouseDown={stopPropagation}
      >
        <LabeledContainer labelText="지점명" labelRatio={1} contentRatio={3} bold vertical>
          <Input
            type="text"
            errorMessage={errors.name}
            {...register({
              name: 'name',
              placeholder: '지점 이름',
              defaultValue: initName || '',
              validationRules: INPUT_OPTIONS.BRANCH_NAME,
            })}
          />
        </LabeledContainer>
        <LabeledContainer labelText="지점코드" labelRatio={1} contentRatio={3} bold vertical>
          <Input
            errorMessage={errors.code}
            type="text"
            {...register({
              name: 'code',
              placeholder: '지점 코드',
              defaultValue: initCode || '',
              validationRules: INPUT_OPTIONS.BRANCH_CODE,
            })}
          />
        </LabeledContainer>
        <LabeledContainer labelText="주소" labelRatio={1} contentRatio={3} bold vertical>
          <div>
            <Input
              type="text"
              readOnly
              value={address || initAddress || ''}
              {...register({
                name: 'address',
                placeholder: '주소 찾기를 통해 주소를 입력해주세요',
              })}
            />
            <SquareButton
              wide
              type="button"
              size="small"
              variant={showAddressBox ? 'outline' : 'normal'}
              onClick={() => setShowAddressBox((prev: boolean) => !prev)}
            >
              {showAddressBox ? '닫기' : '주소 찾기'}
            </SquareButton>
          </div>
          {showAddressBox && (
            <Styled.AddressBoxContainer>
              <AddressSearchBox
                takeAddressState={handleAddressChange}
                takeErrorState={handleErrorChange}
              />
            </Styled.AddressBoxContainer>
          )}
        </LabeledContainer>
        <LabeledContainer labelText="전화번호" labelRatio={1} contentRatio={3} bold vertical>
          <Input
            type="text"
            errorMessage={errors.tel}
            {...register({
              name: 'tel',
              placeholder: '지점 전화번호를 입력하세요.',
              defaultValue: initTel || '',
              validationRules: INPUT_OPTIONS.TEL,
            })}
          />
        </LabeledContainer>
        <LabeledContainer labelText="오픈 날짜" labelRatio={1} contentRatio={3} bold vertical>
          <DateSelect
            name="openDate"
            yearRange={yearRange}
            register={register}
            errors={errors}
            defaultYearValue={initOpenYear}
            defaultMonthValue={initOpenMonth}
            defaultDayValue={initOpenDay}
          />
        </LabeledContainer>
        <SquareButton size="normal" variant="primary" wide>
          {isEdit ? '지점 정보 수정' : '지점 등록'}
        </SquareButton>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default BranchForm;
