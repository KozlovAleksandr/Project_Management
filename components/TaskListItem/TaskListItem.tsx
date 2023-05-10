import React, { FC } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import Icon from '../layout/Icon';
import { Task } from '@/types';

const TaskListItem: FC<Task> = ({
  id,
  title,
  description,
  date,
  status,
  category,
}) => {
  let elementClassName;

  switch (status) {
    case 'Низкий':
      elementClassName = 'bg-blue-300 text-blue-600';
      break;
    case 'Средний':
      elementClassName = 'bg-orange-300 text-orange-600';
      break;
    case 'Высокий':
      elementClassName = 'bg-red-300 text-red-600';
      break;
    case 'Выполнено':
      elementClassName = 'bg-green-300 text-green-600';
      break;
    default:
      elementClassName = 'bg-amber-300 text-amber-600';
  }

  return (
    <div className="bg-slate-200 m-3 w-80 h-48 flex flex-col justify-between p-3.5 border rounded-lg ">
      <div>
        <div className="flex justify-between">
          <div className={`px-2 py-1 rounded-lg text-sm  ${elementClassName}`}>
            {status}
          </div>
          <Icon icon={BsThreeDots} />
        </div>
        <span className="block w-full mt-1 mb-1 text-lg font-semibold overflow-hidden whitespace-nowrap">
          {title}
        </span>
        <p className="text-xs font-normal overflow-hidden max-h-16">
          {description}
        </p>
      </div>
      <div className="flex justify-between text-sm">
        <span>{date.toString()}</span>
        <span>{category}</span>
      </div>
    </div>
  );
};

export default TaskListItem;
