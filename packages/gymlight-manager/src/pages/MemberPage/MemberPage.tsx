import { useState } from 'react';

import { UserPlusIcon } from '@heroicons/react/24/solid';

import { DualSideBar, SquareButton, TabButton } from 'gymlight-design-system';

import * as Styled from './MemberPage.styles';

import { Modal } from '@/components';
import { useToggleTabMenu } from '@/hooks';

import {
  CouponMemberTable,
  ReservationMemberTable,
  RegisteredMemberTable,
  ContractWritingSection,
  useMemberModals,
  CouponMemberForm,
  ReservationMemberForm,
} from '@/features/member';
import { MemberDetailManagementSection } from '@/features/member/components/MemberDetailManagementSection';

const MemberPage = () => {
  const {
    openCouponMemberFormModal,
    openMemberDetailsModal,
    openReservationMemberFormModal,
    data,
    closeModal,
    modalTitleText,
  } = useMemberModals();

  const [isWritingContract, setIsWritingContract] = useState(false);
  const toggleIsWriting = () => {
    if (isWritingContract) if (!confirm('계약서 작성을 중단하시겠습니까?')) return;
    setIsWritingContract((prev) => !prev);
  };

  const tabMenus = ['등록 회원', '쿠폰 회원', '예약 회원'] as const;
  const { activeTab, getSelectTabHandler, checkIsActiveTab } = useToggleTabMenu(tabMenus);

  const tabButtons = tabMenus.map((tabName) => (
    <TabButton active={checkIsActiveTab(tabName)} onClick={getSelectTabHandler(tabName)}>
      {tabName}
    </TabButton>
  ));

  const registerButtons = {
    '등록 회원': (
      <SquareButton variant="primary" size="normal" wide onClick={toggleIsWriting}>
        <UserPlusIcon />
        회원등록
      </SquareButton>
    ),
    '쿠폰 회원': (
      <SquareButton
        variant="primary"
        size="normal"
        wide
        onClick={() => openCouponMemberFormModal()}
      >
        <UserPlusIcon />
        <span>쿠폰등록</span>
      </SquareButton>
    ),
    '예약 회원': (
      <SquareButton
        variant="primary"
        size="normal"
        wide
        onClick={() => openReservationMemberFormModal({ initMode: 'create' })}
      >
        <UserPlusIcon />
        <span>예약등록</span>
      </SquareButton>
    ),
  };

  return (
    <Styled.Wrapper>
      {isWritingContract ? (
        <ContractWritingSection handleClose={toggleIsWriting} />
      ) : (
        <>
          <DualSideBar
            className="content-header"
            leftSideChildren={tabButtons}
            rightSideChildren={[registerButtons[activeTab]]}
          />
          {activeTab === '쿠폰 회원' && <CouponMemberTable />}
          {activeTab === '등록 회원' && (
            <RegisteredMemberTable openMemberDetailsModal={openMemberDetailsModal} />
          )}
          {activeTab === '예약 회원' && <ReservationMemberTable />}
        </>
      )}
      <Modal title={modalTitleText} onClose={closeModal} size={data?.size}>
        {() => (
          <>
            {data?.type === 'member-details' && (
              <MemberDetailManagementSection {...data?.memberDetailManagementSectionProps} />
            )}
            {data?.type === 'coupon' && <CouponMemberForm {...data?.couponMemberFormProps} />}
            {data?.type === 'reservation' && (
              <ReservationMemberForm {...data?.reservationMemberFormProps} />
            )}
          </>
        )}
      </Modal>
    </Styled.Wrapper>
  );
};

export default MemberPage;
