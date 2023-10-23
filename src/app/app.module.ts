import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { TaskItemComponent } from './task-list/task-list-item/task-list-item.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './auth/login/login.component';
import { AuthenticationGuard } from './auth/authentication.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'tasks', component: TaskListComponent, canActivate: [AuthenticationGuard] },
  { path: 'add-task', component: TaskFormComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-task/:id', component: TaskFormComponent, canActivate: [AuthenticationGuard] },
  { path: 'task-detail/:id', component: TaskDetailsComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent,
    TaskDetailsComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [TaskService, AuthenticationService, AuthenticationGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
