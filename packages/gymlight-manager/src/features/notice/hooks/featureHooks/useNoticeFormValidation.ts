import { useForm } from 'gymlight-design-system';

import { hasEmptyFields, validateDates } from '@/utils';
import type { IAttachmentFileRequest, ICreateNoticeRequest, IUpdateNoticeRequest } from '@/types';

import { useNoticeModal } from './useNoticeModal';
import { useCreateNotice, useUpdateNotice } from '../mutateHooks';

interface UseNoticeFormValidationProps {
  startDate: string;
  endDate: string;
  files?: IAttachmentFileRequest[];
}

interface NoticeFormFields extends ICreateNoticeRequest {
  branchIdStr: string;
}

export const useNoticeFormValidation = (isEdit?: boolean) => {
  const { closeModal } = useNoticeModal();

  const { register, handleSubmit, reset } = useForm<NoticeFormFields>();

  const onSuccessAdditional = () => {
    closeModal();
    if (reset) reset();
    window.location.reload();
  };

  const { mutate: createNotice } = useCreateNotice({
    onSuccessAdditional,
  });
  const { mutate: updateNotice } = useUpdateNotice({
    onSuccessAdditional,
  });

  const isValid = (formRef: NoticeFormFields): boolean => {
    const alertMessage = isEdit ? '공지를 수정하시겠습니까?' : '공지를 등록하시겠습니까?';
    if (hasEmptyFields(formRef)) {
      alert('모든 필수 값을 입력해주세요.');
      return false;
    }
    if (!confirm(alertMessage)) return false;
    return true;
  };

  const onValidCreateNotice = ({ startDate, endDate, files }: UseNoticeFormValidationProps) => {
    return async (formRef: NoticeFormFields) => {
      if (!isValid(formRef)) return;

      const { title, content, type, branchIdStr } = formRef;

      // const isValidDate = validateDates(new Date(startDateState), new Date(endDateState));
      // if (!isValidDate) {
      //   alert('잘못된 기간 정보입니다.');
      // }

      const payload: ICreateNoticeRequest = {
        title,
        content,
        type,
        startDate,
        endDate,
        attachments: files,
      };

      if (branchIdStr !== '0') {
        payload.branchId = Number(branchIdStr);
      }
      console.log('PAYLOAD: ', payload);
      createNotice(payload);
    };
  };

  const handleSubmitCreateNotice = (
    state: UseNoticeFormValidationProps,
    // branchId?: number,
  ) => {
    const onValid = onValidCreateNotice(state);
    return handleSubmit(onValid);
  };

  return {
    register,
    handleSubmitCreateNotice,
  };
};
