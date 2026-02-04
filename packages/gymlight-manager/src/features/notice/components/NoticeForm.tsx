import { useRecoilValue } from 'recoil';
import {
  Input,
  LabeledContainer,
  Select,
  SquareButton,
  Textarea,
} from 'gymlight-design-system';

import { activeBranchState } from '@/states';
import { UseUpdateFileProps } from '@/hooks';
import { FileUploadSection } from '@/components';

import { useBranchNameList } from '@/features/branch';
import { NOTICE_TYPES, NoticeTypes } from '@/features/notice/constant';
import {
  useNoticeFormState,
  useNoticeFormValidation,
} from '@/features/notice/hooks';

import * as Styled from './NoticeForm.styles';

export interface NoticeFormProps {
  isEdit?: boolean;
  initTitle?: string;
  initContent?: string;
  initType?: NoticeTypes;
  initStartDate?: string;
  initEndDate?: string;
  initBranchId?: number;
  initFiles?: boolean;
  formRef?: React.RefObject<HTMLFormElement>;
}

export interface INoticeFormProps extends NoticeFormProps, UseUpdateFileProps {
}

const NoticeForm = ({
  isEdit,
  initTitle,
  initContent,
  initType,
  initStartDate,
  initEndDate,
  initBranchId,
  initFiles,
  formRef,
  fileRef,
  filesInfo,
  handleFileChange,
  handleFileClear,
  resetFiles,
}: INoticeFormProps) => {
  const currentBranch = useRecoilValue(activeBranchState);

  const { data: branchNameList } = useBranchNameList();

  const { register, handleSubmitCreateNotice } = useNoticeFormValidation(isEdit);

  const {
    dateInputs: { startDate, endDate },
    changeDateInputs,
  } = useNoticeFormState({ initStartDate, initEndDate });

  return (
    <form
      ref={formRef}
      className="form"
      onSubmit={handleSubmitCreateNotice({ startDate, endDate, files: filesInfo })}
    >
      <LabeledContainer labelText="구분" contentRatio={3}>
        <Select
          {...register({
            name: 'type',
            defaultValue: initType,
          })}
        >
          {NOTICE_TYPES.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </Select>
      </LabeledContainer>
      <LabeledContainer labelText="지점" contentRatio={3}>
        <Select
          {...register({
            name: 'branchIdStr',
            defaultValue: initBranchId || currentBranch?.branchId,
          })}
        >
          <option value={0}>전 지점</option>
          {branchNameList?.map(({ branchId, name }) => (
            <option key={branchId} value={branchId}>
              {name}
            </option>
          ))}
        </Select>
      </LabeledContainer>
      <LabeledContainer labelText="제목" contentRatio={3}>
        <Input
          type="text"
          {...register({
            name: 'title',
            placeholder: '제목을 입력해주세요.',
            defaultValue: initTitle,
          })}
        />
      </LabeledContainer>
      <FileUploadSection
        fileRef={fileRef}
        filesInfo={filesInfo}
        handleFileChange={handleFileChange}
        handleFileClear={handleFileClear}
        resetFiles={resetFiles}
      />
      <LabeledContainer labelText="내용" contentRatio={3} labelAlign="start">
        <Textarea
          {...register({
            name: 'content',
            placeholder: '내용을 입력해주세요.',
          })}
          size={24}
          maxTextLength={200}
        />
      </LabeledContainer>
      <LabeledContainer labelText="공지 기간" contentRatio={3}>
        <Styled.DateSection>
          <LabeledContainer labelText="시작" contentRatio={3}>
            <Input type="date" name="startDate" value={startDate} onChange={changeDateInputs} />
          </LabeledContainer>
          <LabeledContainer labelText="종료" contentRatio={3}>
            <Input type="date" name="endDate" value={endDate} onChange={changeDateInputs} />
          </LabeledContainer>
        </Styled.DateSection>
      </LabeledContainer>
      <SquareButton variant="primary">등록</SquareButton>
    </form>
  );
};

export default NoticeForm;
