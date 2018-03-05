import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ITask } from '../../../model/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() { }
  ngOnChanges(chgs: SimpleChanges) {
    const chg = chgs.tasks;
    if (chg.currentValue) {
      this.active(null);
    }
  }

  active(task: ITask) { this.onActive.emit(this.actived = task); }

  private actived: ITask;

  @Input() tasks: ITask[];
  @Output() onActive: EventEmitter<ITask> = new EventEmitter();
}
