import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../serveces/tasks.service';

@Component({
  selector: "app-to-do-task",
  templateUrl: "./to-do-task.component.html",
  styleUrls: ["./to-do-task.component.scss"]
})
export class ToDoTaskComponent implements OnInit {
  tasksList = [];

  constructor(private tasksService: TaskService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit(): void {}
  remove(task: string) {
    this.tasksService.remove(task);
  }

  done(task: string){
    this.tasksService.done(task);
  }
}
