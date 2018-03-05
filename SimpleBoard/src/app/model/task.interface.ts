export interface ITask {
    createTime: Date;
    category: string;
    title: string;
    content: string;
    writer: string;
}

export interface ITaskWriteRequest {
    category: string;
    title: string;
    content: string;
    writer: string;
}
