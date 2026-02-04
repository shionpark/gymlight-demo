import type { HTMLAttributes, ChangeEvent } from 'react';
import { useState } from 'react';

import { Select } from '../Select';
import { Input } from '../Input';
import { SquareButton } from '@/components/buttons';

import { Wrapper } from './SelectWithCustomOption.styles';

interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
  name?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  defaultCustomValue?: string;
  value?: string | number | readonly string[] | undefined;
  triggerValue?: string;
  disabled?: boolean;
  children: React.ReactNode;
  wide?: boolean;
  withCancelButton?: boolean;

  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;

  onChangeCustomValueInput?: React.ChangeEventHandler<HTMLInputElement>;
}

const SelectWithCustomOption = ({
  name,
  children,
  defaultValue,
  defaultCustomValue,
  value,
  onChange,
  onBlur,
  triggerValue,
  disabled,
  onChangeCustomValueInput,
  withCancelButton = true,
  ...rest
}: ISelectProps) => {
  const [displayValue, setDisplayValue] = useState(value || '');

  const editingOptionValue = triggerValue ? triggerValue : '직접입력';

  const initIsEditing = Boolean(
    value === editingOptionValue || (defaultCustomValue && defaultCustomValue !== 'N/A'),
  );
  const [isEditing, setIsEditing] = useState(initIsEditing);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (e.target.value === editingOptionValue) {
      setDisplayValue(editingOptionValue);
      setIsEditing(true);
      return;
    }

    setIsEditing(false);
    setDisplayValue(e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const event = new Event('change', { bubbles: true });
    const target = {
      ...e.target,
      value: e.target.value,
    };
    Object.defineProperty(event, 'target', { writable: true, value: target });
    if (onChangeCustomValueInput) {
      onChangeCustomValueInput(event as unknown as ChangeEvent<HTMLInputElement>);
    } else if (onChange) {
      onChange(event as unknown as ChangeEvent<HTMLSelectElement>);
    }
  };

  const customInputInitValue =
    defaultCustomValue !== undefined ? defaultCustomValue : value ? `${value}` : '';

  return (
    <Wrapper isEditing={isEditing}>
      {isEditing && (
        <Input readOnly={disabled} value={customInputInitValue} onChange={handleInputChange} />
      )}

      {isEditing && withCancelButton ? (
        <SquareButton
          wide
          size="small"
          onClick={() => {
            setIsEditing(false);
            setDisplayValue(value || '');
          }}
        >
          취소
        </SquareButton>
      ) : (
        <Select
          value={displayValue}
          onChange={handleSelectChange}
          disabled={disabled}
          onBlur={onBlur}
          {...rest}
        >
          {children}
          {triggerValue ? (
            ''
          ) : (
            <option className="editable" value={editingOptionValue}>
              입력
            </option>
          )}
        </Select>
      )}
    </Wrapper>
  );
};

export default SelectWithCustomOption;
