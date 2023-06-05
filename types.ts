export type Task = {
  id: string;
  title: string;
  status: 'active' | 'completed';
  prioritie: string;
  description: string;
  date: Date | null;
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
