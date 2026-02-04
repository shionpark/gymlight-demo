import styled from '@emotion/styled';

import { styles } from '@/styles';

interface IPhoneInputContainerProps {
  wide?: boolean;
}

export const PhoneInputContainer = styled.div<IPhoneInputContainerProps>`
  width: ${({ wide }) => (wide ? '100%' : '28rem')};
  display: flex;
  gap: ${styles.space.level3}rem;
`;

export const ErrorMessage = styled.div`
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.color.error};

  font-size: ${styles.fontSize.small}rem;
`;
