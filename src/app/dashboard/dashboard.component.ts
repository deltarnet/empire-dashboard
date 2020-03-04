import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {Turntabl_Project, Endpoints, Status} from "../endpoints";
// import { EmpireService } from '../empire.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        '../app.component.scss', './dashboard.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

    project : Turntabl_Project[] = [];
    endpoint : Endpoints;
    status : Status;

    constructor() {;
        // this.project = {
        //     project_id: 1,
        //     project_name: ""
        // };

        // this.endpoint = {
        //     endpoint_id: 1,
        //     project_id: 1,
        //     endpoint_url: "",
        //     request_method: ""
        // }

        // this.status = {
        //     project_name: "",
        //     status: 200,
        //     endpoint_id: 1
        // }
    }

    ngOnInit() { // this.appservice.getProjects().subscribe(response => { console.log(response) })
    };
    // data
}
