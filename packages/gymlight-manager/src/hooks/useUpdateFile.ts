import { useRef, useState } from 'react';

import type { FileTypes, IAttachmentFileRequest } from '@/types';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB 제한 예시
const ALLOWED_FILE_TYPES:FileTypes[] = ['JPG', 'JPEG', 'PNG', 'PDF']; // 허용 파일 타입 예시

export const useUpdateFile = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const fileIdRef = useRef(1);
  const lastHandledFilesRef = useRef<string[]>([]);
  const [filesInfo, setFilesInfo] = useState<IAttachmentFileRequest[]>([]);

  const isValidFile = (file: File) => {
    const extension = file.name.split('.').pop()?.toLowerCase() as FileTypes;
    return (
      file.size <= MAX_FILE_SIZE && (extension ? ALLOWED_FILE_TYPES.includes(extension) : false)
    );
  };

  const handleFileChange = () => {
    const fileList = fileRef.current?.files;
    if (!fileList) return;

    const selectedFiles = Array.from(fileList);

    // 파일 키 (이름 + 크기 + 수정시간) 조합
    const fileKeys = selectedFiles.map((f) => f.name + f.size + f.lastModified);

    // Strict Mode 대응: 같은 이벤트 두 번 발생 방지
    if (
      fileKeys.length === lastHandledFilesRef.current.length &&
      fileKeys.every((key, i) => key === lastHandledFilesRef.current[i])
    ) {
      return;
    }
    lastHandledFilesRef.current = fileKeys;

    // 유효성 검사 (사이즈/타입)
    const validFiles = selectedFiles.filter((file) => isValidFile(file));
    if (validFiles.length !== selectedFiles.length) {
      alert('허용되지 않는 파일이 포함되어 있습니다. (5MB 이하, jpg/png/pdf만 허용)');
    }

    // 파일 정보 변환
    const newFiles: IAttachmentFileRequest[] = selectedFiles.map((file) => {
      const fileName = file.name.split('.')[0];
      const url = URL.createObjectURL(file).replace('blob:', '').trim();
      const fileType =
        (file.name.split('.').pop()?.toUpperCase() as FileTypes) || ('' as FileTypes);

      return {
        attachmentId: fileIdRef.current++,
        fileName,
        url,
        fileType,
        file,
      };
    });

    setFilesInfo((prev) => [...prev, ...newFiles]);

    // input 초기화 (동일 파일 다시 업로드 가능하게)
    if (fileRef.current) fileRef.current.value = '';
  };

  const handleFileClear = (idToRemove: number) => {
    setFilesInfo((prev) => prev.filter((file) => file.attachmentId !== idToRemove));
  };

  const resetFiles = () => {
    fileIdRef.current = 1;
    setFilesInfo([]);
    if (fileRef.current) fileRef.current.value = '';
  };

  return {
    fileRef,
    filesInfo,
    handleFileChange,
    handleFileClear,
    resetFiles,
  };
};

export interface UseUpdateFileProps extends ReturnType<typeof useUpdateFile> {}
