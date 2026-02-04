import { forwardRef } from 'react';
import { SquareButton } from 'gymlight-design-system';
import * as Styled from './SelfieCamera.styles';

interface ISelfieCameraProps {
  shot: () => void;
  photoString: string | null;
  cameraMode: 'active' | 'standby' | 'saved';
  removeSavedPhoto: () => void;
  turnOnCamera: () => void;
  turnOffCamera: () => void;
}

const SelfieCamera = forwardRef<HTMLVideoElement, ISelfieCameraProps>(
  ({ shot, photoString, removeSavedPhoto, cameraMode, turnOffCamera, turnOnCamera }, videoRef) => {
    return (
      <Styled.Wrapper>
        {cameraMode === 'active' && (
          <>
            <Styled.VideoContainer>
              <Styled.CameraVideo ref={videoRef} autoPlay />
            </Styled.VideoContainer>
            <Styled.CameraControlBar>
              <SquareButton onClick={shot} variant="primary">
                촬영
              </SquareButton>
              <SquareButton onClick={turnOffCamera}>취소</SquareButton>
            </Styled.CameraControlBar>
          </>
        )}
        {cameraMode === 'standby' && (
          <>
            <Styled.VideoContainer>
              <Styled.CameraCover />
            </Styled.VideoContainer>
            <Styled.CameraControlBar>
              <SquareButton onClick={turnOnCamera} variant="primary-outline">
                카메라
              </SquareButton>
            </Styled.CameraControlBar>
          </>
        )}
        {cameraMode === 'saved' && (
          <>
            <Styled.VideoContainer>
              <Styled.PhotoImage src={photoString as string} alt="Captured" />
            </Styled.VideoContainer>
            <Styled.CameraControlBar>
              <SquareButton onClick={turnOnCamera} variant="primary-outline">
                재촬영
              </SquareButton>
              <SquareButton onClick={removeSavedPhoto}>삭제</SquareButton>
            </Styled.CameraControlBar>
          </>
        )}
      </Styled.Wrapper>
    );
  },
);

export default SelfieCamera;
