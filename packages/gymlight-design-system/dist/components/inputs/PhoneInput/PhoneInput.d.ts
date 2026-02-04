import { FieldErrorsType, FieldRegisterType, IValidationRules } from '../../../libs';
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
declare const PhoneInput: ({ name, defaultValue, placeholder, register, requiredMessage, validationRules, errors, wide, stateValue, onChangeState, readonly, }: IPhoneInputProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default PhoneInput;
