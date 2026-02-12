import { http, delay } from 'msw';

import { URLS } from '@/constants';

import { wrapResponse, notFoundResponse } from '../utils/response.utils';
import { wrapPaginationResponse, parsePaginationParams, sliceByPagination } from '../utils/pagination.utils';
import { mockProducts, mockProductCategories, findProductById } from '../data';

const API_BASE = `*${URLS.API.PREFIX}`;

export const productHandlers = [
  /**
   * GET /api/products - 상품 목록 조회
   */
  http.get(`${API_BASE}${URLS.API.PRODUCTS.RUD}`, async ({ request }) => {
    await delay(300);

    const url = new URL(request.url);
    const { pageNum, pageSize } = parsePaginationParams(url);

    // 필터링 파라미터
    const categoryId = url.searchParams.get('categoryId');
    const branchId = url.searchParams.get('branchId');

    let filteredProducts = [...mockProducts];

    if (categoryId) {
      filteredProducts = filteredProducts.filter((p) => p.categoryId === Number(categoryId));
    }

    if (branchId) {
      filteredProducts = filteredProducts.filter((p) => p.branchId === Number(branchId));
    }

    const paginatedList = sliceByPagination(filteredProducts, pageNum, pageSize);

    return wrapPaginationResponse(paginatedList, pageNum, pageSize, filteredProducts.length);
  }),

  /**
   * GET /api/products/categories - 상품 카테고리 목록
   */
  http.get(`${API_BASE}${URLS.API.PRODUCTS.CATEGORY}`, async () => {
    await delay(200);
    return wrapResponse(mockProductCategories);
  }),

  /**
   * GET /api/products/:productId - 상품 상세 조회
   */
  http.get(`${API_BASE}${URLS.API.PRODUCTS.RUD}/:productId`, async ({ params }) => {
    await delay(200);

    const productId = Number(params.productId);
    const product = findProductById(productId);

    if (!product) {
      return notFoundResponse('상품을 찾을 수 없습니다.');
    }

    return wrapResponse(product);
  }),

  /**
   * POST /api/products/create - 상품 생성
   */
  http.post(`${API_BASE}${URLS.API.PRODUCTS.CREATE}`, async ({ request }) => {
    await delay(500);

    const body = (await request.json()) as {
      name: string;
      originalPrice: number;
      sellingPrice: number;
      duration: number;
      sessions: number;
      productCategoryId: number;
      branchId?: number;
    };

    const newProduct = {
      productId: mockProducts.length + 1,
      name: body.name,
      status: '판매중' as const,
      originalPrice: body.originalPrice,
      sellingPrice: body.sellingPrice,
      display: true,
      isDiscounted: body.originalPrice > body.sellingPrice,
      duration: body.duration,
      sessions: body.sessions,
      includedProductTypes: [] as any[],
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: body.productCategoryId,
      branchId: body.branchId || 1,
    };

    mockProducts.push(newProduct);

    return wrapResponse(newProduct);
  }),

  /**
   * PUT /api/products/:productId - 상품 수정
   */
  http.put(`${API_BASE}${URLS.API.PRODUCTS.RUD}/:productId`, async ({ params, request }) => {
    await delay(400);

    const productId = Number(params.productId);
    const product = findProductById(productId);

    if (!product) {
      return notFoundResponse('상품을 찾을 수 없습니다.');
    }

    const body = (await request.json()) as Partial<typeof product>;
    Object.assign(product, body, { updatedAt: new Date() });

    return wrapResponse(product);
  }),

  /**
   * DELETE /api/products/:productId - 상품 삭제
   */
  http.delete(`${API_BASE}${URLS.API.PRODUCTS.RUD}/:productId`, async ({ params }) => {
    await delay(400);

    const productId = Number(params.productId);
    const productIndex = mockProducts.findIndex((p) => p.productId === productId);

    if (productIndex === -1) {
      return notFoundResponse('상품을 찾을 수 없습니다.');
    }

    // 실제 삭제 대신 상태 변경
    mockProducts[productIndex].status = '삭제';

    return wrapResponse({ message: '상품이 삭제되었습니다.' });
  }),

  /**
   * POST /api/products/create-package - 패키지 상품 생성
   */
  http.post(`${API_BASE}${URLS.API.PRODUCTS.PACKAGE.CREATE}`, async ({ request }) => {
    await delay(500);

    const body = (await request.json()) as {
      name: string;
      originalPrice: number;
      sellingPrice: number;
      productIds: number[];
      productCategoryId: number;
      branchId?: number;
    };

    // 포함된 상품들의 정보 가져오기
    const includedProducts = body.productIds
      .map((id) => findProductById(id))
      .filter(Boolean);

    const totalDuration = includedProducts.reduce((sum, p) => sum + (p?.duration || 0), 0);
    const totalSessions = includedProducts.reduce((sum, p) => sum + (p?.sessions || 0), 0);

    const newPackage = {
      productId: mockProducts.length + 1,
      name: body.name,
      status: '판매중' as const,
      originalPrice: body.originalPrice,
      sellingPrice: body.sellingPrice,
      display: true,
      isDiscounted: body.originalPrice > body.sellingPrice,
      duration: Math.max(totalDuration, 90), // 최소 90일
      sessions: totalSessions,
      includedProductTypes: ['회원권', 'PT'] as any[],
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: 2, // 패키지 카테고리
      branchId: body.branchId || 1,
    };

    mockProducts.push(newPackage);

    return wrapResponse(newPackage);
  }),
];
