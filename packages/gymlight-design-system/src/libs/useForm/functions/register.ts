import { useRef } from 'react';

import { getValidateOptionValue, setField } from '../utils';
import { FieldRegisterType, FieldsType, IRegisterOptions, RefTargetType } from '../types';

/**
 * 폼 필드를 등록하는 함수입니다. 이 함수는 필드의 참조와 유효성 검사 규칙을 설정합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @param {React.FocusEventHandler<Element>} onBlur - 필드의 onBlur 이벤트 핸들러입니다.
 * @returns {FieldRegisterType} 폼 필드를 등록하는 함수입니다.
 */
export const register =
  (fields: FieldsType, onBlur: React.FocusEventHandler<Element>): FieldRegisterType =>
  <Target extends RefTargetType>(options: IRegisterOptions) => {
    const { name, defaultValue, placeholder, validationRules } = options;

    const ref = useRef<Target>(null);

    setField(fields, name, ref, validationRules);

    return {
      ref,
      name,
      defaultValue,
      placeholder: placeholder ?? '',
      minLength: getValidateOptionValue(validationRules?.minLength),
      maxLength: getValidateOptionValue(validationRules?.maxLength),
      onBlur,
    };
  };
