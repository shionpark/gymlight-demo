import { Checkbox, DualSideBar, SquareButton } from 'gymlight-design-system';

import { useToggleTabMenu } from '@/hooks';

import {
  PaymentMethodTable,
  ProductCategoryTable,
  ProductSalesTable,
  ReceivableTable,
  RefundTable,
  SalesTable,
  TotalSalesTable,
} from '../tables';

import * as Styled from './SalesStatistics.styles';

const SalesStatistics = () => {
  const tabMenus = [
    '매출 내역',
    '상품별 내역',
    '품목별 내역',
    '결제수단 내역',
    '환불 내역',
    '미수금 내역',
  ];

  const { checkIsActiveTab, getSelectTabHandler, activeTab } = useToggleTabMenu(tabMenus);

  const getTableRows = (rowData: (string | React.ReactNode)[], count?: number) => {
    return Array.from({ length: count || 12 }, (_, index: number) => [
      <Checkbox />,
      index + 1,
      ...rowData,
    ]);
  };

  return (
    <Styled.Wrapper>
      <div>
        <DualSideBar
          leftSideChildren={[
            <Styled.ButtonsWrapper>
              {tabMenus.map((option, index) => (
                <SquareButton
                  key={index}
                  size="small"
                  variant={checkIsActiveTab(option) ? 'primary' : 'outline'}
                  onClick={getSelectTabHandler(option)}
                >
                  {option}
                </SquareButton>
              ))}
            </Styled.ButtonsWrapper>,
          ]}
        />
        <div className="scrollable">
          {activeTab === '매출 내역' && <SalesTable getTableRows={getTableRows} />}
          {activeTab === '상품별 내역' && <ProductSalesTable getTableRows={getTableRows} />}
          {activeTab === '품목별 내역' && <ProductCategoryTable />}
          {activeTab === '결제수단 내역' && <PaymentMethodTable />}
          {activeTab === '환불 내역' && <RefundTable getTableRows={getTableRows} />}
          {activeTab === '미수금 내역' && <ReceivableTable getTableRows={getTableRows} />}
        </div>
      </div>

      <div className="total-table">
        <TotalSalesTable />
      </div>
    </Styled.Wrapper>
  );
};

export default SalesStatistics;
