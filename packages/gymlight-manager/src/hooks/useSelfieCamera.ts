import { type RefObject, useState, useRef, useCallback, useEffect } from 'react';

interface IUseSelfieCameraReturn {
  /**
   * SelfieCamera의 현재 상태
   * - 'active': 카메라 켜짐
   * - 'standby': 대기 중
   * - 'saved': 사진 저장됨
   */
  cameraMode: 'active' | 'standby' | 'saved';

  /**
   * 촬영
   * - 이미지를 `photoString` state에 저장
   */
  shot: () => void;

  /**
   * 사진 데이터 state
   * - 촬영된 사진의 데이터 URL
   */
  photoString: string | null;

  /**
   * 카매라 비디오 요소 참조
   * - 카메라 컴포넌트 ref
   */
  videoRef: RefObject<HTMLVideoElement>;

  /**
   * 카메라 활성화
   * - `cameraMode`를 'active'로 전환
   */
  turnOnCamera: () => void;

  /**
   * 촬영 종료
   * - `cameraMode`를 'standby' 또는 'saved'로 전환
   * - `photoString`이 있으면 'saved', 없으면 'standby'
   */
  turnOffCamera: () => void;

  /**
   * 사진 삭제, 카메라 대기모드로 전환
   * - `cameraMode` 를 'standby'로 설정
   * - photoString을 null로 변경
   */
  removeSavedPhoto: () => void;
}

interface IUseSelfieCameraArgs {
  profileImg?: string;
}

export const useSelfieCamera = (args?: IUseSelfieCameraArgs): IUseSelfieCameraReturn => {
  const [photoString, setPhotoString] = useState(() => (args?.profileImg ? args.profileImg : null));

  const [cameraMode, setCameraMode] = useState<'active' | 'standby' | 'saved'>('standby');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const initializeCamera = useCallback(async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        alert(`카메라 접근이 제한되었습니다. ${JSON.stringify(error)}`);
      }
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  }, []);

  const turnOnCamera = async () => {
    setCameraMode('active');
    await initializeCamera();
  };

  const turnOffCamera = () => {
    stopCamera();
    const mode = photoString ? 'saved' : 'standby';
    setCameraMode(mode);
  };

  const removeSavedPhoto = () => {
    setPhotoString(null);
    setCameraMode('standby');
    stopCamera();
  };

  const shot = useCallback(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/png');
      setPhotoString(dataUrl);
      setCameraMode('saved');
      stopCamera();
    }
  }, [stopCamera]);

  /** 페이지 변경시 카메라 종료*/
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  return {
    cameraMode,
    shot,
    photoString,
    videoRef,
    turnOnCamera,
    turnOffCamera,
    removeSavedPhoto,
  };
};
