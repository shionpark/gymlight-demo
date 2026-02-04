import type { MouseEvent, TouchEvent } from 'react';
import { useCallback, useRef, useState } from 'react';

interface IUseSignaturePadParams {
  placeholder?: string;
}

type UseSignaturePadReturnType = {
  /** 캔버스 이벤트 핸들러 및 ref */
  canvasProps: {
    /** 터치 시작 시 호출 - 그리기 시작 (터치 기반 ) */
    onTouchStart: (event: TouchEvent) => void;
    /** 터치 이동 시 호출 - 선 그리기 (터치 기반 ) */
    onTouchMove: (event: TouchEvent) => void;
    /** 터치 종료 시 호출 - 그리기 종료 (터치 기반) */
    onTouchEnd: () => void;
    /** 마우스 클릭 시 호출 - 그리기 시작 (마우스 기반 ) */
    onMouseDown: (event: MouseEvent) => void;
    /** 마우스 이동 시 호출 - 선 그리기 (마우스 기반 ) */
    onMouseMove: (event: MouseEvent) => void;
    /** 마우스 버튼을 떼었을 때 호출 - 그리기 종료 (마우스 기반) */
    onMouseUp: () => void;
    /** 캔버스 요소 ref */
    ref: (htmlCanvasElement: HTMLCanvasElement | null) => void;
  };

  /** 서명 패드를 초기 상태로 리셋 / mode -'waiting' */
  resetSignaturePad: () => void;
  /** 서명을 지우고 초기화 */
  clearSignature: () => void;
  /** 서명을 완료하고 `signatureData`를 저장 / mode -'complete' */
  completeSignature: () => void;
  /** 기존 서명 수정  / mode - 'editing'*/
  editSignature: () => void;

  /** 현재 서명 패드의 모드 (`waiting` | `editing` | `complete`) */
  mode: 'waiting' | 'editing' | 'complete';
  /** 저장된 서명 데이터 (Base64 인코딩된 이미지) */
  signatureData: string;
};

export const useSignaturePad = ({
  placeholder = '',
}: IUseSignaturePadParams): UseSignaturePadReturnType => {
  const canvasRefs = useRef(new Map());

  const [isDrawing, setIsDrawing] = useState(false);
  const [signatureData, setSignatureData] = useState('');

  const [mode, setMode] = useState<'waiting' | 'editing' | 'complete'>('waiting');

  const callbackCanvasRef = useCallback(
    (htmlCanvasElement: HTMLCanvasElement | null) => {
      if (htmlCanvasElement) {
        const canvasDom = htmlCanvasElement;
        const context = htmlCanvasElement.getContext('2d');

        canvasDom.width = canvasDom.clientWidth;
        canvasDom.height = canvasDom.clientHeight;

        if (placeholder && context) {
          context.font = '1.5rem Arial';
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillStyle = 'grey';
          context.fillText(placeholder, canvasDom.width / 2, canvasDom.height / 2);
        }

        canvasRefs.current.set('node', canvasDom);
        canvasRefs.current.set('context', context);
      }
    },
    [placeholder],
  );

  const draw = useCallback((x: number, y: number, isStart: boolean = false) => {
    const context = canvasRefs.current.get('context') as CanvasRenderingContext2D;
    const bound = canvasRefs.current.get('node') as HTMLCanvasElement;
    if (!bound) {
      return;
    }
    const rect = bound.getBoundingClientRect();

    const scaledX = ((x - rect.left) * bound.width) / rect.width;
    const scaledY = ((y - rect.top) * bound.height) / rect.height;

    if (isStart) {
      context.beginPath();
      context.moveTo(scaledX, scaledY);
    } else {
      context.lineTo(scaledX, scaledY);
      context.stroke();
    }
  }, []);

  const onTouchStart = useCallback(
    (event: TouchEvent) => {
      setIsDrawing(true);
      const touch = event.targetTouches[0];
      draw(touch.clientX, touch.clientY, true);
    },
    [draw],
  );

  const onTouchMove = useCallback(
    (event: TouchEvent) => {
      if (isDrawing) {
        const touch = event.targetTouches[0];
        draw(touch.clientX, touch.clientY);
      }
    },
    [draw, isDrawing],
  );

  const onTouchEnd = useCallback(() => {
    setIsDrawing(false);
    const context = canvasRefs.current.get('context') as CanvasRenderingContext2D;
    context.closePath();
  }, []);

  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      setIsDrawing(true);
      draw(event.clientX, event.clientY, true);
    },
    [draw],
  );

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDrawing) {
        draw(event.clientX, event.clientY);
      }
    },
    [draw, isDrawing],
  );

  const onMouseUp = useCallback(() => {
    setIsDrawing(false);
    const context = canvasRefs.current.get('context') as CanvasRenderingContext2D;
    context.closePath();
  }, [draw]);

  const clear = useCallback(() => {
    const canvasDom = canvasRefs.current.get('node') as HTMLCanvasElement;
    const context = canvasRefs.current.get('context') as CanvasRenderingContext2D;
    context.clearRect(0, 0, canvasDom.width, canvasDom.height);

    if (placeholder) {
      context.font = '1.5rem Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = 'grey';
      context.fillText(placeholder, canvasDom.width / 2, canvasDom.height / 2);
    }
  }, []);

  const handleSave = () => {
    const canvasDom = canvasRefs.current.get('node') as HTMLCanvasElement;
    const signatureString = canvasDom.toDataURL('image/png');
    setSignatureData(signatureString);
  };

  const editSignature = () => {
    if (signatureData) {
      const canvasDom = canvasRefs.current.get('node') as HTMLCanvasElement;
      const context = canvasRefs.current.get('context') as CanvasRenderingContext2D;

      const img = new Image();
      img.src = signatureData;
      img.onload = () => {
        context.clearRect(0, 0, canvasDom.width, canvasDom.height);
        context.drawImage(img, 0, 0, canvasDom.width, canvasDom.height);
      };
    }
    setMode('editing');
  };

  const completeSignature = () => {
    handleSave();
    setMode('complete');
  };

  const clearSignature = () => {
    clear();
    setSignatureData('');
  };

  const resetSignaturePad = () => {
    clear();
    setSignatureData('');
    setMode('waiting');
  };

  return {
    canvasProps: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      ref: callbackCanvasRef,
    },

    resetSignaturePad,
    clearSignature,
    completeSignature,
    editSignature,

    mode,
    signatureData,
  };
};
