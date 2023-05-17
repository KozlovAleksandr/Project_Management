export type Task = {
  id: string;
  title: string;
  status: string;
  description: string;
  date: string;
  category: string;
  project: {
    projectId: string;
    projectName: string;
  };
};

export type Project = {
  id: string;
  title: string;
  color: string;
};
