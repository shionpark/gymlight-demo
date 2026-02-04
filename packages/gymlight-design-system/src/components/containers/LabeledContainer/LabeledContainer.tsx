import type { HTMLAttributes, ReactNode } from 'react';
import {
  ILabeledContainerStyleProps,
  Label,
  type AlignType,
  Wrapper,
} from './LabeledContainer.styles';

interface ILabelWrapperProps extends ILabeledContainerStyleProps, HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  labelText: string | ReactNode;
  labelAlign?: AlignType;
  contentAlign?: AlignType;
  id?: string;
}

const LabeledContainer = ({
  labelText,
  children,
  size = 'normal',
  labelAlign = 'center',
  contentAlign,
  id,
  ...rest
}: ILabelWrapperProps) => {
  return (
    <Wrapper
      size={size}
      labelAlign={labelAlign}
      contentAlign={contentAlign}
      {...rest}
      className="labeled-container"
    >
      <Label htmlFor={id} className="label">
        {labelText}
      </Label>
      <div className="content">{children}</div>
    </Wrapper>
  );
};
export default LabeledContainer;
