import { IBranchNameResponse } from '@/types';

export const getBranchById = ({
  branches,
  branchId,
}: {
  branches: IBranchNameResponse[];
  branchId: number;
}): IBranchNameResponse | null => {
  return branches.find((branch) => branch.branchId === branchId) || null;
};
