import type { TextareaHTMLAttributes } from 'react';
import type { ITextareaStylesProps, ITextareaContainerProps } from './Textarea.styles';
export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, ITextareaStylesProps, ITextareaContainerProps {
    value?: string;
    errorMessage?: string;
    isReadOnly?: boolean;
    maxTextLength: number;
}
declare const _default: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<ITextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>>;
export default _default;
