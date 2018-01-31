import { Component, OnInit } from '@angular/core';

export interface taskType{
  task:String;
  index:number;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  selectedTask:taskType;

  tasks: Array<string> = new Array();
  myTask: String;

  addTask(newTask): void{
    this.tasks.push(newTask);
    this.myTask = '';
  };

  removeTask(task): void{
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  };

  selectTask(task, index): void{
    this.selectedTask = {
      task: task,
      index: index
    };
  };

  updateTask(task): void{
    this.tasks[task.index] = task.task;
    this.selectedTask = null;
  };

}
