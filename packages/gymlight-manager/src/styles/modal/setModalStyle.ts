import { ModalType } from '@/types';
import { Theme } from '../themes';
import { css, SerializedStyles } from '@emotion/react';
import { styles } from '..';

export const setModalStyle = (theme: Theme, type: ModalType): SerializedStyles => {
  const modalStyle: Record<string, SerializedStyles> = {
    default: css`
      form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: ${styles.space.level2}rem;

        label {
          font-size: ${styles.fontSize.small}rem;
        }

        button[type='submit'] {
          margin-top: ${styles.space.level4}rem;
        }
      }
    `,
    info: css`
      background-color: ${theme.background.light};
      border: 1px solid ${theme.border.default};
    `,
    filter: css`
      background-color: ${theme.background.light};
      border: 1px solid ${theme.border.default};
    `,
    alert: css`
      background-color: #ffebee;
      border: 2px solid #f44336;
    `,
    success: css`
      background-color: #e8f5e9;
      border: 1px solid #81c784;
    `,
  };

  if (type in modalStyle) {
    return modalStyle[type];
  }

  return modalStyle['default'];
};
