import React, { FC } from 'react';
import { BsFillFlagFill } from 'react-icons/bs';
import { Task } from '@/types';
import { IconContext } from 'react-icons';

const TaskListItem: FC<Task> = ({
  id,
  title,
  description,
  date,
  status,
  prioritie,
  category,
}) => {
  let elementClassName;

  switch (prioritie) {
    case 'Низкий':
      elementClassName = 'text-blue-600';
      break;
    case 'Средний':
      elementClassName = 'text-orange-600';
      break;
    case 'Высокий':
      elementClassName = 'text-red-600';
      break;
    default:
      elementClassName = 'text-stone-600';
  }

  return (
    <div className="mb-2 mx-auto max-w-6xl p-2 pt-0 border-b rounded-b-lg border-slate-700 text-neutral-200 cursor-pointer">
      <div className="mb-1">
        <div className="flex items-center">
          <button className="border border-slate-700 w-5 h-5 mr-2 p-1 rounded-full hover:bg-green-900 ease-linear duration-200" />
          <span className="w-full text-lg line-clamp-1 ">{title}</span>
          <div className={`flex mx-2 ${elementClassName}`}>
            <BsFillFlagFill />
          </div>
        </div>

        <p className="text-xs overflow-hidden max-h-16 line-clamp-2">
          {description}
        </p>
      </div>

      <div className="flex justify-between text-xs">
        <span>{date.toString()}</span>
        <span>{category}</span>
      </div>
    </div>
  );
};

export default TaskListItem;
