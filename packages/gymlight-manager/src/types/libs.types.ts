import type { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';
import type { IErrorResponse, IPaginationResponse } from './api-response.types';

export type UseListQueryOptionsType<TResponse> = Omit<
  UseQueryOptions<AxiosResponse<IPaginationResponse<TResponse>, any>>,
  'queryFn' | 'queryKey'
>;

export type UseQueryOptionsType<TResponse> = Omit<
  UseQueryOptions<AxiosResponse<TResponse, any>>,
  'queryFn' | 'queryKey'
>;

export type UseMutationOptionsType<TResponse, TRequestData> = UseMutationOptions<
  AxiosResponse<TResponse>,
  AxiosError<IErrorResponse>,
  TRequestData
> & { onSuccessAdditional?: (params?: any) => void; onErrorAdditional?: (params?: any) => void };

export type IQueryErrorResponse = AxiosError<IErrorResponse>;
