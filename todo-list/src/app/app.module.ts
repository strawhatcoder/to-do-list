import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { CompletedTasksComponent } from './tasks/completed-tasks/completed-tasks.component';
import { TodoTasksComponent } from './tasks/todo-tasks/todo-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    NewTaskFormComponent,
    CompletedTasksComponent,
    TodoTasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
