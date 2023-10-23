import { EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

export class TaskService {
  tasksChanged = new EventEmitter<Task[]>();
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Complete Angular Project',
      description: 'Finish the task management app in Angular.',
      createdAt: new Date('2023-09-01'),
      updatedAt: new Date('2023-09-02'),
      done: false,
    },
    {
      id: 2,
      title: 'Write Documentation',
      description: 'Document the task management app for future reference.',
      createdAt: new Date('2023-09-02'),
      updatedAt: new Date('2023-09-03'),
      done: false,
    },
    {
      id: 3,
      title: 'Deploy to Production',
      description: 'Prepare the app for deployment to a production server.',
      createdAt: new Date('2023-09-03'),
      updatedAt: new Date('2023-09-04'),
      done: false,
    },
    {
      id: 4,
      title: 'Review Code',
      description:
        'Review and refactor the codebase for performance improvements.',
      createdAt: new Date('2023-09-04'),
      updatedAt: new Date('2023-09-05'),
      done: false,
    },
  ];

  getAllTasks() {
    return this.tasks.slice();
  }

  getTaskByID(taskId: number) {
    return this.tasks[this.tasks.findIndex((t) => t.id === +taskId)];
  }

  getCompletedTasks() {
    return this.tasks.slice().filter((task) => task.done === true);
  }

  getPendingTasks() {
    return this.tasks.slice().filter((task) => task.done === false);
  }

  updateTaskStatus(task: Task) {
    const taskToUpdate = this.getTaskByID(task.id);
    taskToUpdate.done = !task.done;
  }

  onTaskAdded(task: Task) {
    this.tasks.push(task);
    this.tasksChanged.emit(this.tasks.slice());
  }

  onTaskUpdated(updatedTask: Task) {
    const taskIndex = this.tasks.findIndex(
      (task) => task.id === updatedTask.id
    );

    if (taskIndex !== -1) {
      this.tasks[taskIndex] = updatedTask;
    } else {
      console.error(`Task with ${updatedTask.id} not found.`);
    }
    this.tasksChanged.emit(this.tasks.slice());
  }

  onDeletingTask(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
    this.tasksChanged.emit(this.tasks.slice());
  }
}
