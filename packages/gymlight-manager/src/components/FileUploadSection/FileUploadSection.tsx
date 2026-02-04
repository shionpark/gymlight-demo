import { FieldRefType, IconButton, LabeledContainer, SquareButton } from 'gymlight-design-system';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { IAttachmentFileRequest } from '@/types';

import * as Styled from './FileUploadSection.styles';

export interface IFileUploadSectionProps {
  fileRef: FieldRefType<HTMLInputElement>;
  filesInfo: IAttachmentFileRequest[];
  handleFileChange: () => void;
  handleFileClear: (id: number) => void;
  resetFiles: () => void;
}

const FileUploadSection = ({
  fileRef,
  filesInfo,
  handleFileChange,
  handleFileClear,
}: IFileUploadSectionProps) => {
  const hasFiles = filesInfo.length > 0;

  const handleFileButtonClick = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  return (
    <LabeledContainer labelText="첨부파일" contentRatio={3}>
      {hasFiles && (
        <Styled.FileInfo>
          {filesInfo.map((file) => (
            <Styled.FileInfo key={file.attachmentId}>
              <span>{`${file.fileName}.${file.fileType.toLowerCase()}`}</span>
              <IconButton
                className="file-cancel"
                size="small"
                icon={<XMarkIcon />}
                onClick={() => handleFileClear(file.attachmentId)}
              />
            </Styled.FileInfo>
          ))}
        </Styled.FileInfo>
      )}
      <SquareButton type="button" variant="outline" wide onClick={handleFileButtonClick}>
        파일 업로드
      </SquareButton>
      <Styled.FileInput type="file" ref={fileRef} onChange={handleFileChange} />
    </LabeledContainer>
  );
};

export default FileUploadSection;
