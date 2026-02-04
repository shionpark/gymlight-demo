import { forwardRef, HTMLInputTypeAttribute, memo } from 'react';

import { IconButton } from '@/components/buttons';

import {
  ErrorMessage,
  IInputContainerProps,
  InputContainer,
  InputSizeType,
  StyledInput,
} from './SearchInput.styles';

interface IInputProps extends IInputContainerProps {
  name?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  readOnly?: boolean;
  width?: number | undefined;
  errorMessage?: string | undefined;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  handleInit?: () => void;

  style?: React.CSSProperties;
  size?: InputSizeType;
}

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';

const SearchInput = forwardRef<HTMLInputElement, IInputProps>(
  ({ name, type = 'text', width, errorMessage, size = 'normal', handleInit, ...rest }, ref) => {
    return (
      <>
        <InputContainer width={width} {...rest}>
          <label htmlFor="search">
            <MagnifyingGlassIcon />
            <StyledInput id="search" ref={ref} name={name} type={type} inputSize={size} {...rest} />
            {handleInit && (
              <IconButton
                className="init-icon"
                size="small"
                icon={<XMarkIcon />}
                onClick={handleInit}
              />
            )}
          </label>
        </InputContainer>
        <ErrorMessage>{errorMessage ?? ''}</ErrorMessage>
      </>
    );
  },
);

SearchInput.displayName = 'SearchInput';

export default memo(SearchInput);
