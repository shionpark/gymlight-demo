import styled from '@emotion/styled';
import { PhotoIcon } from '@heroicons/react/24/outline';

export const Wrapper = styled.div`
  max-height: 40vh;
  display: flex;
  flex-direction: column;
`;

export const VideoContainer = styled.div`
  position: relative;
  aspect-ratio: 3.5/ 4.5;
  height: auto;
  border: solid 0.1rem ${({ theme }) => theme.color.primary};
  border-radius: 1rem;
`;

export const CameraVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;

export const PhotoImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;

export const CameraCover = styled(PhotoIcon)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CameraControlBar = styled.div`
  width: 100%;
  height: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));

  gap: 1rem;
  padding 0rem 0.5rem;
`;
