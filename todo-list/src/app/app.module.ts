import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { CompletedTasksComponent } from './tasks/completed-tasks/completed-tasks.component';
import { TodoTasksComponent } from './tasks/todo-tasks/todo-tasks.component';
import { AppRoutingModule } from './app-routing.module';
import { EditTaskFormComponent } from './edit-task-form/edit-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    NewTaskFormComponent,
    CompletedTasksComponent,
    TodoTasksComponent,
    EditTaskFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
