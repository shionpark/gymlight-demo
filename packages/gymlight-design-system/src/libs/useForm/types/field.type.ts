import { FieldRefType, RefTargetType } from './ref.type';
import { IValidationRules } from './validation.type';

export interface IFieldInfo {
  ref: FieldRefType;
  value: unknown;
  valid?: boolean;
  validationRules?: IValidationRules | undefined;
}

export type FieldsType = Record<string, IFieldInfo>;

export type FieldErrorsType = Record<string, string | undefined>;

// register
export interface IRegisterOptions {
  name: string;
  defaultValue?: unknown;
  placeholder?: string;
  validationRules?: IValidationRules;
}

export type FieldRegisterType = <TElement extends RefTargetType>(
  options: IRegisterOptions,
) => {
  ref: FieldRefType<TElement>;
  name: string;
  placeholder?: string;
  onBlur: React.FocusEventHandler;
};

// Event Handler
export type UseFormOnBlur = (event: { target: RefTargetType; type?: unknown }) => void;
