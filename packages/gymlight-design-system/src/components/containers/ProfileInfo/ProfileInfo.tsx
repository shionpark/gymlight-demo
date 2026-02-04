import { ButtonHTMLAttributes, memo } from 'react';
import { ProfileInfoContainer, ProfileInfoContent } from './ProfileInfo.styles';

import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Profile from './Profile/Profile';

type UserRoleType =
  | '관리자'
  | '매니저'
  | '팀장 트레이너'
  | '트레이너'
  | '팀장 FC'
  | 'FC'
  | '인포'
  | '전지점 인포';

interface IProfileInfoProps extends ButtonHTMLAttributes<HTMLDivElement> {
  name: string;
  role: UserRoleType;
  branch?: string;
  isDropdown?: boolean;
}

const ProfileInfo = ({ name, role, branch, isDropdown = true, ...rest }: IProfileInfoProps) => {
  return (
    <ProfileInfoContainer {...rest}>
      <Profile />
      <ProfileInfoContent>
        {role === '관리자' ? (
          <span>{role}</span>
        ) : (
          <>
            <span className="profile-name">{name}님</span>
            <div>
              <span className="profile-role">{role}</span>
              {branch && (
                <>
                  <span style={{ color: 'gray' }}>|</span>
                  <span className="profile-branch">{branch}</span>
                </>
              )}
            </div>
          </>
        )}
      </ProfileInfoContent>
      {isDropdown && <ChevronDownIcon />}
    </ProfileInfoContainer>
  );
};

ProfileInfo.displayName = 'ProfileInfo';

export default memo(ProfileInfo);
