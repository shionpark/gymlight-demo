import { FieldErrorsType } from './field.type';
export type RefTargetType = (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) & {
    valid?: boolean;
    errors?: FieldErrorsType;
};
export type FieldRefType<Target extends RefTargetType = RefTargetType> = React.RefObject<Target>;
