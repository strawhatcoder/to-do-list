import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

// Declare Routes
const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'new-task', component: NewTaskFormComponent },
  { path: ':taskId', component: TaskDetailComponent },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
