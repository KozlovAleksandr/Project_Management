import { BsInbox, BsFolder, BsCalendar4Event } from 'react-icons/bs';
import { MdAdd } from 'react-icons/md';
import { RxPencil1 } from 'react-icons/rx';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import Icon from './layout/Icon';
import { Button } from './Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleTaskModal,
  toggleProjectkModal,
  projectsFetched,
} from '@/actions';
import { useEffect, useState } from 'react';
import { useHttp } from '@/hooks/http.hook';
import { Project } from '@/types';

type RootState = {
  projects: Project[];
};

const Sidebar: React.FC = () => {
  const { projects } = useSelector((state: RootState) => state);

  const { request } = useHttp();

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

  const toggleModalHandler = (modalType: string) => {
    if (modalType === 'task') {
      dispatch(toggleTaskModal());
    } else if (modalType === 'project') {
      dispatch(toggleProjectkModal());
    }
  };

  useEffect(() => {
    request('http://localhost:3001/projects')
      .then((data) => dispatch(projectsFetched(data)))
      .catch(() => console.log('priorities error'));

    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col justify-between items-start bg-[#181920] w-[276px] px-3 text-sm font-extralight">
      <div className="flex flex-col justify-center items-start gap-1 w-full ">
        <Button
          classes="bg-[#22232f] w-full p-2 rounded-md text-white flex items-center gap-1 border border-slate-700 mb-5"
          label="Новая задача"
          icon={RxPencil1}
          type="button"
          onClick={() => toggleModalHandler('task')}
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
            onClick={() => toggleModalHandler('project')}
          />
        </div>
        {projects &&
          projects.map(({ id, title, color }) => (
            <Link
              href={'/'}
              key={id}
              className="flex gap-2 items-center w-full p-2 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-200"
            >
              {title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
