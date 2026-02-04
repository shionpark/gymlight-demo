import {
  Checkbox,
  Dropdown,
  DualSideBar,
  IconButton,
  SquareButton,
  TableHeaderButton,
  VerticalTable,
  TablePaginationManager,
  DropdownForMenu,
} from 'gymlight-design-system';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

import { formatDate, formatDuration, formatPrice, getCategoryInfoById } from '@/utils';
import { tableCellWidth } from '@/styles/variables';
import type { ProductCategoryType } from '@/types';

import { ProductStatusFlag } from '@/features/product/components/ProductStatusFlag';
import { ProductGridContainer } from '@/features/product/components/ProductGrid';
import type { IProductFormProps } from '@/features/product/components/ProductForm/ProductForm';
import type { IProductTableProps } from '@/features/product/hooks';

import * as Styled from './ProductTable.styles';

interface ProductTableProps extends IProductTableProps {
  openProductFormModal: (props?: IProductFormProps) => void;
}

const ProductTable = ({
  productData,
  openProductFormModal,
  pageProps: { pageSize, currentPageNumber, handlePageNumberChange, handlePageSizeChange },
  viewProps: { viewMenus, viewIcons, activeView, checkIsActiveView, getSelectViewHandler },
  sortProps: {
    PRODUCT_SORT_OPTIONS,
    sortParam: currentSortParam,
    productNameButtonProps,
    originalPriceButtonProps,
    sellingPriceButtonProps,
    durationButtonProps,
    countButtonProps,
    createdAtButtonProps,
    updatedAtButtonProps,
    setSortParam,
  },
  categorySelectProps: {
    categoryTabs,
    checkIsActiveCategory,
    getSelectActiveHandler,
    productCategoryData,
  },
  checkboxProps,
  dropdownProps: { setDropdownMenuRef, toggleDropdownMenu, checkDropdownMenuOpen },
  optionsMenuProps: { setOptionsMenuRef, toggleOptionsMenu, checkOptionsMenuOpen },
  filterDropdownProps: {
    setFilterMenuRef,
    toggleFilterMenu,
    checkFilterMenuOpen,
    closeFilterDropdownMenu,
  },
}: ProductTableProps) => {
  const { checkboxStates, checkboxCountSelected, toggleOneCheckbox, toggleAllCheckboxes } =
    checkboxProps;

  const columnWidths = [
    tableCellWidth.checkbox,
    tableCellWidth.lg, // 상품명
    tableCellWidth.sm, // 상품 종류
    tableCellWidth.sm, // 상태
    tableCellWidth.sm, // 기간
    tableCellWidth.sm, // 세션
    tableCellWidth.md, // 정가
    tableCellWidth.md, // 판매가
    tableCellWidth.md, // 생성일
    tableCellWidth.md, // 수정일
    tableCellWidth.xxs,
  ];

  const tableHeaderCells = [
    <CheckIcon onClick={toggleAllCheckboxes} />,
    <TableHeaderButton
      id="product-name"
      {...productNameButtonProps}
      icon={<productNameButtonProps.icon />}
    />,
    <TableHeaderButton id="category" buttonName="종류" />,
    <TableHeaderButton id="status" buttonName="상태" />,
    <TableHeaderButton
      id="duration"
      {...durationButtonProps}
      icon={<durationButtonProps.icon />}
    />,
    <TableHeaderButton id="count" {...countButtonProps} icon={<countButtonProps.icon />} />,
    <TableHeaderButton
      id="originalPrice"
      {...originalPriceButtonProps}
      icon={<originalPriceButtonProps.icon />}
    />,
    <TableHeaderButton
      id="sellingPrice"
      {...sellingPriceButtonProps}
      icon={<sellingPriceButtonProps.icon />}
    />,
    <TableHeaderButton
      id="createdAt"
      {...createdAtButtonProps}
      icon={<createdAtButtonProps.icon />}
    />,
    <TableHeaderButton
      id="updatedAt"
      {...updatedAtButtonProps}
      icon={<updatedAtButtonProps.icon />}
    />,
    <></>,
  ];

  const tableRows = productData
    ? productData.list.map(
        (
          {
            name,
            status,
            display,
            duration,
            sessions,
            productId,
            categoryId,
            sellingPrice,
            originalPrice,
            createdAt,
            updatedAt,
            includedProductTypes,
          },
          index,
        ) => {
          const categoryInfo = getCategoryInfoById({ productCategoryData, categoryId });
          const formattedDuration = formatDuration(duration);
          const isPackageProduct = categoryInfo?.code === 'PACKAGE';

          return [
            <Checkbox
              id={`${productId}`}
              checked={checkboxStates[productId]}
              onClick={() => toggleOneCheckbox(productId)}
            />,
            name,
            <Styled.FlexColumnContainer>
              <Styled.FlexContainer>
                <ProductStatusFlag status={categoryInfo?.name as ProductCategoryType} />
                {isPackageProduct && (
                  <Styled.OptionsMenuButton
                    ref={setOptionsMenuRef(index)}
                    onClick={() => toggleOptionsMenu(index)}
                  >
                    +{includedProductTypes.length}
                  </Styled.OptionsMenuButton>
                )}
              </Styled.FlexContainer>
              <Styled.OptionsMenuContainer isOpen={checkOptionsMenuOpen(index)}>
                {isPackageProduct &&
                  checkOptionsMenuOpen(index) &&
                  includedProductTypes.map((product, idx) => (
                    <ProductStatusFlag key={idx} status={product} />
                  ))}
              </Styled.OptionsMenuContainer>
            </Styled.FlexColumnContainer>,
            <ProductStatusFlag status={status} />,
            <>
              {formattedDuration.formattedValue}
              {formattedDuration.durationUnit}
            </>,
            `${sessions.toString()}회`,
            formatPrice(originalPrice),
            formatPrice(sellingPrice),
            formatDate(createdAt, 'T', 0),
            formatDate(updatedAt, 'T', 0),
            <Dropdown
              align="left"
              ref={setDropdownMenuRef(index)}
              isDropdownMenuOpened={checkDropdownMenuOpen(index)}
              onClick={() => toggleDropdownMenu(index)}
            >
              <DropdownForMenu
                onClick={() =>
                  openProductFormModal({
                    isEdit: true,
                    name,
                    status,
                    display,
                    sessions,
                    durationUnit: formattedDuration.durationUnit,
                    productId,
                    categoryId,
                    categoryCode: categoryInfo?.code,
                    sellingPrice,
                    originalPrice,
                    formattedDuration,
                  })
                }
              >
                상품 정보 수정
              </DropdownForMenu>
              <DropdownForMenu>상품 삭제</DropdownForMenu>
            </Dropdown>,
          ];
        },
      )
    : [];

  const viewButtons = viewMenus.map((viewMenu) => {
    const ViewIcon = viewIcons[viewMenu];
    return (
      <IconButton
        key={viewMenu}
        icon={<ViewIcon />}
        variant={checkIsActiveView(viewMenu) ? 'active' : 'normal'}
        onClick={getSelectViewHandler(viewMenu)}
      />
    );
  });

  return (
    <>
      <Styled.TableInfoSection>
        <DualSideBar
          leftSideChildren={[
            <Styled.ButtonsWrapper>
              {categoryTabs.map((option) => (
                <SquareButton
                  key={option}
                  size="small"
                  variant={checkIsActiveCategory(option) ? 'primary' : 'outline'}
                  onClick={getSelectActiveHandler(option)}
                >
                  {option}
                </SquareButton>
              ))}
            </Styled.ButtonsWrapper>,
          ]}
        />
        <DualSideBar
          leftSideChildren={[
            <Styled.Details>
              <span>총 {productData?.totalElements}개</span>
              <span>{` / `}</span>
              {currentSortParam}
              {checkboxCountSelected > 0 && (
                <>
                  <span>{` / `}</span>
                  <span>{checkboxCountSelected}개 선택</span>
                </>
              )}
            </Styled.Details>,
          ]}
          rightSideChildren={[
            <Styled.IconWrapper>
              {viewButtons}
              <Dropdown
                align="left"
                ref={setFilterMenuRef(1)}
                button={
                  <SquareButton size="small" variant="outline" onClick={() => toggleFilterMenu(1)}>
                    {currentSortParam}
                    <span>
                      <ChevronDownIcon style={{ width: '1.2rem', marginLeft: '1rem' }} />
                    </span>
                  </SquareButton>
                }
                isDropdownMenuOpened={checkFilterMenuOpen(1)}
                distance={10}
              >
                {PRODUCT_SORT_OPTIONS.map((option) => (
                  <Styled.OptionWrapper
                    key={option}
                    onClick={() => {
                      setSortParam(option);
                      closeFilterDropdownMenu();
                    }}
                  >
                    <span>{option}</span>
                    {currentSortParam === option && <CheckIcon />}
                  </Styled.OptionWrapper>
                ))}
              </Dropdown>
            </Styled.IconWrapper>,
          ]}
        />
      </Styled.TableInfoSection>
      {activeView === 'table' && (
        <>
          <VerticalTable
            columnWidths={columnWidths}
            tableHeaderCells={tableHeaderCells}
            tableRows={tableRows}
          />
          <TablePaginationManager
            totalPageNumber={productData?.totalPages || 0}
            currentPageIndexNumber={currentPageNumber}
            handlePageIndexNumberChange={handlePageNumberChange}
            handlePageSizeChange={handlePageSizeChange}
            tableDataName="상품 "
            pageSize={pageSize}
          />
        </>
      )}
      {activeView === 'grid' && (
        <ProductGridContainer
          productData={productData?.list}
          productCategoryData={productCategoryData}
        />
      )}
    </>
  );
};

export default ProductTable;
