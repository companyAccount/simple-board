import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../../../model/task.interface';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() task: ITask;

}
