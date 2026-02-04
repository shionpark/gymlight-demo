import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { styles, theme } from 'gymlight-design-system';

interface IWrapperProps {
  totalColumns: number;
}

export const Wrapper = styled.div<IWrapperProps>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & > div {
    flex-basis: ${({ totalColumns }) => `calc(100%/ ${totalColumns})`};
  }
`;

interface IWrapperProps {
  totalColumns: number;
}

export const RatioRow = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
`;

export type VariantType = 'achieved' | 'default' | 'unAchived';

interface IDiagramStyleProps {
  variant: VariantType;
}

const getColors = (variant: VariantType) => {
  const backgroundColor = {
    default: theme.performance.achievement,
    achieved: theme.performance.achievement,
    unAchived: theme.performance.unAchievement,
  };
  const textColor = {
    default: theme.color.white,
    achieved: theme.color.white,
    unAchived: theme.performance.achievement,
  };
  return css`
    background-color: ${backgroundColor[variant]};
    color: ${textColor[variant]};
  `;
};

export const GoalBox = styled.div<IDiagramStyleProps>`
  width: 80%;

  aspect-ratio: 4/ 1;

  display: flex;
  align-items: center;
  justify-content: center;
  ${({ variant }) => getColors(variant)}
  font-weight: bold;
  border-radius: 0.5rem;
  font-size: ${styles.fontSize.small}rem;
`;

export const IncentiveCircle = styled.div<IDiagramStyleProps>`
  width: 40%;
  aspect-ratio: 1 / 1;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${({ variant }) => getColors(variant)}
  font-weight: bold;
  font-size: ${styles.fontSize.normal}rem;
`;
