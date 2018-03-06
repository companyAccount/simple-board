import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import {SharedService} from "../../../service/shared.service";
import {TaskService} from "../../../service/task.service";
import {ITask, ITaskListItem} from "../../../model/task.interface";

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit, OnChanges {

    constructor(private SharedService: SharedService, private TaskService: TaskService) {
    }

    ngOnInit() {
    }

    ngOnChanges(chgs: SimpleChanges) {
        const {listItem} = chgs;

        if (listItem.currentValue) {
            const id = listItem.currentValue.id;
            const task = this.SharedService.tasks[id];

            if (!task) {

                this.task = {
                    id: listItem.currentValue.id,
                    title: listItem.currentValue.title,
                    category: listItem.currentValue.category,
                    createTime: null,
                    writer: null,
                    content: null
                };

                this.TaskService.getTask({id})
                    .subscribe(response => {
                        if (response) {
                            this.task = this.SharedService.tasks[id] = response.task;
                        }
                    });
            }
            else {
                this.task = task;
            }
        }
    }

    private task: ITask;
    @Input() listItem: ITaskListItem;
}
