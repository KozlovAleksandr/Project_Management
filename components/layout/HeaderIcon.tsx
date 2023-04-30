import { IconType } from 'react-icons';
import { IconContext } from 'react-icons';
import styles from './HeaderIcon.module.scss';

interface HeaderIcon {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const HeaderIcon: React.FC<HeaderIcon> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <li>
      <IconContext.Provider value={{ className: styles.reactIcons }}>
        <Icon />
        <p className={styles.label}>{label}</p>
      </IconContext.Provider>
    </li>
  );
};

export default HeaderIcon;
