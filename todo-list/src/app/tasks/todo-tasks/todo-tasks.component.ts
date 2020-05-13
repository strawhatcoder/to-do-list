import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {
  todoTasks: Task[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getIncompleteTasks();
  }

  getIncompleteTasks(): void {
    this.apiService.getTasks().subscribe(data => {
      let tasks = data[0]['tasks'];
      this.todoTasks = tasks.filter(task => !task.completed);
    });
  }

}
