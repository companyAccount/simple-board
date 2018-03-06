export interface ITask {
    id: number;
    createTime: Date;
    category: string;
    title: string;
    content: string;
    writer: string;
}

export interface ITaskListItem {
    id: number;
    title: string;
    category: string;
}

/* api interface */

export interface IWriteTaskRequest {
    category: string;
    title: string;
    content: string;
    writer: string;
}

export interface IWriteTaskResponse {
    task: ITask;
}

export interface IGetTaskListRequest {
    category: string;
}

export interface IGetTaskListResponse {
    taskList: ITaskListItem[];
}

export interface IGetTaskRequest {
    id: number;
}

export interface IGetTaskResponse {
    task: ITask;
}

export interface IDeleteTaskRequest {
    id: number;
}

export interface IDeleteTaskResponse {
    id: number;
}