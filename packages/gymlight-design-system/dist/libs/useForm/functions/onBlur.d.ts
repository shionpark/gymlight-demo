import { ValidateFieldType, FieldsType } from "../types";
/**
 * 필드의 onBlur 이벤트 핸들러를 생성합니다. 이 함수는 필드가 포커스를 잃었을 때 유효성 검사를 수행합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @param {ValidateFieldType} validateField - 개별 필드를 유효성 검사하는 함수입니다.
 * @returns {React.FocusEventHandler<Element>} onBlur 이벤트 핸들러 함수입니다.
 */
export declare const onBlur: (fields: FieldsType, validateField: ValidateFieldType) => React.FocusEventHandler<Element>;
