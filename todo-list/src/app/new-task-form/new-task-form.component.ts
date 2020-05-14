import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {
  name = new FormControl('');
  note = new FormControl('');

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  addNewTask(): void {
    console.log(`NAME: ${this.name.value}, NOTE: ${this.note.value}`);
    this.apiService.addTask(this.name.value, this.note.value).subscribe(data => {
      console.log(data)
    });
    this.name.setValue('');
    this.note.setValue('');
  }

}
