import { IconContext } from 'react-icons';
import {
  HiBars3,
  HiOutlineSquare3Stack3D,
  HiOutlineWallet,
} from 'react-icons/hi2';
import { FcPlus } from 'react-icons/fc';
import { FiSearch, FiBell, FiSmile } from 'react-icons/fi';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__categories">
          <li>
            <IconContext.Provider value={{ className: 'react-icons' }}>
              <div>
                <HiBars3 />
              </div>
            </IconContext.Provider>
          </li>
          <li>
            <IconContext.Provider value={{ className: 'react-icons' }}>
              <div>
                <HiOutlineSquare3Stack3D />
              </div>
            </IconContext.Provider>
            Dashboard
          </li>
          <li>
            <IconContext.Provider value={{ className: 'react-icons' }}>
              <div>
                <HiOutlineWallet />
              </div>
            </IconContext.Provider>
            Collections
          </li>
        </ul>
        <ul className="nav__user">
          <li>
            <IconContext.Provider value={{ className: 'react-icons' }}>
              <div>
                <FcPlus />
              </div>
            </IconContext.Provider>
          </li>
          <li>
            <IconContext.Provider value={{ className: 'react-icons' }}>
              <div>
                <FiSearch />
              </div>
            </IconContext.Provider>
          </li>
          <li>
            {' '}
            <IconContext.Provider value={{ className: 'react-icons' }}>
              <div>
                <FiBell />
              </div>
            </IconContext.Provider>
          </li>
          <li>
            {' '}
            <IconContext.Provider value={{ className: 'react-icons' }}>
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
