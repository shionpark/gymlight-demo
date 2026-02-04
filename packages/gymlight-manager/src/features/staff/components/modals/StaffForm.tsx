import { LabeledContainer, Select, SquareButton, useForm } from 'gymlight-design-system';

import { useToggleTabMenu } from '@/hooks';
import type { IUpdateStaffRequest, UserRoleType, UserStatusType } from '@/types';

import { useBranchNameList } from '@/features/branch';

import { STAFF_ROLLS } from '@/features/staff/constants';
import { IStaffTableProps, useUpdateStaff } from '@/features/staff/hooks';

import * as Styled from './StaffForm.styles';

interface StaffApprovalFormProps extends IStaffTableProps {
  staffId: number;
  staffStatus: UserStatusType;
  branchName: string;
  staffRoleName: UserRoleType;
  closeModal: () => void;
}

const StaffForm = ({ staffId, branchName, staffRoleName, closeModal }: StaffApprovalFormProps) => {
  const { data: branchNameList } = useBranchNameList();

  const { register, handleSubmit } = useForm<IUpdateStaffRequest>();

  const { mutate: updateStaffInfo } = useUpdateStaff({
    onSuccessAdditional: () => {
      closeModal();
    },
  });

  const selectableStatusOptions = ['활성화', '승인거부'] as UserStatusType[];

  const { activeTab, checkIsActiveTab, getSelectTabHandler } =
    useToggleTabMenu(selectableStatusOptions);

  const onValid = async (form: IUpdateStaffRequest) => {
    const { staffRoleName, branchName } = form;

    if (confirm('직원 정보를 수정하시겠습니까?')) {
      updateStaffInfo({
        staffId,
        staffRoleName,
        staffStatus: activeTab,
        branchName,
      });
    }
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onValid)}>
      <LabeledContainer labelText="상태" contentRatio={2}>
        <Styled.ButtonsWrapper>
          {selectableStatusOptions.map((option, index) => (
            <SquareButton
              type="button"
              key={index}
              size="small"
              variant={checkIsActiveTab(option) ? 'normal' : 'outline'}
              onClick={getSelectTabHandler(option)}
            >
              {option}
            </SquareButton>
          ))}
        </Styled.ButtonsWrapper>
      </LabeledContainer>
      <LabeledContainer labelText="지점" contentRatio={2}>
        <Select
          disabled={checkIsActiveTab('승인거부')}
          {...register({
            name: 'branchName',
            defaultValue: branchName,
          })}
        >
          {branchNameList?.map((branch) => (
            <option key={branch.branchId} value={branch.name}>
              {branch.name}
            </option>
          ))}
        </Select>
      </LabeledContainer>
      <LabeledContainer labelText="직급" contentRatio={2}>
        <Select
          disabled={checkIsActiveTab('승인거부')}
          {...register({
            name: 'staffRoleName',
            defaultValue: staffRoleName,
          })}
        >
          {STAFF_ROLLS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </LabeledContainer>
      <SquareButton variant="primary">업데이트 </SquareButton>
    </Styled.Form>
  );
};

export default StaffForm;
