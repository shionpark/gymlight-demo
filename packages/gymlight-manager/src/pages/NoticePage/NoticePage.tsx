import { Outlet } from 'react-router';
import { ManagementSection } from 'gymlight-design-system';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

import { EnrollButton, Modal } from '@/components';
import { useUpdateFile } from '@/hooks';

import { NoticeForm, NoticeTable } from '@/features/notice/components';
import { useNoticeModal, useNoticeNavigation, useNoticeTable } from '@/features/notice/hooks';

const NoticePage = () => {
  const { openNoticeFormModal, closeModal, data } = useNoticeModal();

  const noticeTableProps = useNoticeTable();
  const noticeNavigationProps = useNoticeNavigation();

  const fileProps = useUpdateFile();

  const handleModalClose = () => {
    fileProps.resetFiles();
    closeModal();
  };

  return (
    <>
      <ManagementSection
        buttons={
          <EnrollButton
            label="공지 등록"
            Icon={PencilSquareIcon}
            size="small"
            onClick={() => openNoticeFormModal()}
          />
        }
      >
        {!noticeNavigationProps.noticeIdParam && (
          <NoticeTable
            {...noticeTableProps}
            goToNoticeDetail={noticeNavigationProps.goToNoticeDetail}
          />
        )}
      </ManagementSection>

      <Modal onClose={handleModalClose} title="공지사항 작성" size={data?.size}>
        {() => <NoticeForm {...data?.noticeFormProps} {...fileProps} />}
      </Modal>

      <Outlet context={noticeNavigationProps} />
    </>
  );
};

export default NoticePage;
