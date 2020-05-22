import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from '../task';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.css']
})
export class EditTaskFormComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  editTaskForm = new FormGroup({
    name: new FormControl(''),
    note: new FormControl('')
  });

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTaskInfo();
  }

  getTaskInfo(): void {
    const id = this.getTaskId();
    this.subscription = this.apiService.getTask(id)
      .subscribe((data: { message: string, task: Task }) => {
        this.editTaskForm.setValue({
          name: data.task.name,
          note: data.task.note
        })
      })
  }

  updateTask(): void {
    const id = this.getTaskId();
    const formValues = this.editTaskForm.value;
    this.apiService.updateTask(formValues, id);
    this.router.navigate(['/']);
  }

  getTaskId(): number {
    return this.route.snapshot.params.taskId;
  }

  cancel(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
