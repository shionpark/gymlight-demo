import type { ChangeEvent, TextareaHTMLAttributes } from 'react';
import { forwardRef, memo, useState } from 'react';

import {
  StyledTextarea,
  ErrorMessage,
  TextareaContainer,
  TextCounter,
  InfoContainer,
} from './Textarea.styles';
import type { ITextareaStylesProps, ITextareaContainerProps } from './Textarea.styles';

export interface ITextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    ITextareaStylesProps,
    ITextareaContainerProps {
  value?: string;
  errorMessage?: string;
  isReadOnly?: boolean;
  maxTextLength: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ value, size = 'normal', errorMessage, isReadOnly, maxTextLength = 40, ...rest }, ref) => {
    const [textValue, setTextValue] = useState(value || '');

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setTextValue(event.target.value);
      if (rest.onChange) rest.onChange(event);
    };
    return (
      <TextareaContainer>
        <StyledTextarea
          size={size}
          ref={ref}
          value={value}
          {...rest}
          readOnly={isReadOnly}
          onChange={handleChange}
        />
        {!isReadOnly ? (
          <InfoContainer>
            <ErrorMessage>{errorMessage ?? ''}</ErrorMessage>
            <TextCounter>{`${textValue.length || '0'} / ${maxTextLength}`}</TextCounter>
          </InfoContainer>
        ) : (
          ''
        )}
      </TextareaContainer>
    );
  },
);

Textarea.displayName = 'Textarea';

export default memo(Textarea);
