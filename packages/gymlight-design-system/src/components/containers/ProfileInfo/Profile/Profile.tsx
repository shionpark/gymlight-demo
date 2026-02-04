import { ProfileImage } from './Profile.styles';

interface IProfileProps {
  imgSrc?: string;
  altText?: string;
}

const Profile = ({ imgSrc = '/images/profile.png', altText = 'Profile' }: IProfileProps) => {
  return (
    <ProfileImage>
      <img src={imgSrc} alt={altText} />
    </ProfileImage>
  );
};

Profile.displayName = 'Profile';

export default Profile;
