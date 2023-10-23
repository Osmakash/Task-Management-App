import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
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
  isEditMode: boolean = false;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const taskID = params['id'];
      if (taskID) {
        this.task = this.taskService.getTaskByID(taskID);
        this.isEditMode = true;
      } else {
        this.isEditMode = false;
      }
    });
  }

  onSubmit() {
    console.log('New Task being Added: ', this.task);
    if (this.isEditMode) {
      // Update existing task
      console.log('Update the Existing Task');
      this.taskService.onTaskUpdated(this.task);
    } else {
      // Add new task
      console.log('Add a new Task');
      this.taskService.onTaskAdded(this.task);
    }

    // Redirect to /tasks after updating or adding task
    this.router.navigate(['/tasks']);
    
    // Clear the form and reset to default values (if needed)
    this.task = {
      id: 0,
      title: '',
      description: '',
      priority: 'medium',
      dueDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      done: false,
    };
  }
}
