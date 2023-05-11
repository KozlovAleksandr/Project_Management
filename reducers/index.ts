const initialState = {
  isModalOpen: false,
  projects: [],
  tasks: [],
  tasksLoadingStatus: 'idle',
  filters: [],
  priorities: [],
  categories: [],
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'TASKS_FETCHING':
      return {
        ...state,
        tasksLoadingStatus: 'loading',
      };
    case 'TASKS_FETCHED':
      return {
        ...state,
        tasks: action.payload,
        tasksLoadingStatus: 'idle',
      };
    case 'TASKS_FETCHING_ERROR':
      return {
        ...state,
        tasksLoadingStatus: 'error',
      };

    case 'PRIORITIES_FETCHED':
      return {
        ...state,
        priorities: action.payload,
      };
    case 'CATEGORIES_FETCHED':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
