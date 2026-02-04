import { ForwardRefExoticComponent, SVGProps } from 'react';

import { GridContainer } from 'gymlight-design-system';

import { BackspaceIcon, TrashIcon } from '@heroicons/react/24/outline';
import * as Styled from './NumPad.styles';

export interface NumPadButtonType {
  label: string;
  icon?: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
}

export interface INumPadProps {
  handleNumPadAction: (digit: NumPadButtonType) => void;
}

const NumPad = ({ handleNumPadAction }: INumPadProps) => {
  const numPadButtons: NumPadButtonType[] = [
    { label: '1' },
    { label: '2' },
    { label: '3' },
    { label: '4' },
    { label: '5' },
    { label: '6' },
    { label: '7' },
    { label: '8' },
    { label: '9' },
    { label: '', icon: TrashIcon },
    { label: '0' },
    { label: '', icon: BackspaceIcon },
  ];

  return (
    <GridContainer columns={3}>
      {numPadButtons.map((button, index) => (
        <Styled.NumBtn key={index} onClick={() => handleNumPadAction(button)}>
          {button.icon ? <button.icon /> : button.label}
        </Styled.NumBtn>
      ))}
    </GridContainer>
  );
};

export default NumPad;
