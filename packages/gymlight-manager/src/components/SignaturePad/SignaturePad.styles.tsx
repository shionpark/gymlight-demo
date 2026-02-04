import { styles } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'gymlight-design-system';

export const Wrapper = styled.div<{ defaultZIndex: number }>`
  z-index: ${({ defaultZIndex }) => defaultZIndex};
  width: inherit;
  height: inherit;
`;

export const WaitingModeCover = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompleteModeImg = styled.img`
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;

  cursor: not-allowed;
`;

export const Header = styled.div`
  width: 100%;
  background-color: ${theme.button.disabled};
  padding: ${styles.space.level2}rem ${styles.space.level4}rem;
  .left-section {
    font-weight: bold;
    font-size: ${styles.fontSize.large}rem;
  }

  .right-section button {
    width: 8rem;
    margin-left: 0.5rem;
  }
`;

const getChildrenCss = ({
  mode,
  defaultZIndex,
}: {
  mode: 'waiting' | 'editing' | 'complete';
  defaultZIndex: number;
}) => {
  return css`
    .cover-pad {
      z-index: ${(mode === 'waiting' ? 2 : -1) + defaultZIndex};
      opacity: ${mode === 'waiting' ? 1 : 0};
      transition:
        opacity 0.3s ease,
        z-index 0.3s ease;
    }

    .signature-pad {
      position: absolute;

      left: 0;

      z-index: ${(mode === 'editing' ? 2 : -1) + defaultZIndex};
      opacity: ${mode === 'editing' ? 1 : 0};
      transition:
        opacity 0.3s ease,
        z-index 0.3s ease;
    }

    .complete-signature {
      z-index: ${(mode === 'complete' ? 2 : -1) + defaultZIndex};
      opacity: ${mode === 'complete' ? 1 : 0};
      transition:
        opacity 0.3s ease,
        z-index 0.3s ease;
    }
  `;
};

export const Body = styled.div<{ mode: 'waiting' | 'editing' | 'complete'; defaultZIndex: number }>`
  width: 100%;
  height: 100%;
  min-height: 13rem;
  position: relative;

  ${({ mode, defaultZIndex }) => getChildrenCss({ mode, defaultZIndex })}
`;
