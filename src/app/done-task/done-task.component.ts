import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../serveces/tasks.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.scss']
})
export class DoneTaskComponent implements OnInit {
  tasksDone: Array<string> = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasksDonetObs().subscribe((tasks: Array<string>) => {
      this.tasksDone = tasks;
    });
  }

  ngOnInit(): void {
  }

}
