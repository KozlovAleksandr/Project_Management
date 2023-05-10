import { HiBars3 } from 'react-icons/hi2';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';

import { FiSearch } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';

import Icon from './Icon';

const Header = () => {
  const items = [
    {
      label: '',
      href: '',
      icon: HiBars3,
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
      href: '',
      icon: AiOutlineUnorderedList,
      id: uuidv4(),
    },
    {
      label: '',
      href: '',
      icon: RxDashboard,
      id: uuidv4(),
    },
  ];

  return (
    <header className="bg-[#181920] h-12">
      <nav className="h-full px-4">
        <ul className="flex gap-2 items-center h-full">
          {items.map(({ id, icon }) => (
            <li className="first:mr-auto" key={id}>
              <Icon icon={icon} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
