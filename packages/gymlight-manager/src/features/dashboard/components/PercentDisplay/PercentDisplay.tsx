import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import * as Styled from './PercentDisplay.styles';

const PercentDisplay = ({ percent }: { percent: number }) => {
  const isPositive = percent > 0;

  return (
    <Styled.Wrapper isPositive={isPositive}>
      {isPositive ? <ArrowUpCircleIcon /> : <ArrowDownCircleIcon />}
      <span>{percent}%</span>
    </Styled.Wrapper>
  );
};

export default PercentDisplay;
