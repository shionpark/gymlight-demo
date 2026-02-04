import styled from '@emotion/styled';
import { styles } from '@/styles';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${styles.space.level1}rem;
`;

export const TotalElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.2rem;
  height: 2.2rem;
  font-size: ${styles.fontSize.small}rem;
  border-radius: 50%;

  color: ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => lighten(0.34, theme.color.primary)};
`;
