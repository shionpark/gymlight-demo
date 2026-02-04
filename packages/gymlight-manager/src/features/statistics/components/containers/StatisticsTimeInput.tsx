import { Input, SquareButton } from 'gymlight-design-system';

import * as Styled from './StatisticsTimeInput.styles';

const StatisticsTimeInput = () => {
  return (
    <Styled.Wrapper>
      <Input type="date" />
      <span>~</span>
      <Input type="date" />
      <SquareButton size="small" wide>
        적용
      </SquareButton>
    </Styled.Wrapper>
  );
};

export default StatisticsTimeInput;
