import { ManagementSection } from 'gymlight-design-system';
import { PlusIcon } from '@heroicons/react/24/outline';

import { EnrollButton, Modal, TabButtons } from '@/components';

import { MemberDetailManagementSection, useMemberModals } from '@/features/member';

import {
  LockerGroupForm,
  LockerMoveForm,
  LockerTable,
  MemberSearchForm,
} from '@/features/locker/components';
import { useLockerModals, useLockerTable } from '@/features/locker/hooks';

const LockerPage = () => {
  const lockerTableProps = useLockerTable();

  const {
    lockerGroupProps: {
      lockerGroupNames,
      checkIsActiveLockerGroupName,
      getSelectLockerGroupNameHandler,
      activeLockerGroupData,
    },
    memberSearchProps,
  } = lockerTableProps;

  const { closeModal, openLockerGroupFormModal, data, modalTitleText } = useLockerModals();
  const { data: memberModalData } = useMemberModals();

  return (
    <>
      <ManagementSection
        tabs={
          <TabButtons
            tabMenus={lockerGroupNames}
            totalElements={activeLockerGroupData?.quantity}
            checkIsActiveTab={checkIsActiveLockerGroupName}
            getSelectTabHandler={getSelectLockerGroupNameHandler}
          />
        }
        buttons={
          <EnrollButton
            size="small"
            label="락커 그룹 생성"
            Icon={PlusIcon}
            onClick={() => openLockerGroupFormModal()}
          />
        }
      >
        <LockerTable {...lockerTableProps} />
      </ManagementSection>

      <Modal title={modalTitleText} size={data?.size} onClose={closeModal}>
        {() => (
          <>
            {data?.type === 'locker-group' && (
              <LockerGroupForm {...lockerTableProps} {...data?.lockerFormProps} />
            )}
            {data?.type === 'locker-member-search' && <MemberSearchForm {...memberSearchProps} />}
            {data?.type === 'member-details' && (
              <MemberDetailManagementSection
                {...memberModalData?.memberDetailManagementSectionProps}
              />
            )}
            {data?.type === 'locker-member-move' && (
              <LockerMoveForm {...data?.lockerMoveFormProps} />
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default LockerPage;
