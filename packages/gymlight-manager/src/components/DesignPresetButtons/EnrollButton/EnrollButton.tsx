import type { ForwardRefExoticComponent, SVGProps, ButtonHTMLAttributes } from 'react';

import { SquareButton } from 'gymlight-design-system';

import type {
  ButtonSizeType,
  ButtonVariantsType,
} from 'gymlight-design-system/dist/components/buttons/SquareButton/SquareButton.styles';

import * as Styled from './EnrollButton.styles';

interface IEnrollButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  type?: 'submit' | 'button';
  size?: ButtonSizeType;
  Icon?: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  variant?: ButtonVariantsType;
}

const EnrollButton = ({
  label,
  type = 'button',
  size = 'normal',
  Icon,
  variant = 'primary',
  ...rest
}: IEnrollButtonProps) => {
  return (
    <Styled.Wrapper>
      <SquareButton type={type} size={size} variant={variant} {...rest}>
        {Icon && <Icon />}
        {label && <Styled.LabelWrapper>{label}</Styled.LabelWrapper>}
      </SquareButton>
    </Styled.Wrapper>
  );
};

export default EnrollButton;
