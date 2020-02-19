import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  task = '';
  tasksList: Array<string> = ['wash the car', 'buy shoes'];
  tasksDone: Array<string> = [];
  getValue(event) {
    this.task = event.target.value;
  }

  add(task) {
    this.tasksList.push(task);
    this.task = '';
    console.log(this.tasksList);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter( item => item !== task);
  }

  done(task) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}
