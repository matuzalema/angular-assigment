import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  task = 'narty';
  tasksList: Array<string> = ['wash the car', 'buy shoes'];
  tasksDone: Array<string> = [];
  getValue(event) {
    this.task = event.target.value;
  }

  add(newTask: string) {
    this.tasksList.push(newTask);
    console.log(this.tasksList);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter( item => item !== task);
  }

  done(task) {
    this.tasksDone.push(task);
    this.remove(task);
  }

  getColor(): string {
    return this.tasksList.length > 2 ? 'red' : 'green';
  }
}
