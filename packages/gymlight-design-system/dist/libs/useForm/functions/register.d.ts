import { FieldRegisterType, FieldsType } from '../types';
/**
 * 폼 필드를 등록하는 함수입니다. 이 함수는 필드의 참조와 유효성 검사 규칙을 설정합니다.
 * @param {FieldsType} fields - 모든 폼 필드의 컬렉션입니다.
 * @param {React.FocusEventHandler<Element>} onBlur - 필드의 onBlur 이벤트 핸들러입니다.
 * @returns {FieldRegisterType} 폼 필드를 등록하는 함수입니다.
 */
export declare const register: (fields: FieldsType, onBlur: React.FocusEventHandler<Element>) => FieldRegisterType;
