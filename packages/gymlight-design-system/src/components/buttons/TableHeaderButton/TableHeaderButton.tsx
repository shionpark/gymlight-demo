import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { StyledButton, ContentWrapper, SmallText, IconWrapper } from './TableHeaderButton.styles';

interface ITableHeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string;
  icon?: ReactNode;
  iconAnnotation?: string;
}

const TableHeaderButton = ({
  buttonName,
  icon,
  iconAnnotation,
  ...rest
}: ITableHeaderButtonProps) => {
  return (
    <StyledButton {...rest}>
      <ContentWrapper>
        <span>{buttonName}</span>
        <IconWrapper>
          {icon}
          {iconAnnotation && <SmallText>{iconAnnotation}</SmallText>}
        </IconWrapper>
      </ContentWrapper>
    </StyledButton>
  );
};

export default TableHeaderButton;
