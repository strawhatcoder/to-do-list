import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Holds our BackEnd API host/url
  private API_URL: string = environment.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  // GET tasks
  getTasks() {
    return this.http.get<{ message: string, tasks: Task[] }>(this.API_URL);
  }

  // POST task
  addTask({ name, note }): Observable<any> {
    const postApi = `${this.API_URL}/new-task`;
    const body = JSON.stringify({ name: name, note: note });
    return this.http.post(postApi, body, this.httpOptions);
  }

}


/**

The get() method takes two arguments; the endpoint URL from which to fetch, and
an options object that you can use to configure the request.

options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }
*/
