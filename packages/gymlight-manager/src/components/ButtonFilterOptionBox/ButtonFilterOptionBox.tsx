import type { MouseEventHandler } from 'react';

import { SquareButton } from 'gymlight-design-system';

import { ButtonsWrapper, StatusFilterContainer } from './ButtonFilterOptionBox.styles';

export interface IButtonFilterOptionBoxProps {
  statusName: string;
  statusFilterOptions: readonly string[];
  activeStatusFilterOptions: string[];
  getStatusStateToggleHandler: (statusStateName: any) => MouseEventHandler<HTMLButtonElement>;
}

const ButtonFilterOptionBox: React.FC<IButtonFilterOptionBoxProps> = ({
  statusName,
  statusFilterOptions,
  activeStatusFilterOptions,
  getStatusStateToggleHandler,
}) => {
  return (
    <>
      <StatusFilterContainer>
        <span>{statusName}</span>
        <ButtonsWrapper>
          {statusFilterOptions ? (
            statusFilterOptions.map((status) => (
              <SquareButton
                size="small"
                key={status}
                variant={activeStatusFilterOptions.includes(status) ? 'primary' : 'outline'}
                onClick={getStatusStateToggleHandler(status)}
                wide
              >
                {status}
              </SquareButton>
            ))
          ) : (
            <></>
          )}
        </ButtonsWrapper>
      </StatusFilterContainer>
    </>
  );
};

export default ButtonFilterOptionBox;
