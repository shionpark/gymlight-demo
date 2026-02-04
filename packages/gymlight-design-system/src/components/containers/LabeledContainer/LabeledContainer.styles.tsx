import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { styles } from '@/styles';

export type LabeledContainerSizeType = 'normal' | 'large' | 'small';
export type AlignType = 'start' | 'center' | 'end';

export interface ILabeledContainerStyleProps {
  size?: LabeledContainerSizeType;
  labelAlign?: AlignType;
  contentAlign?: AlignType;
  bold?: boolean;
  vertical?: boolean;
  width?: number;

  labelRatio?: number;
  contentRatio?: number;
}

const getLabeledContainerSize = (size?: LabeledContainerSizeType) => {
  const labelFieldSizeStyles = {
    small: {
      height: 3.2,
      fontSize: styles.fontSize.small,
    },
    normal: {
      height: 3.6,
      fontSize: styles.fontSize.normal,
    },
    large: {
      height: 4.0,
      fontSize: styles.fontSize.normal,
    },
  };

  const { height, fontSize } = labelFieldSizeStyles[size || 'normal'];

  return css`
    font-size: ${fontSize}rem;

    .label {
      min-height: ${height}rem;
      line-height: ${height}rem;
    }

    .content {
      line-height: ${height}rem;
    }
  `;
};

const getVerticalStyles = (vertical?: boolean, labelAlign?: AlignType) =>
  vertical
    ? css`
        flex-direction: column;
      `
    : css`
        .label {
          align-items: ${labelAlign};
        }
      `;

export const Wrapper = styled.div<ILabeledContainerStyleProps>`
  display: flex;
  ${({ size }) => getLabeledContainerSize(size)}
  ${({ vertical, labelAlign }) => getVerticalStyles(vertical, labelAlign)}
  width:${({ width }) => (width ? `${width}rem` : 'auto')};

  .label {
    flex: ${({ labelRatio }) => labelRatio || '1'};
    white-space: nowrap;
    display: flex;
    flex-shrink: 0;

    ${({ bold }) => bold && `font-weight: ${styles.fontWeight.bold};`}
  }

  .content {
    flex: ${({ contentRatio }) => contentRatio || '1'};
    ${({ contentAlign }) => contentAlign && `display: flex; align-items:${contentAlign};`}
  }
`;

export const Label = styled.label``;

export const content = styled.div``;
