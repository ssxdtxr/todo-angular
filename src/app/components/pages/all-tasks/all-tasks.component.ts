import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [FormsModule, PageTitleComponent, TaskListComponent],
  templateUrl: './all-tasks.component.html',
  styles: '',
})
export class AllTasksComponent {
  taskList: any[] = [];
  newTask: string = '';

  httpService = inject(HttpService);

  ngOnInit(): void {
    this.getAllTasks();
  }

  addTask(): void {
    this.httpService.addTask(this.newTask).subscribe(() => {
      this.newTask = '';
      this.getAllTasks();
    });
  }

  getAllTasks(): void {
    this.httpService.getAllTasks().subscribe((result: any) => {
      this.taskList = result;
    });
  }

  onCompleted(task: any) {
    task.completed = true;
    this.httpService.updateTask(task);
  }
  onImportant(task: any) {
    task.important = true;
    this.httpService.updateTask(task);
  }
}
