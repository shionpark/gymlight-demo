import { useState } from 'react';
import type { UserRoleType } from '@/types';

export interface UseStaffRoleFilterReturnType {
  selectedRoles: UserRoleType[];
  toggleRole: (role: UserRoleType) => void;
  resetRoles: () => void;
  isRoleActive: (role: UserRoleType) => boolean;
}

export const useStaffRoleFilter = (): UseStaffRoleFilterReturnType => {
  const [selectedRoles, setSelectedRoles] = useState<UserRoleType[]>([]);

  const toggleRole = (role: UserRoleType) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role],
    );
  };

  const resetRoles = () => {
    setSelectedRoles([]);
  };

  const isRoleActive = (role: UserRoleType) => selectedRoles.includes(role);

  return {
    selectedRoles,
    toggleRole,
    resetRoles,
    isRoleActive,
  };
};

export type IStaffRoleFilterProps = ReturnType<typeof useStaffRoleFilter>;
