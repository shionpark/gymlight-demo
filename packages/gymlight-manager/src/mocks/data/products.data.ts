import type {
  IProductResponse,
  IProductCategoryResponse,
  ProductStatusType,
  ProductCategoryCodeType,
  ProductOptionsType,
} from '@/types';

/**
 * 상품 카테고리 Mock 데이터
 */
export const mockProductCategories: IProductCategoryResponse[] = [
  { productCategoryId: 1, name: '회원권', code: 'MEMBERSHIP' as ProductCategoryCodeType },
  { productCategoryId: 2, name: '패키지', code: 'PACKAGE' as ProductCategoryCodeType },
  { productCategoryId: 3, name: '운동복', code: 'CLOTHING' as ProductCategoryCodeType },
  { productCategoryId: 4, name: '락커', code: 'LOCKER' as ProductCategoryCodeType },
  { productCategoryId: 5, name: 'PT', code: 'PT' as ProductCategoryCodeType },
];

/**
 * 상품 Mock 데이터
 */
export const mockProducts: IProductResponse[] = [
  // 회원권 상품
  {
    productId: 1,
    name: '1개월 회원권',
    status: '판매중' as ProductStatusType,
    originalPrice: 150000,
    sellingPrice: 150000,
    display: true,
    isDiscounted: false,
    duration: 30,
    sessions: 0,
    includedProductTypes: ['회원권'] as ProductOptionsType[],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 1,
    branchId: 1,
  },
  {
    productId: 2,
    name: '3개월 회원권',
    status: '판매중' as ProductStatusType,
    originalPrice: 390000,
    sellingPrice: 350000,
    display: true,
    isDiscounted: true,
    duration: 90,
    sessions: 0,
    includedProductTypes: ['회원권'] as ProductOptionsType[],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 1,
    branchId: 1,
  },
  {
    productId: 3,
    name: '6개월 회원권',
    status: '판매중' as ProductStatusType,
    originalPrice: 720000,
    sellingPrice: 600000,
    display: true,
    isDiscounted: true,
    duration: 180,
    sessions: 0,
    includedProductTypes: ['회원권'] as ProductOptionsType[],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 1,
    branchId: 1,
  },
  {
    productId: 4,
    name: '12개월 회원권',
    status: '이벤트' as ProductStatusType,
    originalPrice: 1200000,
    sellingPrice: 990000,
    display: true,
    isDiscounted: true,
    duration: 365,
    sessions: 0,
    includedProductTypes: ['회원권'] as ProductOptionsType[],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 1,
    branchId: 1,
  },
  // PT 상품
  {
    productId: 5,
    name: 'PT 10회',
    status: '판매중' as ProductStatusType,
    originalPrice: 700000,
    sellingPrice: 700000,
    display: true,
    isDiscounted: false,
    duration: 60,
    sessions: 10,
    includedProductTypes: ['PT'] as ProductOptionsType[],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 5,
    branchId: 1,
  },
  {
    productId: 6,
    name: 'PT 20회',
    status: '판매중' as ProductStatusType,
    originalPrice: 1300000,
    sellingPrice: 1200000,
    display: true,
    isDiscounted: true,
    duration: 90,
    sessions: 20,
    includedProductTypes: ['PT'] as ProductOptionsType[],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 5,
    branchId: 1,
  },
  {
    productId: 7,
    name: 'PT 30회',
    status: '판매중' as ProductStatusType,
    originalPrice: 1800000,
    sellingPrice: 1500000,
    display: true,
    isDiscounted: true,
    duration: 120,
    sessions: 30,
    includedProductTypes: ['PT'] as ProductOptionsType[],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 5,
    branchId: 1,
  },
  // 운동복 상품
  {
    productId: 8,
    name: '운동복 1개월',
    status: '판매중' as ProductStatusType,
    originalPrice: 30000,
    sellingPrice: 30000,
    display: true,
    isDiscounted: false,
    duration: 30,
    sessions: 0,
    includedProductTypes: ['운동복'] as ProductOptionsType[],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 3,
    branchId: 1,
  },
  {
    productId: 9,
    name: '운동복 6개월',
    status: '판매중' as ProductStatusType,
    originalPrice: 150000,
    sellingPrice: 120000,
    display: true,
    isDiscounted: true,
    duration: 180,
    sessions: 0,
    includedProductTypes: ['운동복'] as ProductOptionsType[],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 3,
    branchId: 1,
  },
  // 락커 상품
  {
    productId: 10,
    name: '락커 1개월',
    status: '판매중' as ProductStatusType,
    originalPrice: 20000,
    sellingPrice: 20000,
    display: true,
    isDiscounted: false,
    duration: 30,
    sessions: 0,
    includedProductTypes: ['락커'] as ProductOptionsType[],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 4,
    branchId: 1,
  },
  {
    productId: 11,
    name: '락커 6개월',
    status: '판매중' as ProductStatusType,
    originalPrice: 100000,
    sellingPrice: 80000,
    display: true,
    isDiscounted: true,
    duration: 180,
    sessions: 0,
    includedProductTypes: ['락커'] as ProductOptionsType[],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 4,
    branchId: 1,
  },
  // 패키지 상품
  {
    productId: 12,
    name: '3개월 올인원 패키지',
    status: '이벤트' as ProductStatusType,
    originalPrice: 600000,
    sellingPrice: 500000,
    display: true,
    isDiscounted: true,
    duration: 90,
    sessions: 10,
    includedProductTypes: ['회원권', '운동복', '락커', 'PT'] as ProductOptionsType[],
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 2,
    branchId: 1,
  },
  {
    productId: 13,
    name: '6개월 스타터 패키지',
    status: '판매중' as ProductStatusType,
    originalPrice: 900000,
    sellingPrice: 750000,
    display: true,
    isDiscounted: true,
    duration: 180,
    sessions: 20,
    includedProductTypes: ['회원권', 'PT'] as ProductOptionsType[],
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2024-01-01'),
    categoryId: 2,
    branchId: 1,
  },
];

/**
 * 상품 ID로 검색
 */
export const findProductById = (productId: number): IProductResponse | undefined => {
  return mockProducts.find((product) => product.productId === productId);
};

/**
 * 카테고리별 상품 필터링
 */
export const getProductsByCategory = (categoryId: number): IProductResponse[] => {
  return mockProducts.filter((product) => product.categoryId === categoryId);
};

/**
 * 지점별 상품 필터링
 */
export const getProductsByBranch = (branchId: number): IProductResponse[] => {
  return mockProducts.filter((product) => product.branchId === branchId);
};
