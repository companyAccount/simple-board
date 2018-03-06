import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {ITask, ITaskListItem} from '../../../model/task.interface';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(chgs: SimpleChanges) {
        const chg = chgs.list;
        if (chg.currentValue) {
            this.active(null);
        }
    }

    active(task: ITaskListItem) {
        this.onActive.emit(this.actived = task);
    }

    private actived: ITaskListItem;

    @Input() list: ITaskListItem[];
    @Output() onActive: EventEmitter<ITaskListItem> = new EventEmitter();
}
