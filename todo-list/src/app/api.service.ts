import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject ,Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnDestroy {
  private API_URL: string = environment.apiUrl;
  private tasksData$ = new BehaviorSubject<Task[]>([]);
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {
    this.updateTaskData();
  }

  // Update taskData Subject with tasks from Api
  updateTaskData(): void {
    this.http.get<{ message: string, tasks: Task[] }>(this.API_URL)
      .subscribe(data => {
        this.tasksData$.next(data[0]['tasks']);
      })
  }

  // GET tasks
  getTasks(): Observable<Task[]> {
    return this.tasksData$.asObservable();
  }

  // GET task
  getTask(id: number): Observable<{ message: string, task: Task }> {
    const getTaskEndpoint = `${this.API_URL}/${id}`;
    return this.http.get<{ message: string, task: Task }>(getTaskEndpoint);
  }

  // POST task
  addTask({ name, note}): void {
    const postTaskEndpoint = `${this.API_URL}/new-task`;
    const body = JSON.stringify({ name: name, note: note });

    this.http.post(postTaskEndpoint, body, this.httpOptions)
      .subscribe((response: { message: string, task: Task }) => {
        this.updateTaskData();
      });
  }

  // PUT Task
  updateTask({ name, note }, id: number): void {
    const putEndpoint = `${this.API_URL}/${id}`;
    const body = JSON.stringify({ name: name, note: note });

    this.http.put(putEndpoint, body, this.httpOptions)
      .subscribe((response: { message: string, task: Task }) => {
        this.updateTaskData();
      })
  }

  // Delete Task
  deleteTask(id: number): void {
    const deleteTaskEndpoint = `${this.API_URL}/${id}`;
    this.http.delete(deleteTaskEndpoint)
      .subscribe((response: { message: string }) => {
        this.updateTaskData();
      });
  }

  // Complete Task
  completeTask(id: number): void {
    const completeEndpoint = `${this.API_URL}/complete/${id}`;
    this.http.put(completeEndpoint, this.httpOptions)
      .subscribe((response: { message: string }) => {
        this.updateTaskData();
      })
  }

  ngOnDestroy(): void {
    this.tasksData$.unsubscribe();
  }

}
