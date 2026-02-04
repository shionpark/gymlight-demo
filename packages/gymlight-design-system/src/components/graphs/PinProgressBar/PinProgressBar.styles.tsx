import styled from '@emotion/styled';
import { styles } from '@/styles';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
`;
export const GraphContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const PinsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
`;

interface PinProps {
  leftPosition: number;
  hasPin?: boolean;
  cellcolor?: string;
}

export const Pin = styled.div<PinProps>`
  position: absolute;
  left: ${(props) => props.leftPosition}%;
  bottom: 100%;
  width: 20rem;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  gap: 0rem;
  align-items: center;

  pointer-events: auto;

  .pin-label {
    margin: 0rem;
    padding: 0rem;
    font-size: ${styles.fontSize.small}rem;
    color: ${(props) => props.cellcolor || 'black'};
  }

  svg {
    width: 1.5em;
  }
`;
