interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
  createdAt: number;
}

interface TaskStore {
  tasks: Task[];
}

export type { Task, TaskStore };
