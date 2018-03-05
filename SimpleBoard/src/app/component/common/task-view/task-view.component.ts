import {Component, Input, OnChanges, SimpleChanges, SimpleChange, OnInit} from '@angular/core';
import {ITask} from "../../../model/task.interface";

@Component({
    selector: 'app-task-view',
    templateUrl: './task-view.component.html',
    styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit, OnChanges {

    constructor() {
    }

    ngOnInit() {
        this.activeTask = this.tasks[0];
    }

    ngOnChanges(chgs: SimpleChanges) {
        const chg: SimpleChange = chgs.tasks;
        if (chg.currentValue) {
            this.activeTask = null;
        }
    }

    private activeTask: ITask;

    @Input()
    private tasks: Array<ITask> = [];
}