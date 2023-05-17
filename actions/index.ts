import { Task } from '@/types';

export const tasksFetching = () => {
  return {
    type: 'TASKS_FETCHING',
  };
};

export const tasksFetched = (tasks: any) => {
  return {
    type: 'TASKS_FETCHED',
    payload: tasks,
  };
};

export const tasksFetchingError = () => {
  return {
    type: 'TASKS_FETCHING_ERROR',
  };
};

export const addTask = (task: Task) => {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
};

export const prioritiesFetched = (priorities: any) => {
  return {
    type: 'PRIORITIES_FETCHED',
    payload: priorities,
  };
};

export const categoriesFetched = (categories: any) => {
  return {
    type: 'CATEGORIES_FETCHED',
    payload: categories,
  };
};

export const toggleTaskModal = () => {
  return {
    type: 'TOGGLE_TASK_MODAL',
  };
};

export const toggleProjectkModal = () => {
  return {
    type: 'TOGGLE_PROJECT_MODAL',
  };
};

export const addProject = (project: any) => {
  return {
    type: 'ADD_PROJECT',
    payload: project,
  };
};

export const projectsFetched = (projects: any) => {
  return {
    type: 'PROJECTS_FETCHED',
    payload: projects,
  };
};
