import {
  usePtIncentiveRateWithMembershipPointTable,
  usePtIncentiveRateWithoutMembershipPointTable,
  useSalaryVariableForm,
} from '@/features/accounting';

import { SquareButton } from 'gymlight-design-system';
import * as Styled from './SalaryVariableForm.styles';

const SalaryVariableForm = () => {
  const { isEdit, toggleIsEdit, handleSubmitUpdate, cardData } = useSalaryVariableForm();

  const { formElementsProps: formWithMembershipProps } =
    usePtIncentiveRateWithMembershipPointTable();

  const { formElementsProps: formWithoutMembershipProps } =
    usePtIncentiveRateWithoutMembershipPointTable();

  return (
    <Styled.Container>
      <Styled.NormalVariableWrapper>
        <Styled.Grid>
          {cardData.map(({ title, data }) => (
            <Styled.Card>
              <Styled.CardHeader>
                <Styled.CardTitle>{title}</Styled.CardTitle>
              </Styled.CardHeader>
              <Styled.Table>
                <tbody>
                  {data.map(({ name, props }, index) => (
                    <tr key={index}>
                      <Styled.TableCell isHeader>{name}</Styled.TableCell>
                      <Styled.TableCell>
                        <Styled.Input type="number" {...props} readOnly={!isEdit} />
                      </Styled.TableCell>
                    </tr>
                  ))}
                </tbody>
              </Styled.Table>
            </Styled.Card>
          ))}
        </Styled.Grid>
      </Styled.NormalVariableWrapper>
      {isEdit ? (
        <Styled.RightAlignContainer>
          <SquareButton variant="primary" onClick={handleSubmitUpdate}>
            일반 변수 변경
          </SquareButton>
        </Styled.RightAlignContainer>
      ) : (
        <div />
      )}
      <Styled.CardHeader>
        <Styled.CardTitle>PT 인센티브 (수업료) 비율</Styled.CardTitle>
      </Styled.CardHeader>

      <Styled.RatioTableSetWrapper>
        {/* 수업료 정산기준 (포인트 O) */}
        <Styled.RatioTableWithPointWrapper>
          <Styled.RatioTable>
            <thead>
              <tr>
                <th colSpan={isEdit ? 4 : 3}>포인트 반영</th>
              </tr>
              <tr>
                <th>매출액</th>
                <th>포인트</th>
                <th>정산비율</th>
                {isEdit && <th>수정</th>}
              </tr>
            </thead>
            <tbody>
              {formWithMembershipProps.map((props, index) => {
                const {
                  inputs: { membershipPoints, ptRevenue, ptIncentiveRecognitionRate },
                  button,
                } = props;
                return (
                  <tr key={`with-point${membershipPoints}`}>
                    <td>
                      <Styled.SmallInput
                        type="number"
                        value={ptRevenue.value}
                        onChange={ptRevenue.onChange}
                        readOnly={!isEdit}
                      />
                      {index === 0
                        ? '이하'
                        : index === formWithMembershipProps.length - 1
                          ? '이상'
                          : '미만'}
                    </td>
                    <td>
                      <Styled.SmallInput
                        type="number"
                        value={membershipPoints.value}
                        onChange={membershipPoints.onChange}
                        readOnly={!isEdit}
                      />
                      {index === 0
                        ? '이하'
                        : index === formWithMembershipProps.length - 1
                          ? '이상'
                          : '미만'}
                    </td>
                    <td>
                      <Styled.SmallInput
                        type="number"
                        value={ptIncentiveRecognitionRate.value}
                        onChange={ptIncentiveRecognitionRate.onChange}
                        readOnly={!isEdit}
                      />
                    </td>
                    {isEdit && (
                      <td>
                        <SquareButton size="small" variant="primary" onClick={button.onClick} wide>
                          변경
                        </SquareButton>
                      </td>
                    )}
                  </tr>
                );
              })}
              <tr>
                <td colSpan={isEdit ? 3 : 4}>상단 기준 초과시 마지막 비율 적용</td>
              </tr>
            </tbody>
          </Styled.RatioTable>
        </Styled.RatioTableWithPointWrapper>
        {/* 정산비율 (%) */}

        {/* 수업료 정산기준 (포인트 X) */}
        <Styled.RatioTableWrapper>
          <Styled.RatioTable>
            <thead>
              <tr>
                <th colSpan={isEdit ? 3 : 2}>포인트 미반영</th>
              </tr>
              <tr>
                <th>매출액 (만원)</th> <th>정산비율</th> {isEdit && <th>수정</th>}
              </tr>
            </thead>
            <tbody>
              {formWithoutMembershipProps.map((props, index) => {
                const {
                  inputs: { ptRevenue, ptIncentiveRecognitionRate },
                  button,
                } = props;
                return (
                  <tr key={`without-point${index}`}>
                    <td>
                      <Styled.SmallInput
                        type="number"
                        value={ptRevenue.value}
                        onChange={ptRevenue.onChange}
                        readOnly={!isEdit}
                      />{' '}
                      {index === 0 ? '이하' : '미만'}
                    </td>

                    <td>
                      <Styled.SmallInput
                        type="number"
                        value={ptIncentiveRecognitionRate.value}
                        onChange={ptIncentiveRecognitionRate.onChange}
                        readOnly={!isEdit}
                      />
                    </td>
                    {isEdit && (
                      <td>
                        <SquareButton size="small" variant="primary" onClick={button.onClick} wide>
                          변경
                        </SquareButton>
                      </td>
                    )}
                  </tr>
                );
              })}
              <tr>
                <td colSpan={isEdit ? 2 : 3}>상단 기준 초과시 마지막 비율 적용</td>
              </tr>
            </tbody>
          </Styled.RatioTable>
        </Styled.RatioTableWrapper>
      </Styled.RatioTableSetWrapper>
      <Styled.ButtonContainer>
        <div />
        <SquareButton wide onClick={toggleIsEdit}>
          {isEdit ? '완료' : '수정'}
        </SquareButton>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};
export default SalaryVariableForm;
