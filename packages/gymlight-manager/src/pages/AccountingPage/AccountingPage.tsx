import { TabButton } from 'gymlight-design-system';
import { ManagementSection, Modal } from '@/components';

import { useToggleTabMenu } from '@/hooks';

import {
  SalaryVariableForm,
  SalarySettlementTable,
  useAccountingModals,
  SalarySettlementForm,
} from '@/features/accounting';

const AccountingPage = () => {
  const { data: modalData, modalTitleText, closeModal } = useAccountingModals();

  const tabMenus = ['정산 목록', `급여 변수`] as const;

  const { activeTab, getSelectTabHandler, checkIsActiveTab } = useToggleTabMenu(tabMenus);

  const tabButtons = tabMenus.map((tabName) => (
    <TabButton active={checkIsActiveTab(tabName)} onClick={getSelectTabHandler(tabName)}>
      {tabName}
    </TabButton>
  ));

  return (
    <>
      <ManagementSection tabs={tabButtons}>
        {activeTab === '정산 목록' && <SalarySettlementTable />}
        {activeTab === '급여 변수' && <SalaryVariableForm />}
      </ManagementSection>
      <Modal title={modalTitleText} onClose={closeModal} size={modalData?.size}>
        {() => (
          <>
            {modalData?.type === 'salary-settlement' && (
              <SalarySettlementForm {...modalData?.salarySettlementFormProps} />
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default AccountingPage;
