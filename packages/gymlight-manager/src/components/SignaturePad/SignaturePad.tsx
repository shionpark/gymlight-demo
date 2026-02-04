import { CanvasHTMLAttributes } from 'react';

import { DualSideBar, Canvas, SquareButton } from 'gymlight-design-system';

import * as Styled from './SignaturePad.styles';

import {
  ArrowPathIcon as ClearIcon,
  CheckIcon as CompleteIcon,
  PencilSquareIcon as EditIcon,
  XMarkIcon as ResetIcon,
} from '@heroicons/react/24/outline';

interface SignaturePadProps {
  title?: string;
  mode?: 'waiting' | 'editing' | 'complete';
  defaultZIndex?: number;

  resetSignaturePad: () => void;
  clearSignature: () => void;
  completeSignature: () => void;
  editSignature: () => void;

  signatureData?: string;
  canvasProps: CanvasHTMLAttributes<HTMLCanvasElement>;
}

const SignaturePad = ({
  title,
  mode = 'waiting',
  resetSignaturePad,
  clearSignature,
  completeSignature,
  editSignature,
  signatureData,
  canvasProps,

  defaultZIndex = 0,
}: SignaturePadProps) => {
  const clearButton = (
    <SquareButton size="small" variant="primary-outline" onClick={clearSignature}>
      <ClearIcon />
      지우기
    </SquareButton>
  );
  const resetButton = (
    <SquareButton variant="primary-outline" size="small" onClick={resetSignaturePad}>
      <ResetIcon />
      초기화
    </SquareButton>
  );
  const completeButton = (
    <SquareButton variant="primary" size="small" onClick={completeSignature}>
      <CompleteIcon />
      저장
    </SquareButton>
  );
  const editButton = (
    <SquareButton variant="primary-outline" size="small" onClick={editSignature}>
      <EditIcon /> 수정
    </SquareButton>
  );

  const buttonSets = {
    waiting: [''],
    editing: [resetButton, clearButton, completeButton],
    complete: [resetButton, editButton],
  };

  return (
    <Styled.Wrapper defaultZIndex={defaultZIndex}>
      <Styled.Header>
        <DualSideBar height={3.5} leftSideChildren={[title]} rightSideChildren={buttonSets[mode]} />
      </Styled.Header>
      <Styled.Body mode={mode} defaultZIndex={defaultZIndex}>
        <Styled.WaitingModeCover className="cover-pad">
          <SquareButton variant="primary" size="small" onClick={editSignature}>
            입력하기
          </SquareButton>
        </Styled.WaitingModeCover>
        <Canvas className="signature-pad" {...canvasProps} />

        <Styled.CompleteModeImg
          className="complete-signature"
          src={signatureData}
          alt="서명 없음"
        />
      </Styled.Body>
    </Styled.Wrapper>
  );
};

export default SignaturePad;
