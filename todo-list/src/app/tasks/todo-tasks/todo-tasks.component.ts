import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../../task';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  todoTasks: Task[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getIncompleteTasks();
  }

  getIncompleteTasks(): void {
    this.subscription = this.apiService.getTasks()
      .subscribe(tasks => {
        this.todoTasks = tasks.filter(task => !task.completed);
      })
  }

  completeTask(id: number): void {
    this.apiService.completeTask(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeTask(id: number): void {
    this.apiService.deleteTask(id);
  }

}
