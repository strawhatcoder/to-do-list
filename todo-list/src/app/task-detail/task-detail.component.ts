import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../task';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  task: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.task;
  }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = this.route.snapshot.params.taskId;
    this.subscription = this.apiService.getTask(id)
      .subscribe((data: { message: string, task: Task }) => {
        this.task = data.task;
      })
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
