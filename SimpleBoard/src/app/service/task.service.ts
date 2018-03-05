import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { ITask, ITaskWriteRequest } from "../model/task.interface";

@Injectable()
export class TaskService {
    constructor() { }
    write(request: ITaskWriteRequest): Observable<ITask> {
        const obv = new Subject<ITask>();
        setTimeout(() => {
            obv.next({
                category: request.category,
                writer: request.writer,
                title: request.title,
                content: request.content,
                createTime: new Date(),
            });
        }, 1000);
        return obv;
    }
}
