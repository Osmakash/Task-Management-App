import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
})
export class TaskDetailsComponent implements OnInit {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    priority: 'medium',
    dueDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    done: false,
  };

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('Params: ', params);
      const taskId = params['id'];
      this.task = this.taskService.getTaskByID(taskId);
    });
  }

  onTaskDeleted(Id: number) {
    alert('Are you sure, you want to delete this task?');
    this.taskService.onDeletingTask(Id);
    this.router.navigate(['/tasks']);
  }
}
