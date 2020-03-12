import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../serveces/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  newTask: string;

  constructor(private tasksService: TaskService) { }

  ngOnInit(): void {
  }

  addTask(){
    this.tasksService.add(this.newTask);
    this.newTask = '';
  }

}
