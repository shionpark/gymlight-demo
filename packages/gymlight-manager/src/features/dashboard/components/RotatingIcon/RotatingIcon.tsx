import { Icon } from './RotatingIcon.styles';

const RotatingIcon = ({ shouldSpin }: { shouldSpin: boolean }) => {
  return (
    <>
      <Icon isFetching={shouldSpin} />
    </>
  );
};

export default RotatingIcon;
