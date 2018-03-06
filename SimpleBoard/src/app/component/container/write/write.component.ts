import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {SharedService} from "../../../service/shared.service";

@Component({
    selector: 'app-write',
    templateUrl: './write.component.html',
    styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

    constructor(private route: ActivatedRoute, private SharedService: SharedService) {
    }

    ngOnInit() {
    }

    get category() {
        return this.route.snapshot.params.category;
    }
}
