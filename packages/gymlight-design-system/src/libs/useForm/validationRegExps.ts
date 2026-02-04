import { FieldsType } from './types';

export const validationRegExps = {
  required: () => /.+/,
  minLength: (minLength: number) => new RegExp(`^.{${minLength},}$`),
  maxLength: (maxLength: number) => new RegExp(`^.{0,${maxLength}}$`),
  pattern: (pattern: RegExp) => pattern,
  match: (fields: FieldsType) => (matchField: string) => {
    const matchingValue = fields[matchField]?.ref.current?.value;

    if (!matchingValue) throw new Error('일치하는 필드를 찾을 수 없습니다.');

    return new RegExp(`^${matchingValue}$`);
  },
};
