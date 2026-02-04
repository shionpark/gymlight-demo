import { client } from './client';
import { URLS } from '@/constants';
import type {
  ICreatePackageProductRequest,
  ICreateProductRequest,
  IProductCategoryResponse,
  IProductListQuery,
  IProductListResponse,
  IUpdateProductRequest,
} from '@/types';

const {
  API: { PRODUCTS },
} = URLS;

export const fetchProducts = async (params: IProductListQuery) =>
  client.get<IProductListResponse>(PRODUCTS.RUD, {
    params,
  });

export const fetchProductCategories = async () =>
  client.get<IProductCategoryResponse[]>(PRODUCTS.CATEGORY);

export const createProduct = ({ ...request }: ICreateProductRequest) =>
  client.post<void>(PRODUCTS.CREATE, request);

export const createPackageProduct = ({ ...request }: ICreatePackageProductRequest) =>
  client.post<void>(PRODUCTS.PACKAGE.CREATE, request);

export const updateProduct = ({ productId, ...request }: IUpdateProductRequest) =>
  client.patch(`${PRODUCTS.RUD}/${productId}`, request);
