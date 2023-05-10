import { IconType } from 'react-icons';
import { IconContext } from 'react-icons';

interface IconProps {
  label?: string;
  icon: IconType;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ label, icon: Icon, onClick }) => {
  return (
    <IconContext.Provider value={{ className: 'cursor-pointer text-white' }}>
      <Icon />
      <span className="text-white">{label}</span>
    </IconContext.Provider>
  );
};

export default Icon;
