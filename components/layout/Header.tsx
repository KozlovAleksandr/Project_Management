import { IconContext } from 'react-icons';
import {
  HiBars3,
  HiOutlineSquare3Stack3D,
  HiOutlineWallet,
} from 'react-icons/hi2';
import { FiSearch, FiSmile } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';

import HeaderIcon from './HeaderIcon';
import styles from './Header.module.scss';

const Header = () => {
  const items = [
    {
      label: '',
      href: '',
      icon: HiBars3,
      id: uuidv4(),
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: HiOutlineSquare3Stack3D,
      id: uuidv4(),
    },
    {
      label: 'Collections',
      href: '/collections',
      icon: HiOutlineWallet,
      id: uuidv4(),
    },

    {
      label: '',
      href: '',
      icon: FiSearch,
      id: uuidv4(),
    },
    {
      label: '',
      href: '/user/123',
      icon: FiSmile,
      id: uuidv4(),
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          {items.map((item) => (
            <HeaderIcon
              key={item.id}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
