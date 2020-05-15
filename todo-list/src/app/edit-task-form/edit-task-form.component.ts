import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.css']
})
export class EditTaskFormComponent implements OnInit {
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
    this.apiService.getTask(id).subscribe(data => {
      this.editTaskForm.setValue({
        name: data.task.name,
        note: data.task.note
      })
    })
  }

  updateTask(): void {
    const id = this.getTaskId();
    const formValues = this.editTaskForm.value;
    this.apiService.updateTask(formValues, id).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/'])
  }

  getTaskId(): number {
    return this.route.snapshot.params.taskId;
  }

  cancel(): void {
    this.location.back();
  }

}
