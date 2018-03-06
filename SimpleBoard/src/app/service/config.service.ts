import {Injectable} from "@angular/core";
import {ICategoryConfig} from "../model/category.interface";

@Injectable()
export class ConfigService {
    constructor() {
    }

    categories: { [category: string]: ICategoryConfig } = {
        free: {
            name: '자유'
        },
        humor: {
            name: '유머'
        },
        horror: {
            name: '공포'
        },
        movie: {
            name: '영화'
        },
        policy: {
            name: '정치'
        },
        worry: {
            name: '고민'
        }
    };
}