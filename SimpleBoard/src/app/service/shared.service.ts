import {Injectable} from "@angular/core";
import {ITask} from "../model/task.interface";

@Injectable()
export class SharedService {
    constructor() {
        for (const category in this.categories) {
            if (this.categories[category] === true) {
                if (this.taskCategory[category] === undefined) {
                    this.taskCategory[category] = [];
                }
            }
        }
    }

    categories = {
        free: true,
        humor: true,
        horror: true,
        movie: true,
        policy: true,
        worry: true
    };

    taskCategory: { [category: string]: Array<ITask> } = {
        free: [
            {
                title: "제목입니다.",
                content: '내용입니다.',
                createTime: new Date(),
                writer: '강전일'
            },
            {
                title: "제목입니다.",
                content: '내용입니다.',
                createTime: new Date(),
                writer: '강전일'
            },
            {
                title: "제목입니다.",
                content: '내용입니다.',
                createTime: new Date(),
                writer: '강전일'
            },
            {
                title: "제목입니다.",
                content: '내용입니다.',
                createTime: new Date(),
                writer: '강전일'
            }
        ],
    };
}