import {
  DateSelect,
  LabeledContainer,
  SquareButton,
  Select,
  Input,
  Textarea,
} from 'gymlight-design-system';

import { SCHEDULE_STATUSES, SCHEDULE_TYPES } from '@/constants';
import { IActiveMemberResponse, ScheduleStatusType } from '@/types';

import { useScheduleForm } from '@/features/myWork';

import * as Styled from './ScheduleForm.styles';
import { InvisibleWrapper, SignaturePad } from '@/components';

export interface IScheduleFormProps {
  startDateYear?: string;
  startDateMonth?: string;
  startDateDay?: string;
  endDateYear?: string;
  endDateMonth?: string;
  endDateDay?: string;
  scheduledStartTime?: string;
  scheduledEndTime?: string;
  title?: string;
  description?: string;
  scheduledId?: number;
  initMemberId?: number;
  initScheduleId?: number;
  memberName?: string;
  memberPhone?: string;
  initStatus?: ScheduleStatusType;
  initMode?: 'register' | 'view' | 'edit' | 'signature';
}

const ScheduleForm = ({
  startDateYear,

  startDateMonth,

  startDateDay,
  endDateYear,
  endDateMonth,
  endDateDay,
  scheduledStartTime,
  scheduledEndTime,
  title,
  description,
  initMode,
  initMemberId,
  memberName,
  memberPhone,
  initScheduleId,
  initStatus,
}: IScheduleFormProps) => {
  const {
    formKey,
    register,
    handleClickCancelButton,
    handleClickEditButton,
    handleSubmitRegister,
    handleSubmitUpdate,

    members,
    mode,
    isUnEditable,
    signaturePadProps,
    toggleRenderSignaturePad,
    handleSubmitSignature,
    signaturePdfRef,
    signatureImage,
  } = useScheduleForm({
    initMode: initMode,
    initScheduleId,
  });

  const memberOptions =
    initMemberId && memberName && memberPhone
      ? [
          { memberId: initMemberId, name: memberName, phone: memberPhone },
          ...(members?.filter(({ memberId }) => memberId !== initMemberId) || []),
        ]
      : members || ([] as IActiveMemberResponse[]);

  const statusOptions = initStatus
    ? [initStatus, ...SCHEDULE_STATUSES.filter((status) => status !== initStatus)]
    : SCHEDULE_STATUSES;

  return (
    <>
      <Styled.Wrapper key={formKey}>
        <Styled.SideWrapper>
          <LabeledContainer labelText="일정 이름" vertical>
            <Input
              type="text"
              {...register({ name: 'title', defaultValue: title })}
              readOnly={mode === 'view'}
            />
          </LabeledContainer>
          <LabeledContainer labelText="일정 종류" vertical>
            <Select
              {...register({ name: 'scheduleType', defaultValue: initStatus })}
              disabled={isUnEditable}
            >
              {SCHEDULE_TYPES.map((scheduleType) => (
                <option value={scheduleType}>
                  {scheduleType === 'NORMAL' ? '일반' : scheduleType}
                </option>
              ))}
            </Select>
          </LabeledContainer>
          <LabeledContainer labelText="내용" vertical>
            <Textarea
              disabled={mode === 'view'}
              size="normal"
              maxTextLength={30}
              {...register({ name: 'description', defaultValue: description })}
            />
          </LabeledContainer>
        </Styled.SideWrapper>
        <Styled.SideWrapper>
          <LabeledContainer labelText="시작 시각" vertical>
            <Styled.DateTimeWrapper>
              <DateSelect
                disabled={mode === 'view'}
                name="startDate"
                register={register}
                errors={{}}
                defaultYearValue={startDateYear}
                defaultMonthValue={startDateMonth}
                defaultDayValue={startDateDay}
              />
              <Input
                {...register({ name: 'scheduledStartTime', defaultValue: scheduledStartTime })}
                type="time"
                readOnly={mode === 'view'}
              />
            </Styled.DateTimeWrapper>
          </LabeledContainer>

          <LabeledContainer labelText="종료 시각" vertical>
            <Styled.DateTimeWrapper>
              <DateSelect
                name="endDate"
                register={register}
                errors={{}}
                defaultYearValue={endDateYear || startDateYear}
                defaultMonthValue={endDateMonth || startDateMonth}
                defaultDayValue={endDateDay || startDateDay}
                disabled={mode === 'view'}
              />
              <Input
                {...register({ name: 'scheduledEndTime', defaultValue: scheduledEndTime })}
                type="time"
                readOnly={mode === 'view'}
              />
            </Styled.DateTimeWrapper>
          </LabeledContainer>

          <LabeledContainer labelText="담당 회원" vertical>
            <Select
              {...register({ name: 'memberId', defaultValue: initMemberId })}
              disabled={isUnEditable}
            >
              {memberOptions.map(({ memberId, name, phone }) => (
                <option value={memberId}>{`${name}/${phone}`}</option>
              ))}
            </Select>
          </LabeledContainer>

          <LabeledContainer labelText="일정 상태" vertical>
            <Select {...register({ name: 'status' })} disabled={mode === 'view'}>
              {statusOptions.map((status) => (
                <option value={status}>{status}</option>
              ))}
            </Select>
          </LabeledContainer>

          {mode === 'view' ? (
            <Styled.ButtonContainer>
              <SquareButton onClick={handleClickEditButton}>수정</SquareButton>
              <SquareButton onClick={toggleRenderSignaturePad} disabled={initStatus === '완료'}>
                일정 완료
              </SquareButton>
            </Styled.ButtonContainer>
          ) : mode === 'edit' ? (
            <Styled.ButtonContainer>
              <SquareButton size="normal" variant="primary" wide onClick={handleClickCancelButton}>
                취소
              </SquareButton>
              <SquareButton size="normal" variant="primary" wide onClick={handleSubmitUpdate}>
                수정 완료
              </SquareButton>
            </Styled.ButtonContainer>
          ) : mode === 'register' ? (
            <SquareButton size="normal" variant="primary" wide onClick={handleSubmitRegister}>
              등록
            </SquareButton>
          ) : mode === 'signature' ? (
            <SquareButton
              size="normal"
              variant="primary-outline"
              wide
              onClick={toggleRenderSignaturePad}
            >
              취소
            </SquareButton>
          ) : (
            ''
          )}
        </Styled.SideWrapper>
      </Styled.Wrapper>
      <InvisibleWrapper isVisible={mode === 'signature'}>
        <Styled.SideWrapper>
          <Styled.SignatureWrapper>
            <SignaturePad title="수업 완료 회원 서명" {...signaturePadProps} />
          </Styled.SignatureWrapper>

          <SquareButton
            onClick={handleSubmitSignature}
            disabled={signaturePadProps.mode !== 'complete'}
            variant="primary"
            wide
          >
            서명 제출
          </SquareButton>
        </Styled.SideWrapper>
      </InvisibleWrapper>
      <InvisibleWrapper>
        <Styled.RequestWrapper ref={signaturePdfRef}>
          <Styled.SignatureImageForRequest src={signatureImage} />
        </Styled.RequestWrapper>
      </InvisibleWrapper>
    </>
  );
};
export default ScheduleForm;
