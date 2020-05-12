import { Component, OnInit } from '@angular/core';

import { Task } from '../../task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  private completedTasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getCompletedTasks();
  }

  getCompletedTasks(): void {
    this.completedTasks = TASKS.filter(task => task.completed);
  }

}
