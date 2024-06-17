import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'http://localhost:3000/tasks';
  httpClient = inject(HttpClient);

  constructor() {}

  addTask(tasks: string) {
    return this.httpClient.post(this.baseUrl, {
      title: tasks,
    });
  }

  getAllTasks() {
    return this.httpClient.get(this.baseUrl);
  }

  updateTask(task: any) {
    return this.httpClient.put('http://localhost:3000/tasks/' + task.id, task);
  }
}
