import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TaskService {
  private tasksList: Array<string> = [];
  private tasksDone: Array<string> = [];
  task = 'ski';

  private tasksListObs = new BehaviorSubject<Array<string>>(this.tasksList);
  private tasksDoneObs = new BehaviorSubject<Array<string>>(this.tasksDone);


  constructor(){
    this.tasksList = ['wash the car', 'buy shoes'];
    this.tasksListObs.next(this.tasksList);
  }

  getValue(event) {
    this.task = event.target.value;
  }

  add(newTask: string) {
    this.tasksList.push(newTask);
    this.tasksListObs.next(this.tasksList);
    console.log(this.tasksList);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(item => item !== task);
    this.tasksListObs.next(this.tasksList);
  }

  done(task) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  getColor(): string {
    return this.tasksList.length > 2 ? 'red' : 'green';
  }

  getTasksListObs(): Observable<Array<string>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDonetObs(): Observable<Array<string>> {
    return this.tasksDoneObs.asObservable();
  }
}
