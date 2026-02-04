import { memo, useEffect } from 'react';
import { Input, LabeledContainer, Select, SquareButton } from 'gymlight-design-system';

import { DynamicInputFields } from '@/components';
import type { TeamDepartmentType } from '@/types';

import { TEAM_DEPARTMENTS } from '@/features/team/constants';
import { useTeamFormValidation, useTeamFormState } from '@/features/team/hooks';

import * as Styled from './TeamForm.styles';

export interface ITeamFormProps {
  isEdit?: boolean;
  isPlusStaff?: boolean;
  initTeamId?: number;
  initTeamName?: string;
  initDepartment?: TeamDepartmentType;
  initTeamLeaderId?: number;
  initTeamStaffIds?: number[];
}

const TeamForm = ({
  isEdit,
  isPlusStaff,
  initTeamId,
  initTeamName,
  initDepartment,
  initTeamLeaderId,
  initTeamStaffIds,
}: ITeamFormProps) => {
  const { register, submitTeamForm } = useTeamFormValidation(isEdit);

  const {
    teamStaffIds,
    changeTeamStaffs,
    activeDepartment,
    selectDepartment,
    setActiveDepartment,
    staffData,
    leaderStaffData,
  } = useTeamFormState();

  useEffect(() => {
    if (isEdit && initDepartment) {
      setActiveDepartment(initDepartment);
    }
  }, [isEdit, initDepartment]);

  return (
    <Styled.Form
      onSubmit={submitTeamForm({
        teamId: initTeamId,
        teamStaffIds,
        department: activeDepartment,
      })}
    >
      <LabeledContainer
        labelText="팀 이름"
        vertical
        style={{ display: isPlusStaff ? 'none' : 'block' }}
      >
        <Input
          type="text"
          {...register({
            name: 'name',
            placeholder: '팀 이름을 입력하세요.',
            defaultValue: initTeamName,
          })}
        />
      </LabeledContainer>
      <LabeledContainer
        labelText="부서"
        vertical
        style={{ display: isPlusStaff ? 'none' : 'block' }}
      >
        <Select value={activeDepartment} onChange={selectDepartment} disabled={isEdit}>
          {Object.entries(TEAM_DEPARTMENTS).map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </LabeledContainer>
      <LabeledContainer
        labelText="팀장"
        vertical
        style={{ display: isPlusStaff ? 'none' : 'block' }}
      >
        <Select
          {...register({
            name: 'teamLeaderId',
            defaultValue: initTeamLeaderId,
          })}
          disabled={isEdit}
        >
          <Styled.SelectedOption selected disabled>
            팀장을 선택해주세요.
          </Styled.SelectedOption>
          {leaderStaffData?.map(({ staffId, name, phone }) => (
            <option key={staffId} value={staffId} selected={staffId === initTeamLeaderId}>
              {name} / {phone}
            </option>
          ))}
        </Select>
      </LabeledContainer>

      <DynamicInputFields
        labelText="팀원"
        vertical
        defaultValue={initTeamStaffIds}
        onChange={changeTeamStaffs}
      >
        {({ value, onChange }) => (
          <Select value={value} onChange={(e) => onChange(Number(e.target.value))}>
            <Styled.SelectedOption selected>팀원을 선택해주세요.</Styled.SelectedOption>
            {staffData.map(({ staffId, name, phone }) => (
              <option key={staffId} value={staffId}>
                {name} / {phone}
              </option>
            ))}
          </Select>
        )}
      </DynamicInputFields>
      <SquareButton type="submit" wide variant="primary">
        {isEdit ? '수정' : '등록'}
      </SquareButton>
    </Styled.Form>
  );
};

export default memo(TeamForm);
