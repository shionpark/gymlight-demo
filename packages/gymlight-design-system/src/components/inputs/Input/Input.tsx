import { forwardRef, HTMLInputTypeAttribute, memo } from 'react';

import {
  ErrorMessage,
  IInputContainerProps,
  InputContainer,
  InputBorderType,
  InputSizeType,
  StyledInput,
} from './Input.styles';

interface IInputProps extends IInputContainerProps {
  name?: string;
  type?: HTMLInputTypeAttribute;
  value?: string | number;
  defaultValue?: string;
  placeholder?: string;
  readOnly?: boolean;
  width?: number | undefined;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  errorMessage?: string | undefined;
  border?: InputBorderType;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  style?: React.CSSProperties;
  size?: InputSizeType;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    { name, type = 'text', width, errorMessage, size = 'normal', border = 'solid', ...rest },
    ref,
  ) => {
    return (
      <InputContainer width={width} {...rest}>
        <StyledInput
          ref={ref}
          name={name}
          type={type}
          inputSize={size}
          borderStyle={border}
          {...rest}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputContainer>
    );
  },
);

Input.displayName = 'Input';

export default memo(Input);
