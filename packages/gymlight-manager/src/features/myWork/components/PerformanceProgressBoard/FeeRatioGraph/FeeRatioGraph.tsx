import * as Styled from './FeeRatioGraph.styles';

export interface IFeeRatioGraphProps {
  basicIncentiveRatio: number;
  feeRatioGraphColumns: {
    pointGoal: number;
    pointVariant: Styled.VariantType;
    ptGoal: number;
    ptVariant: Styled.VariantType;
    incentiveRatio: number;
    ptOnlyGoal: number;
    ptOnlyVariant: Styled.VariantType;
    ptOnlyIncentiveRatio: number;
    incentiveRatioVariant: Styled.VariantType;
  }[];
}

const FeeRatioGraph = ({ basicIncentiveRatio, feeRatioGraphColumns }: IFeeRatioGraphProps) => {
  const DEFAULT = 'default' as Styled.VariantType;
  const totalColumns = feeRatioGraphColumns ? feeRatioGraphColumns.length + 1 : 0; // 기본 열 포함한 전체 열 수

  return (
    <Styled.Wrapper totalColumns={totalColumns}>
      <Styled.RatioRow>
        <Styled.GoalBox variant={DEFAULT}>포인트</Styled.GoalBox>
        <Styled.GoalBox variant={DEFAULT}>PT매출액</Styled.GoalBox>
        <Styled.IncentiveCircle variant={DEFAULT}>{basicIncentiveRatio}%</Styled.IncentiveCircle>
        <Styled.GoalBox variant={DEFAULT}>PT매출액 단독</Styled.GoalBox>
        <Styled.IncentiveCircle variant={DEFAULT}>{basicIncentiveRatio}%</Styled.IncentiveCircle>
      </Styled.RatioRow>

      {feeRatioGraphColumns.map((info, index) => (
        <Styled.RatioRow key={index}>
          <Styled.GoalBox variant={info.pointVariant}>{info.pointGoal}</Styled.GoalBox>
          <Styled.GoalBox variant={info.ptVariant}>{info.ptGoal}</Styled.GoalBox>
          <Styled.IncentiveCircle variant={info.incentiveRatioVariant}>
            {Math.floor(info.incentiveRatio * 100)}%
          </Styled.IncentiveCircle>
          <Styled.GoalBox variant={info.ptOnlyVariant}>{info.ptOnlyGoal}</Styled.GoalBox>
          <Styled.IncentiveCircle variant={info.incentiveRatioVariant}>
            {Math.floor(info.incentiveRatio * 100)}%
          </Styled.IncentiveCircle>
        </Styled.RatioRow>
      ))}
    </Styled.Wrapper>
  );
};

export default FeeRatioGraph;
