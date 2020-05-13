import { Component, OnInit } from '@angular/core';

import { Task } from '../../task';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  completedTasks: Task[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCompletedTasks();
  }

  getCompletedTasks(): void {
    this.apiService.getTasks().subscribe(data => {
      let tasks = data[0]['tasks'];
      this.completedTasks = tasks.filter(task => task.completed);
    })
  }

}
