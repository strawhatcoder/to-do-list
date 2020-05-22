import { Component, OnInit, OnDestroy } from '@angular/core';

import { Task } from '../../task';
import { ApiService } from '../../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  completedTasks: Task[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCompletedTasks();
  }

  getCompletedTasks(): void {
    this.subscription = this.apiService.getTasks()
      .subscribe(tasks => {
        this.completedTasks = tasks.filter(task => task.completed);
      })
  }

  removeTask(id: number): void {
    this.apiService.deleteTask(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
