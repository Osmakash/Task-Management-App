import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks!: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getAllTasks();
    this.taskService.tasksChanged.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  getAllTasks() {
    this.tasks = this.taskService.getAllTasks();
  }

  getCompletedTasks() {
    this.tasks = this.taskService.getCompletedTasks();
  }

  getPendingTasks() {
    this.tasks = this.taskService.getPendingTasks();
  }
}
