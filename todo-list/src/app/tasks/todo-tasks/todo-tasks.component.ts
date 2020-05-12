import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {
  private todoTasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getIncompleteTasks();
  }

  getIncompleteTasks(): void {
    this.todoTasks = TASKS.filter(task => !task.completed);
  }

}
