import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SharedService} from "../../../service/shared.service";
import {ITask, ITaskListItem} from '../../../model/task.interface';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    constructor(private route: ActivatedRoute, private SharedService: SharedService) {
    }

    ngOnInit() {
    }

    get category() {
        return this.route.snapshot.params.category;
    }

    get taskList() {
        return this.SharedService.taskList[this.category];
    }

    onTaskListItemActive(task: ITaskListItem) {
        this.activeTaskListItem = task;
    }

    activeTaskListItem: ITaskListItem;
}
