import {Component, Input, OnInit} from '@angular/core';
import {ITaskListItem} from "../../../model/task.interface";
import {TaskService} from "../../../service/task.service";
import {SharedService} from "../../../service/shared.service";

@Component({
    selector: 'app-task-delete',
    templateUrl: './task-delete.component.html',
    styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

    constructor(private TaskService: TaskService, private  SharedService: SharedService) {
    }

    ngOnInit() {
    }

    delete() {
        this.TaskService.deleteTask({id: this.listItem.id}).subscribe(
            response => {
                delete this.SharedService.tasks[this.listItem.id];
                this.TaskService.getTaskList({category: this.listItem.category}).subscribe(
                    _response => {
                        this.SharedService.taskList[this.listItem.category] = _response.taskList;
                    }
                )
            }
        );
    }

    @Input() listItem: ITaskListItem;
}
