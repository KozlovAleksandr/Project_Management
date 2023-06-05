import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Button } from './Button';
import generateColor from '@/services/generateColor';
import { useHttp } from '@/hooks/http.hook';
import { addProject, toggleProjectkModal } from '@/actions';

type RootState = {
  isProjectModalOpen: boolean;
};

const ModalProject: React.FC = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const { request } = useHttp();

  const dispatch = useDispatch();
  const { isProjectModalOpen } = useSelector((state: RootState) => state);

  const submitFormHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (projectTitle != '') {
      const newProject = {
        id: uuidv4(),
        title: projectTitle,
        color: generateColor(),
      };
      request(
        'http://localhost:3001/projects',
        'POST',
        JSON.stringify(newProject)
      )
        .then(() => dispatch(addProject(newProject)))
        .catch((err) => console.log(err));

      setProjectTitle('');
      dispatch(toggleProjectkModal());
    }
  };

  const toggleModalHandler = (modalType: string): void => {
    dispatch(toggleProjectkModal());
  };

  return (
    <div
      className={`bg-[#23242c] w-[350px] border border-slate-700 rounded-md text-sm font-extralight fixed top-24  text-white p-3 drop-shadow-[0_35px_35px_rgba(0,0,0,0.9)] ${
        !isProjectModalOpen ? 'hidden' : null
      }`}
      style={{ left: 'calc(50% - 175px)' }}
    >
      <form className="flex flex-col" onSubmit={submitFormHandler}>
        <div>Добавить проект</div>
        <input
          type="text"
          placeholder="Название проекта"
          value={projectTitle}
          className="bg-inherit outline-none p-1 text-base font-light my-3"
          onChange={(e) => setProjectTitle(e.target.value)}
        />
        <div className="flex justify-end px-2 gap-2">
          <Button
            classes="bg-zinc-600 py-1 px-2 rounded-md hover:bg-zinc-700"
            label="Отмена"
            type="reset"
            onClick={() => toggleModalHandler('task')}
          />
          <Button
            classes={`bg-sky-800 py-1 px-2 rounded-md ${
              !projectTitle ? 'opacity-25' : 'hover:bg-sky-700'
            }`}
            label="Добавить проект"
            type="submit"
            disabled={!projectTitle}
          />
        </div>
      </form>
    </div>
  );
};

export default ModalProject;
