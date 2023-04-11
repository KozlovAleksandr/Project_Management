import { IconContext } from 'react-icons';
import {
  HiBars3,
  HiOutlineSquare3Stack3D,
  HiOutlineWallet,
} from 'react-icons/hi2';
import { FcPlus } from 'react-icons/fc';
import { FiSearch, FiBell, FiSmile } from 'react-icons/fi';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.nav__categories}>
          <li>
            <IconContext.Provider value={{ className: styles.reactIcons }}>
              <div>
                <HiBars3 />
              </div>
            </IconContext.Provider>
          </li>
          <li>
            <IconContext.Provider value={{ className: styles.reactIcons }}>
              <div>
                <HiOutlineSquare3Stack3D />
              </div>
            </IconContext.Provider>
            Dashboard
          </li>
          <li>
            <IconContext.Provider value={{ className: styles.reactIcons }}>
              <div>
                <HiOutlineWallet />
              </div>
            </IconContext.Provider>
            Collections
          </li>
        </ul>
        <ul className={styles.nav__user}>
          <li>
            <IconContext.Provider value={{ className: styles.reactIcons }}>
              <div>
                <FcPlus />
              </div>
            </IconContext.Provider>
          </li>
          <li>
            <IconContext.Provider value={{ className: styles.reactIcons }}>
              <div>
                <FiSearch />
              </div>
            </IconContext.Provider>
          </li>
          <li>
            {' '}
            <IconContext.Provider value={{ className: styles.reactIcons }}>
              <div>
                <FiBell />
              </div>
            </IconContext.Provider>
          </li>
          <li>
            {' '}
            <IconContext.Provider value={{ className: styles.reactIcons }}>
              <div>
                <FiSmile />
              </div>
            </IconContext.Provider>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
