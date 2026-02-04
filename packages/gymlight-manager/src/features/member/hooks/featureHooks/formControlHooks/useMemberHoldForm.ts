import { useForm } from 'gymlight-design-system';

import { useHoldMember } from '@/features/member';
import {
  formatYYYYMMDD,
  getDateAfterNDaysFromDate,
  getEachDateTimePartsFromDate,
  getFormattedDate,
} from '@/utils';

interface IHoldingRequestForm {
  days: number;
  reason: string;
  startDateYear: string;
  startDateMonth: string;
  startDateDay: string;
}

export const useMemberHoldForm = () => {
  const year = new Date().getFullYear();
  const startYearRange = [year, year + 1];

  const initDateValues = getEachDateTimePartsFromDate(new Date());

  const { mutate } = useHoldMember();

  const { register, handleSubmit, errors } = useForm<IHoldingRequestForm>();

  const getOnSubmit = (memberId: number) => {
    const onValid = async (form: IHoldingRequestForm) => {
      const { days, reason, startDateYear, startDateMonth, startDateDay } = form;
      const startDateValue = formatYYYYMMDD(startDateYear, startDateMonth, startDateDay);

      if (!days) {
        alert('홀딩 일수를 입력해주세요.');
        return;
      }

      if (!reason) {
        alert('개별 홀딩은 사유가 필요합니다.');
        return;
      }

      const startDateObj = new Date(startDateValue);
      const startDateMessageString = getFormattedDate(startDateObj);

      const endDate = getDateAfterNDaysFromDate(new Date(startDateValue), +days);
      const endDateMessageString = getFormattedDate(endDate);

      const message =
        `다음과 같은 정보로 홀딩을 진행할까요?\n\n` +
        `📅 기간: ${days}일\n\n` +
        `🗓 시작일: ${startDateMessageString}\n` +
        `🗓 종료일: ${endDateMessageString}\n` +
        `📝 사유: ${reason || '없음'}`;

      if (!window.confirm(message)) return;

      mutate({
        days: +days,
        reason,
        startDate: startDateValue,
        memberId,
      });
    };
    return handleSubmit(onValid);
  };

  return { register, getOnSubmit, errors, startYearRange, initDateValues };
};
