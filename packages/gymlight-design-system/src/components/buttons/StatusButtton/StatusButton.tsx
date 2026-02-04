import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as Styled from './StatusButton.styles';

type ColorsType = Record<string, string>;

export interface IStatusButtonProps<T extends ColorsType>
  extends ButtonHTMLAttributes<HTMLDivElement> {
  colors: T;
  status: Extract<keyof T, string>;
  children?: ReactNode;
}

const StatusButton = <T extends ColorsType>({
  colors,
  status,
  children,
  ...rest
}: IStatusButtonProps<T>) => {
  return (
    <Styled.StyledButton colors={colors} status={status} {...rest}>
      {children || status}
    </Styled.StyledButton>
  );
};

export default StatusButton;
