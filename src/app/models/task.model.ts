export interface Task {
  id: number;
  title: string;
  description: string;
  priority: string; 
  dueDate: Date; 
  createdAt: Date;
  updatedAt: Date;
  done: boolean;
}
