import {Injectable} from "@angular/core";
import {ITask, ITaskListItem} from "../model/task.interface";
import {ConfigService} from "./config.service";
import {TaskService} from "./task.service";

@Injectable()
export class SharedService {
    constructor(private ConfigService: ConfigService, private  TaskService: TaskService) {
        for (const category in this.ConfigService.categories) {
            this.taskList[category] = [];
            this.TaskService.getTaskList({category}).subscribe(
                response => {
                    this.taskList[category] = response.taskList;
                }
            );
        }
    }

    taskList: { [category: string]: ITaskListItem[] } = {};
    tasks: { [id: string]: ITask } = {};
}
