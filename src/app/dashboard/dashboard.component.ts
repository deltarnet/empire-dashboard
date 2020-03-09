import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

export interface StatusData {
    project: string;
    status: number;
    endpoint: string;
    requestmethod: string;
}
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        '../app.component.scss', './dashboard.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
    retrieved_data: StatusData[] = [
    {
        project: "Time Entry System",
        status: 200,
        endpoint: "https://projectervice002.herokuapp.com/v1/api/employee/",
        requestmethod: "GET"
    },
    {
        project: "Pollster",
        status: 200,
        endpoint: "https://employeeservice002.herokuapp.com/v1/api/employees",
        requestmethod: "GET"
    },
    {
    project: "Chess",
    status: 500,
    endpoint: "https://projectervice002.herokuapp.com/v1/api/employee/",
    requestmethod: "GET"
}
]; 
    constructor() {}

    ngOnInit() {}
}