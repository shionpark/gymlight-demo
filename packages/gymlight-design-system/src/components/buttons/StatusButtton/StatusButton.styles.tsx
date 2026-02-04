import { styles, Theme } from '@/styles';
import styled from '@emotion/styled';

interface StyledButtonProps {
  colors: Record<string, string>;
  status: string;
}

const setStatusBackground = (status: string, colors: Record<string, string>) => {
  const backgroundColor = colors[status];
  return backgroundColor || 'transparent';
};

export const StyledButton = styled.div<StyledButtonProps>`
  display: inline-block;
  font-size: ${styles.fontSize.xsmall}rem;
  font-weight: 600;
  padding: ${styles.space.level1}rem ${styles.space.level2}rem;
  background: ${({ status, colors }) => setStatusBackground(status, colors)};
  border-radius: ${styles.borderRadius.normal}rem;
`;
