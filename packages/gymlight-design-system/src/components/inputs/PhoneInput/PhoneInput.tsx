import { useEffect, useState } from 'react';

import { REG_EXP, VALIDATION } from '@/constants';
import { FieldErrorsType, FieldRegisterType, IValidationRules } from '@/libs';

import { Input } from '../Input';

import { PhoneInputContainer } from './PhoneInput.styles';

interface IPhoneInputProps {
  name: string;
  defaultValue?: string;
  placeholder?: string;

  register?: FieldRegisterType;
  validationRules?: IValidationRules;
  requiredMessage?: string;
  errors: FieldErrorsType;
  wide?: boolean;

  stateValue?: string;
  onChangeState?: (value: string) => void;

  readonly?: boolean;
}

const PhoneInput = ({
  name,
  defaultValue,
  placeholder,
  register,
  requiredMessage,
  validationRules,
  errors,
  wide,
  stateValue,
  onChangeState,
  readonly,
}: IPhoneInputProps) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const formatPhoneNumber = (value: string) => {
    const phone = value.replace(/[^0-9]/g, '');
    const phoneLength = phone.length;

    if (phoneLength <= 3) return `010-`;
    if (phoneLength <= 7) return `010-${phone.slice(3)}`;

    return `010-${phone.slice(3, 7)}-${phone.slice(7, 11)}`;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value.replace(/[^0-9]/g, '');
    if (!inputValue.startsWith('010')) {
      inputValue = '010' + inputValue.substring(3);
    }
    const formattedValue = formatPhoneNumber('010-' + inputValue.substring(3));
    if (register) {
      setValue(formattedValue);
    } else {
      setValue(formattedValue);
      onChangeState && onChangeState(formattedValue);
    }
  };

  return (
    <PhoneInputContainer wide={wide ?? false}>
      <Input
        readOnly={readonly}
        type="tel"
        value={value}
        onChange={handleChange}
        errorMessage={errors[name] ?? ''}
        {...(register
          ? register({
              name,
              placeholder: placeholder ?? '010-XXXX-XXXX',
              validationRules: validationRules
                ? validationRules
                : {
                    required: requiredMessage || true,
                    maxLength: VALIDATION.PHONE.MAX_LENGTH,
                    pattern: {
                      value: REG_EXP.PHONE,
                      message: '휴대폰 번호는 010-XXXX-XXXX 형식으로 입력해주세요.',
                    },
                  },
              defaultValue: defaultValue,
            })
          : {
              value: stateValue,
              onChange: handleChange,
              placeholder: placeholder ?? '010-0000-0000',
            })}
      />
    </PhoneInputContainer>
  );
};

export default PhoneInput;
