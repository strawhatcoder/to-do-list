import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {
  newTaskForm = new FormGroup({
    name: new FormControl(''),
    note: new FormControl('')
  });

  constructor(
    private apiService: ApiService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addNewTask(): void {
    this.apiService.addTask(this.newTaskForm.value).subscribe(data => {
      console.log(data)
    });
    this.newTaskForm.reset();
    this.router.navigate(['/']);
  }

  cancel(): void {
    this.location.back();
  }

}
