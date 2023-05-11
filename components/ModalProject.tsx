import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Button } from './Button';
import generateColor from '@/services/generateColor';
import { useHttp } from '@/hooks/http.hook';
import { addProject } from '@/actions';

const ModalProject = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const { request } = useHttp();

  const dispatch = useDispatch();

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
      //   dispatch(toggleModal());
    }
  };

  return (
    <div
      className={`bg-[#23242c] w-[350px] border border-slate-700 rounded-md text-sm font-extralight fixed top-24  text-white p-3 drop-shadow-[0_35px_35px_rgba(0,0,0,0.9)]`}
      style={{ left: 'calc(50% - 175px)' }}
    >
      <form className="flex flex-col" onSubmit={submitFormHandler}>
        <div>Добавить проект</div>
        <input
          type="text"
          placeholder="Название проекта"
          value={projectTitle}
          className="bg-inherit outline-none p-1 text-base font-light"
          onChange={(e) => setProjectTitle(e.target.value)}
        />
        <Button
          classes={`bg-[#5050be]  py-1 px-2 rounded-md ${
            !projectTitle ? 'opacity-25' : null
          }`}
          label="Добавить проект"
          type="submit"
          disabled={!projectTitle}
        />
      </form>
    </div>
  );
};

export default ModalProject;
