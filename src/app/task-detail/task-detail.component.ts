import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: String;

  @Output()
  editedTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  editTask(task): void{
    this.editedTask.emit(task);
    task = {};
  };

}
