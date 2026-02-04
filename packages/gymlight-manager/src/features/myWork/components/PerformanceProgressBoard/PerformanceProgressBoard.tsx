import * as Styled from './PerformanceProgressBoard.styles';

import { PinProgressBar, LabeledContainer, RatioBar, DualSideBar } from 'gymlight-design-system';

import { FeeRatioGraph } from './FeeRatioGraph';
import { usePerformanceProgressBoard } from '@/features/myWork';
import { PerformanceSummaryCard } from './PerformanceSummaryCard';
import { AuthLoading } from '@/features/auth';

const PerformanceDashboard = () => {
  const {
    // weeklyPtGoalGraphProps,
    // currentWeekPtGoalGraphProps,
    // currentWeekPtRevenue,
    // weeklyPtRevenueGoal,
    otProgressContainerProps,
    otMembersNumber,

    feeRatioGraphProps,
    performanceSummaryProps,
  } = usePerformanceProgressBoard();
  return (
    <Styled.Wrapper>
      <Styled.TopSection>
        {performanceSummaryProps.map((propSet, index) => (
          <PerformanceSummaryCard key={`summary-${index}`} {...propSet} />
        ))}
      </Styled.TopSection>{' '}
      <Styled.BottomSection>
        <LabeledContainer vertical labelText={`OT 진행 회원 수: ${otMembersNumber}`}>
          <PinProgressBar {...otProgressContainerProps} barThikness={2} />
        </LabeledContainer>

        <LabeledContainer vertical labelText="수업료 인정 비율">
          {feeRatioGraphProps && feeRatioGraphProps.feeRatioGraphColumns ? (
            <FeeRatioGraph {...feeRatioGraphProps} />
          ) : (
            <AuthLoading />
          )}
        </LabeledContainer>
      </Styled.BottomSection>
    </Styled.Wrapper>
  );
};

export default PerformanceDashboard;
