import {
  Input,
  PhoneInput,
  INPUT_OPTIONS,
  Textarea,
  SquareButton,
  LabeledContainer,
  Select,
  DateSelect,
  GenderSelect,
} from 'gymlight-design-system';

import { GENDERS, PRODUCT_CATEGORIES, RESERVATION_PATHS } from '@/constants';

import { IBranchNameResponse, ProductCategoryType } from '@/types';

import { useReservationMemberForm } from '@/features/member';

import * as Styled from '../Form.styles';

import { useEffect } from 'react';
import { InvisibleWrapper } from '@/components';

export interface IReservationMemberFormProps {
  initMode?: 'create' | 'update' | 'view';
  initName?: string;
  initContent?: string;
  initPhone?: string;
  initBranchId?: number;
  initBranchName?: string;
  initProductType?: ProductCategoryType;
  initIsRegistered?: boolean;
  initReservationId?: number;
  initVisitDateYear?: string;
  initVisitDateMonth?: string;
  initVisitDateDay?: string;
  initVisitTime?: string;
}

const ReservationMemberForm = ({
  initMode = 'create',
  initName,
  initContent,
  initProductType,
  initPhone,
  initBranchId,
  initBranchName,
  initIsRegistered,
  initReservationId,
  initVisitDateDay,
  initVisitDateMonth,
  initVisitDateYear,
  initVisitTime,
}: IReservationMemberFormProps) => {
  const {
    selectYearRange,
    register,
    errors,
    mode,
    setMode,

    handleSubmitRegister,
    generateHandleSubmitUpdate,
    isAdmin,
    branchOptionData,
    formKey,

    handleCancelUpdateClick,
  } = useReservationMemberForm();

  useEffect(() => {
    setMode(initMode);
  }, [initMode]);

  const branchOptions =
    initBranchId && initBranchName
      ? [
          ...[{ branchId: initBranchId, name: initBranchName }],
          ...(branchOptionData
            ? branchOptionData.filter(({ branchId }) => branchId !== initBranchId)
            : []),
        ]
      : branchOptionData || ([] as IBranchNameResponse[]);

  const productTypeOptions = initProductType
    ? [
        initProductType,
        ...PRODUCT_CATEGORIES.filter((productCategory) => productCategory !== initProductType),
      ]
    : PRODUCT_CATEGORIES;

  const isRegisteredOptions = initIsRegistered ? ['등록', '미등록'] : ['미등록', '등록'];

  return (
    <Styled.Wrapper key={formKey}>
      <Styled.SmallLabeledContainerWrapper>
        <LabeledContainer labelText="이름" labelRatio={1} contentRatio={3}>
          <Input
            readOnly={mode !== 'create'}
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
        <LabeledContainer labelText="성별" labelRatio={1} contentRatio={3}>
          <GenderSelect
            disabled={mode !== 'create'}
            values={GENDERS as unknown as string[]}
            defaultValue={'남'}
            {...register({
              name: 'gender',
              validationRules: {
                required: '성별을 선택해주세요.',
              },
            })}
          />
        </LabeledContainer>
        <LabeledContainer labelText="연락처" labelRatio={1} contentRatio={3}>
          <PhoneInput
            readonly={mode !== 'create'}
            name="phone"
            placeholder="휴대폰 번호"
            defaultValue={initPhone}
            register={register}
            validationRules={INPUT_OPTIONS.PHONE}
            errors={errors}
            wide
          />
        </LabeledContainer>

        <LabeledContainer labelText="예약 경로" labelRatio={1} contentRatio={3} bold>
          <Select {...register({ name: 'reservationPath' })} disabled={mode === 'view'}>
            {RESERVATION_PATHS.map((path, index) => (
              <option key={index} value={path}>
                {path}
              </option>
            ))}
          </Select>
        </LabeledContainer>
        <LabeledContainer labelText="문의상품" labelRatio={1} contentRatio={3} bold>
          <Select {...register({ name: 'productType' })} disabled={mode === 'view'}>
            {productTypeOptions.map((aType, index) => (
              <option key={`product-type${index}`} value={aType}>
                {aType}
              </option>
            ))}
          </Select>
        </LabeledContainer>
        {isAdmin ? (
          <LabeledContainer labelText="문의 지점" labelRatio={1} contentRatio={3} bold>
            <Select
              {...register({ name: 'branchId' })}
              defaultValue={initBranchId || ''}
              disabled={mode === 'view'}
            >
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
        {/* <LabeledContainer labelText="작성자" labelRatio={1} contentRatio={3} bold>
          <Input
            {...register({
              name: 'author',
              placeholder: '작성자',
              defaultValue: initAuthor || loggedInMemberName || '',
            })}
          />
        </LabeledContainer> */}
        <LabeledContainer labelText="예약일자 " labelRatio={1} contentRatio={3} bold>
          <DateSelect
            disabled={mode === 'view'}
            name="reservationDate"
            yearRange={selectYearRange}
            register={register}
            errors={errors}
            defaultDayValue={initVisitDateDay}
            defaultMonthValue={initVisitDateMonth}
            defaultYearValue={initVisitDateYear}
          />
          <Input
            type="time"
            readOnly={mode === 'view'}
            {...register({
              name: 'visitTime',
            })}
            defaultValue={initVisitTime}
          />
        </LabeledContainer>
      </Styled.SmallLabeledContainerWrapper>
      <InvisibleWrapper isVisible={mode === 'view' || mode === 'update'}>
        <LabeledContainer labelText="등록여부" bold>
          <Select {...register({ name: 'isRegistered' })} disabled={mode === 'view'}>
            {isRegisteredOptions.map((value, index) => (
              <option value={value} key={`isRegistered-${index}`}>
                {value}
              </option>
            ))}
          </Select>
        </LabeledContainer>
      </InvisibleWrapper>
      <LabeledContainer labelText="상담내역" vertical bold>
        <Textarea
          disabled={mode === 'view'}
          size="normal"
          {...register({
            name: 'content',
            defaultValue: initContent || '',
            placeholder: '상담일지',
          })}
          placeholder="상담일지"
          maxTextLength={500}
        />
      </LabeledContainer>

      {mode === 'view' && (
        <SquareButton onClick={() => setMode('update')} wide>
          수정
        </SquareButton>
      )}
      {mode === 'update' && (
        <Styled.BottomSquareButtonContainer>
          <SquareButton
            variant="primary"
            type="submit"
            onClick={generateHandleSubmitUpdate(initReservationId!)}
          >
            수정 완료
          </SquareButton>
          <SquareButton variant="primary-outline" onClick={handleCancelUpdateClick}>
            취소
          </SquareButton>
        </Styled.BottomSquareButtonContainer>
      )}
      {mode === 'create' && (
        <SquareButton variant="primary" type="submit" onClick={handleSubmitRegister}>
          등록
        </SquareButton>
      )}
    </Styled.Wrapper>
  );
};

export default ReservationMemberForm;
