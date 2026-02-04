import { FieldsType } from './types';
export declare const validationRegExps: {
    required: () => RegExp;
    minLength: (minLength: number) => RegExp;
    maxLength: (maxLength: number) => RegExp;
    pattern: (pattern: RegExp) => RegExp;
    match: (fields: FieldsType) => (matchField: string) => RegExp;
};
