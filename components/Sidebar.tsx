import { BsInbox, BsFolder, BsCalendar4Event } from 'react-icons/bs';
import { MdAdd } from 'react-icons/md';
import { RxPencil1 } from 'react-icons/rx';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import Icon from './layout/Icon';
import { Button } from './Button';
import { useDispatch } from 'react-redux';
import { toggleModal } from '@/actions';

const Sidebar = () => {
  const items = [
    {
      label: 'Входящие',
      href: '/',
      icon: BsInbox,
      id: uuidv4(),
    },
    {
      label: 'Сегодня',
      href: '/today',
      icon: BsCalendar4Event,
      id: uuidv4(),
    },
    {
      label: 'Мои задачи',
      href: '/issues',
      icon: BsFolder,
      id: uuidv4(),
    },
  ];

  const { pathname } = useRouter();
  const dispatch = useDispatch();

  const toggleModalHandler = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="flex flex-col justify-between items-start bg-[#181920] w-[276px] px-3 text-sm font-extralight">
      <div className="flex flex-col justify-center items-start gap-1 w-full ">
        <Button
          classes="bg-[#22232f] w-full p-2 rounded-md text-white flex items-center gap-1 border border-slate-700 mb-5"
          label="Новая задача"
          icon={RxPencil1}
          type="button"
          onClick={toggleModalHandler}
        />
        {items.map(({ id, label, href, icon }) => (
          <Link
            href={href}
            key={id}
            className={`flex gap-2 items-center w-full p-2 rounded-md ${
              pathname === href ? ' bg-[#22232f]' : null
            }`}
          >
            <Icon icon={icon} label={label} />
          </Link>
        ))}
        <div className="text-gray-500 font-semibold py-4 flex justify-between w-full">
          <p>Проекты</p>
          <Button
            classes=""
            icon={MdAdd}
            type="button"
            onClick={toggleModalHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
