import type { HTMLAttributes, ReactNode } from 'react';
import { ILabeledContainerStyleProps, type AlignType } from './LabeledContainer.styles';
interface ILabelWrapperProps extends ILabeledContainerStyleProps, HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    labelText: string | ReactNode;
    labelAlign?: AlignType;
    contentAlign?: AlignType;
    id?: string;
}
declare const LabeledContainer: ({ labelText, children, size, labelAlign, contentAlign, id, ...rest }: ILabelWrapperProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default LabeledContainer;
