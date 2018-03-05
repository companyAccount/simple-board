import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { SharedService } from "../../../service/shared.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private SharedService: SharedService, private route: ActivatedRoute) {
    }

    get category() {
        return this.route.snapshot.paramMap.get('category');
    }

    get tasks() {
        return this.SharedService.taskCategory[this.category];
    }

    ngOnInit() {
    }

}
