import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { styles } from 'gymlight-design-system';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: grid;
  flex-direction: column;
  height: 100vh;

  position: relative;

  .branch {
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: right;

    width: 100%;
    background: ${({ theme }) => theme.background.default};
    height: 4rem;
    font-size: ${styles.fontSize.large}rem;

    padding: 0 ${styles.space.level4}rem;
  }
`;

export const TopSection = styled.div`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: ${styles.space.level3}rem;

  span,
  svg {
    font-size: ${styles.fontSize.small}rem;
  }
`;

export const Clock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .today-date {
    font-size: ${styles.fontSize.large}rem;
  }

  .current-time {
    font-size: ${styles.fontSize.h1}rem;
    font-weight: ${styles.fontWeight.bold};
  }
`;

export const ClickedNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${styles.space.level3}rem;
`;

export const NumberBox = styled.div<{ isNext: boolean; isCurrent: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;

  font-size: ${styles.fontSize.h2}rem;
  font-weight: ${styles.fontWeight.bold};
  color: ${({ theme }) => theme.color.primary};

  border-radius: 2rem;
  shadow: ${styles.shadow.light};

  ${({ isCurrent, theme, isNext }) => {
    let bgColor = `${theme.background.default}`;
    let borderStyle = `1px solid ${theme.button.default}`;

    if (isNext) {
      bgColor = `${theme.background.light}`;
      borderStyle = `2px solid #4F88FF`;
    } else if (isCurrent) {
      bgColor = '#D4E2FF';
    }
    return css`
      background-color: ${bgColor};
      border: ${borderStyle};
    `;
  }};
`;

export const BottomSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: ${styles.space.level3}rem;

  color: ${({ theme }) => theme.background.light};
  background: ${({ theme }) => theme.background.dark};

  button {
    height: 6rem;
    margin-top: ${styles.space.level3}rem;
    font-size: ${styles.fontSize.h5}rem;
  }

  position: relative;

  .info-desc {
    position: absolute;
    top: -40px;

    cursor: pointer;
    color: ${({ theme }) => theme.font.default};

    &:active {
      color: ${({ theme }) => darken(0.1, theme.font.light)};
      ${styles.transition.button}
    }
  }
`;

export const TouchPad = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
  width: 40rem;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  font-size: ${styles.fontSize.large}rem;
  margin-bottom: 0.4rem;
`;
