import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.task = {};
  }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = this.route.snapshot.params.taskId;
    this.apiService.getTask(id).subscribe(data => {
      this.task = data.task;
    })
  }

}
