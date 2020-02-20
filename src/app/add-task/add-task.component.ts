import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  newTask: string;

  @Output()
  emitNewTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.emitNewTask.emit(this.newTask);
    this.newTask = '';
  }

}
