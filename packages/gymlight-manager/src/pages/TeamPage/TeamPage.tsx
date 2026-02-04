import { ManagementSection } from 'gymlight-design-system';
import { UserGroupIcon } from '@heroicons/react/24/outline';

import { EnrollButton, Modal, TabButtons } from '@/components';

import { TeamForm, TeamStaffTable } from '@/features/team/components';
import { useTeamStaffTable, useTeamModal, useTeamTable } from '@/features/team/hooks';

const TeamPage = () => {
  const { openTeamFormModal, closeModal, data, modalTitleText } = useTeamModal();

  const { activeTeamData, teamNames, getSelectTeamHandler, checkIsActiveTeam } = useTeamTable();
  const teamStaffTableProps = useTeamStaffTable(activeTeamData);

  return (
    <>
      <ManagementSection
        tabs={
          <TabButtons
            tabMenus={teamNames}
            checkIsActiveTab={checkIsActiveTeam}
            getSelectTabHandler={getSelectTeamHandler}
          />
        }
        buttons={
          <EnrollButton
            size="small"
            label="팀 생성"
            Icon={UserGroupIcon}
            onClick={() => openTeamFormModal()}
          />
        }
      >
        <TeamStaffTable {...teamStaffTableProps} />
      </ManagementSection>

      <Modal onClose={closeModal} title={modalTitleText} size={data?.size}>
        {() => <>{data?.type === 'team-form' && <TeamForm {...data?.teamFormProps} />}</>}
      </Modal>
    </>
  );
};

export default TeamPage;
