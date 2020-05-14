import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';

// Declare Routes
const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'new-task', component: NewTaskFormComponent }
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
