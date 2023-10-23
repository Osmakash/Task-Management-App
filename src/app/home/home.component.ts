import { Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  taskTitle: string = '';
  taskDescription: string = '';

  onViewAllTasks(){
    
  }

  addTask() {
    console.log('Task Title:', this.taskTitle);
    console.log('Task Description:', this.taskDescription);

    this.taskTitle = '';
    this.taskDescription = '';
  }
}
