import { useMemberHoldForm } from '@/features/member/hooks';

import {
  Input,
  Textarea,
  LabeledContainer,
  SquareButton,
  DateSelect,
} from 'gymlight-design-system';

import * as Styled from './MemberHoldForm.styles';

import { MemberHoldFormWrapper } from './MemberHoldForm.styles';

export interface IMemberHoldFormProps {
  memberId: number;
}

const MemberHoldForm = ({ memberId }: IMemberHoldFormProps) => {
  const { register, getOnSubmit, startYearRange, errors, initDateValues } = useMemberHoldForm();
  const onSubmit = getOnSubmit(memberId);
  return (
    <MemberHoldFormWrapper>
      <Styled.FormInnerWrapper>
        <Styled.Row>
          <LabeledContainer labelText="홀딩 시작일" labelRatio={1} contentRatio={3} bold>
            <DateSelect
              name="startDate"
              yearRange={startYearRange}
              register={register}
              errors={errors}
              defaultYearValue={initDateValues.year}
              defaultMonthValue={initDateValues.month}
              defaultDayValue={initDateValues.day}
            />
          </LabeledContainer>

          <LabeledContainer labelText="홀딩 일수" labelRatio={1} contentRatio={3} bold>
            <Input type="number" {...register({ name: 'days' })} />
          </LabeledContainer>
        </Styled.Row>

        <LabeledContainer labelText="사유" labelRatio={1} contentRatio={3} bold vertical>
          <Textarea {...register({ name: 'reason' })} maxTextLength={150} size="normal" />
        </LabeledContainer>

        <Styled.ButtonWrapper>
          <SquareButton type="submit" onClick={onSubmit} variant="primary" wide>
            홀딩 등록
          </SquareButton>
        </Styled.ButtonWrapper>
      </Styled.FormInnerWrapper>
    </MemberHoldFormWrapper>
  );
};

export default MemberHoldForm;
