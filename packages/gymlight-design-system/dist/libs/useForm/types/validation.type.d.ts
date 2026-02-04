import { FieldsType } from "./field.type";
import { RefTargetType } from "./ref.type";
export type ValidationRuleValueType = boolean | string | number | RegExp;
export interface IValidationRules {
    required?: string | ValidationRuleType<boolean>;
    minLength?: ValidationRuleType<number>;
    maxLength?: ValidationRuleType<number>;
    pattern?: ValidationRuleType<RegExp>;
    match?: ValidationRuleType<string>;
}
export type ValidationRuleType<T extends ValidationRuleValueType = ValidationRuleValueType> = T | ValidationRuleWithMessageType<T>;
export type ValidationRuleWithMessageType<T> = {
    value: T;
    message: string;
};
export interface IErrorField {
    name: string;
    errorOption?: string | ValidationRuleType<ValidationRuleValueType> | undefined;
}
export type ValidateFieldType = (target: RefTargetType, validationRules?: IValidationRules) => IErrorField;
export type GetErrorFieldType = (props: {
    target: RefTargetType;
    fields: FieldsType;
    validationRules?: IValidationRules;
}) => IErrorField;
export type GetCheckboxErrorFieldType = (props: {
    target: HTMLInputElement;
    validationRules: IValidationRules;
}) => IErrorField;
