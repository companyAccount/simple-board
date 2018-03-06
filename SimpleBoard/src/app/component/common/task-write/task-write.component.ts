import {Component, OnInit, Input} from '@angular/core';
import {IWriteTaskRequest} from '../../../model/task.interface';
import {SharedService} from '../../../service/shared.service';
import {TaskService} from '../../../service/task.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-task-write',
    templateUrl: './task-write.component.html',
    styleUrls: ['./task-write.component.css']
})
export class TaskWriteComponent implements OnInit {

    constructor(private SharedService: SharedService, private TaskService: TaskService, private Route: Router) {
    }

    ngOnInit() {
    }

    write() {
        if (TaskWriteComponent.isWriting === true) return;
        TaskWriteComponent.isWriting = true;

        this.formData.category = this.category;
        
        this.TaskService.writeTask(this.formData).subscribe(
            response => {
                this.TaskService.getTaskList({category: this.category}).subscribe(
                    _response => {
                        console.log(_response);
                        this.SharedService.taskList[this.category] = _response.taskList;
                    }
                );
                this.SharedService.tasks[response.task.id] = response.task;
                this.Route.navigate([`/board/${this.category}/main`]);
                TaskWriteComponent.isWriting = false;
            }
        );
    }

    formData: IWriteTaskRequest = {
        category: null,
        writer: null,
        title: null,
        content: null
    };

    static isWriting: boolean = false;
    @Input() category: string;
}
