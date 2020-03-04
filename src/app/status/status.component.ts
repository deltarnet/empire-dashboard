import {Component, OnInit} from '@angular/core';
import {EmpireService} from '../empire.service';
import {Status} from '../endpoints';

export interface StatusData {
    project: string;
    status: number;
    endpoint: string;
    requestmethod: string;
}

@Component({selector: 'app-status', templateUrl: './status.component.html', styleUrls: ['./status.component.scss']})
export class StatusComponent implements OnInit {
    retrieved_data : Status[] = [
        // {
        //       project: "Time Entry System",
        //       status: 200,
        //       endpoint: "https://projectervice002.herokuapp.com/v1/api/employee/",
        //       requestmethod: "GET"
        // }, {
        //       project: "Pollster",
        //       status: 500,
        //       endpoint: "https://employeeservice002.herokuapp.com/v1/api/employees",
        //       requestmethod: "GET"
        // },
        // {
        //     project: "Chess",
        //     status: 500,
        //     endpoint: "https://projectervice002.herokuapp.com/v1/api/employee/",
        //     requestmethod: "GET"
        // }
    ];

    constructor(private appservice :EmpireService) {}

    ngOnInit() {
        this.appservice.getStatus().subscribe(response => { // this.retrieved_data = response
            console.log("Response ooooooooo", response);
        })
    }

}
