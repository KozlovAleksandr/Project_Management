import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button } from './Button';
import { Task } from '@/types';
import {
  addTask,
  categoriesFetched,
  prioritiesFetched,
  toggleTaskModal,
} from '@/actions';

import { useHttp } from '@/hooks/http.hook';

type RootState = {
  isTaskModalOpen: boolean;
  priorities: {
    name: string;
    label: string;
    color: string;
  }[];
  categories: {
    name: string;
    label: string;
  }[];
};

const Modal: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [prioritie, setPrioritie] = useState('');
  const [categorie, setCategorie] = useState('');

  const dispatch = useDispatch();
  const { isTaskModalOpen, priorities, categories } = useSelector(
    (state: RootState) => state
  );

  const { request } = useHttp();

  useEffect(() => {
    request('http://localhost:3001/priorities')
      .then((data) => dispatch(prioritiesFetched(data)))
      .catch(() => console.log('priorities error'));

    request('http://localhost:3001/categories')
      .then((data) => dispatch(categoriesFetched(data)))
      .catch(() => console.log('categories error'));
    // eslint-disable-next-line
  }, []);

  const submitFormHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (taskTitle !== '') {
      const newTask: Task = {
        id: uuidv4(),
        title: taskTitle,
        status: 'active',
        prioritie: prioritie,
        description: taskDescription,
        date: new Date().toLocaleDateString(),
        category: categorie,
        project: {
          projectId: '1',
          projectName: 'name',
        },
      };

      request('http://localhost:3001/tasks', 'POST', JSON.stringify(newTask))
        .then(() => dispatch(addTask(newTask)))
        .catch((err) => console.log(err));

      setTaskTitle('');
      setTaskDescription('');
      dispatch(toggleTaskModal());
    }
  };

  return (
    <div
      className={`bg-[#23242c] w-[550px] border border-slate-700 rounded-md text-sm font-extralight fixed top-24  text-white p-3 drop-shadow-[0_35px_35px_rgba(0,0,0,0.9)] ${
        !isTaskModalOpen ? 'hidden' : null
      }`}
      style={{ left: 'calc(50% - 275px)' }}
    >
      <form className="flex flex-col" onSubmit={submitFormHandler}>
        <div className="flex flex-col my-2 h-24 min-h-full">
          <input
            type="text"
            placeholder="Название задачи"
            value={taskTitle}
            className="bg-inherit outline-none p-1 text-base font-light"
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <textarea
            placeholder="Добавить описание..."
            value={taskDescription}
            className="bg-inherit outline-none p-1 resize-none"
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>

        <div className="flex justify-between px-2">
          <div className="flex gap-2">
            <select
              required
              className="bg-[#31333e] rounded-md px-3 border-0 outline-0 appearance-none text-center cursor-pointer"
              id="element"
              name="element"
              onChange={(e) => setCategorie(e.target.value)}
            >
              <option value="">Категория</option>

              {categories &&
                categories.map(({ name, label }) => {
                  return (
                    <option value={label} key={name}>
                      {label}
                    </option>
                  );
                })}
            </select>
            <select
              required
              className="bg-[#31333e] rounded-md px-3 border-0 outline-0 appearance-none text-center cursor-pointer"
              id="prioritie"
              name="element"
              onChange={(e) => setPrioritie(e.target.value)}
            >
              <option value="">Приоритет</option>
              {priorities &&
                priorities.map(({ name, label, color }) => {
                  if (name === 'default') {
                    return null;
                  }
                  return (
                    <option value={label} key={name} className={color}>
                      {label}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              classes="bg-zinc-600 py-1 px-2 rounded-md hover:bg-zinc-700"
              label="Отмена"
              type="reset"
            />
            <Button
              classes={`bg-sky-800 py-1 px-2 rounded-md ${
                !taskTitle ? 'opacity-25' : 'hover:bg-sky-700'
              }`}
              label="Добавить задачу"
              type="submit"
              disabled={!taskTitle}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
