import { tasksFetched, tasksFetching, tasksFetchingError } from '@/actions';
import { useHttp } from '@/hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '@/types';
import TaskListItem from '../TaskListItem/TaskListItem';

type RootState = {
  tasks: Task[];
  tasksLoadingStatus: string;
};

const TaskList: React.FC = () => {
  const { tasks, tasksLoadingStatus } = useSelector(
    (state: RootState) => state
  );

  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(tasksFetching());
    request('http://localhost:3001/tasks')
      .then((data) => dispatch(tasksFetched(data)))
      .catch(() => dispatch(tasksFetchingError()));

    // eslint-disable-next-line
  }, []);

  if (tasksLoadingStatus === 'loading') {
    return <h1>LOADING</h1>;
  } else if (tasksLoadingStatus === 'error') {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr: Task[]) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Задач пока нет</h5>;
    }

    return arr.map(({ ...props }) => {
      return <TaskListItem {...props} />;
    });
  };

  const elements = renderHeroesList(tasks);
  return <div className="px-4">{elements}</div>;
};

export default TaskList;
