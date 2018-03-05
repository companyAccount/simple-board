import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SharedService } from "../../../service/shared.service";
import { ITask } from '../../../model/task.interface';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    constructor(private route: ActivatedRoute, private SharedService: SharedService) { }

    get tasks() { return this.SharedService.taskCategory[this.route.snapshot.params.category]; }

    private onTaskActive(task: ITask) {
        this.activedTask = task;
    }
    private activedTask: ITask;

    ngOnInit() { }

}
