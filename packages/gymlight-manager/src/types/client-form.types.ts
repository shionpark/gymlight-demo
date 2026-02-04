import type { ICreateBranchRequest, IJoinFormRequest } from './api-request.types';

export interface IRawJoinForm extends Omit<IJoinFormRequest, 'birthDate'>, Record<string, unknown> {
  birthDateYear: string;
  birthDateMonth: string;
  birthDateDay: string;

  joinDateYear: string;
  joinDateMonth: string;
  joinDateDay: string;
}

export interface IBranchForm extends ICreateBranchRequest {
  [key: string]: string;
}
