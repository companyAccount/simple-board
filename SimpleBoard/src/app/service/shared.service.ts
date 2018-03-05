import { Injectable } from "@angular/core";
import { ITask } from "../model/task.interface";

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
                title: "자유게시판 게시글",
                content: '하하 이 곳이 자유게시판이구나. 별천지 로구나~!',
                createTime: new Date(),
                writer: '강전일',
                category: 'free'
            }
        ],
        policy: [
            {
                title: "정치게시판 게시글",
                content: '내용',
                createTime: new Date(),
                writer: '강전일',
                category: 'policy'
            }
        ]
    };
}
