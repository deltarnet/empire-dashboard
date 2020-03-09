import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {EmpireService} from '../empire.service';
import {Status} from '../endpoints';


@Component({selector: 'app-status', templateUrl: './status.component.html', styleUrls: ['./status.component.scss'], encapsulation: ViewEncapsulation.None})
export class StatusComponent implements OnInit {
    retrieved_data : Status[] = [];

    constructor(private appservice : EmpireService) {}

    ngOnInit() {
        this.appservice.getStatus().subscribe(response => {
            this.retrieved_data = response
            //console.log("Response ooooooooo", response);
        })
    }

}
