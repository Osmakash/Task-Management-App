import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
})
export class TaskItemComponent {
  @Input() task!: Task;

  constructor(private taskService: TaskService) {}

  onUpdateStatus(task: Task) {
    this.taskService.updateTaskStatus(task);
  }

  onViewDetails(task: Task){
    
  }
}
