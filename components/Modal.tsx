import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button } from './Button';
import { Task } from '@/types';
import {
  addTask,
  prioritiesFetched,
  projectsFetched,
  toggleTaskModal,
} from '@/actions';

import { useHttp } from '@/hooks/http.hook';
import Datepicker from './Datepicker';

type RootState = {
  isTaskModalOpen: boolean;
  priorities: {
    name: string;
    label: string;
    color: string;
  }[];
  projects: {
    id: string;
    title: string;
    color: string;
  }[];
};

const Modal: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [prioritie, setPrioritie] = useState('');
  const [project, setProject] = useState({
    projectId: '',
    projectName: '',
  });
  const [targetDay, setTargetDay] = useState<Date | null>(null);

  console.log(project);

  const dispatch = useDispatch();
  const { isTaskModalOpen, priorities, projects } = useSelector(
    (state: RootState) => state
  );

  const { request } = useHttp();

  useEffect(() => {
    request('http://localhost:3001/priorities')
      .then((data) => dispatch(prioritiesFetched(data)))
      .catch(() => console.log('priorities error'));

    request('http://localhost:3001/projects')
      .then((data) => dispatch(projectsFetched(data)))
      .catch(() => console.log('projects error'));
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
        date: targetDay,
        project: project,
      };

      request('http://localhost:3001/tasks', 'POST', JSON.stringify(newTask))
        .then(() => dispatch(addTask(newTask)))
        .catch((err) => console.log(err));

      setTaskTitle('');
      setTaskDescription('');
      setPrioritie('');
      setTargetDay(null);
      dispatch(toggleTaskModal());
    }
  };

  const toggleModalHandler = (modalType: string): void => {
    dispatch(toggleTaskModal());
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
        <div className="flex justify-between border-b border-slate-700 p-2">
          <Datepicker setTargetDayHandler={setTargetDay} />
          <select
            required
            className="bg-[#31333e] rounded-md px-3 border-0 outline-0 appearance-none text-center cursor-pointer"
            id="prioritie"
            name="element"
            onChange={(e) => setPrioritie(e.target.value)}
          >
            {priorities &&
              priorities.map(({ name, label, color }) => {
                if (name === 'default') {
                  return null;
                }
                return (
                  <option
                    value={label}
                    key={name}
                    className={color}
                    label={label}
                  />
                );
              })}
          </select>
        </div>
        <div className="flex justify-between p-2 pb-0">
          <select
            required
            className="bg-[#31333e] rounded-md px-3 border-0 outline-0 appearance-none text-center cursor-pointer"
            id="project"
            name="element"
            onChange={(e) => {
              setProject({
                projectId: e.target.id,
                projectName: e.target.value,
              });
            }}
          >
            <option value="Входящие" label="Входящие" />
            {projects &&
              projects.map(({ id, title }) => {
                return <option value={title} key={id} label={title} />;
              })}
          </select>
          <div className="flex justify-end gap-2">
            <Button
              classes="bg-zinc-600 py-1 px-2 rounded-md hover:bg-zinc-700"
              label="Отмена"
              type="reset"
              onClick={() => toggleModalHandler('task')}
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
