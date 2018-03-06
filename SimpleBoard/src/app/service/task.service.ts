import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {
    ITask,
    IWriteTaskRequest,
    IWriteTaskResponse,
    IGetTaskListRequest,
    IGetTaskListResponse, IGetTaskResponse, IGetTaskRequest
} from "../model/task.interface";
import {ConfigService} from "./config.service";

@Injectable()
export class TaskService {
    constructor(private ConfigService: ConfigService) {
    }

    writeTask(request: IWriteTaskRequest): Observable<IWriteTaskResponse> {
        const obv = new Subject<IWriteTaskResponse>();
        // 비동기적 처리를 표현하기 위한 예.
        setTimeout(() => {
            const task = {
                id: Math.floor(Math.random() * 100000),
                category: request.category,
                writer: request.writer,
                title: request.title,
                content: request.content,
                createTime: new Date()
            };
            TASK_TABLE.unshift(task);
            console.log(TASK_TABLE);
            obv.next({task});
        }, 1000);
        return obv;
    }

    getTaskList(request: IGetTaskListRequest): Observable<IGetTaskListResponse> {
        const obv = new Subject<IGetTaskListResponse>();
        setTimeout(() => {
            const response = {
                taskList: []
            };

            for (const i in TASK_TABLE) {
                const task = TASK_TABLE[i];
                if (request.category !== task.category) continue;
                response.taskList.push({id: task.id, title: task.title, category: task.category});
            }

            obv.next(response);
        }, 10);
        return obv;
    }

    getTask(request: IGetTaskRequest): Observable<IGetTaskResponse> {
        const obv = new Subject<IGetTaskResponse>();
        setTimeout(() => {
            for (const i in TASK_TABLE) {
                const task = TASK_TABLE[i];
                if (task.id === request.id) {
                    obv.next({task});
                    return;
                }
            }
        }, 500);
        return obv;
    }

}

// 백엔드 가상 테이블
const TASK_TABLE: ITask[] = [
    {
        id: Math.floor(Math.random() * 100000),
        createTime: new Date(),
        category: 'free',
        title: '자유게시판글 입니다.',
        content: '자유게시판은 재미가 없습니다.',
        writer: '익명'
    },
    {
        id: Math.floor(Math.random() * 100000),
        createTime: new Date(),
        category: 'free',
        title: '자유게시판',
        content: '글',
        writer: '익명'
    },
    {
        id: Math.floor(Math.random() * 100000),
        createTime: new Date(),
        category: 'humor',
        title: '유머게시판글 입니다.',
        content: '유우머게시판은 재미가 있습니다.',
        writer: '익명'
    },
];