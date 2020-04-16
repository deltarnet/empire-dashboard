
import {  Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    template: '',
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: [
        './form.component.scss'
    ]
}) export class FormComponent implements OnInit {

    public projects: any[] = [{ project: '' }];

    public endpoints: any[] = [{ endpoints: '' }];

    public requestMethods: any[] = [{ requestMethods: '' }];

    constructor() {}

    ngOnInit() {}

    addProject() {
        this.projects.push({project: ''});
    }

    addRequestMethod() {
        this.requestMethods.push({requestMethods: ''});
    }
    addEndpoint() {
        this.endpoints.push({endpoints: ''});
    }

    removeEndpoint(i : number) {
        this.endpoints.splice(i, 1);
    }

    logValue(form : NgForm) {

        console.log(form);
        console.log(form.value);
        form.reset(form);
        // console.log(value.projectName)
        // console.log(this.projects);
        // console.log(this.endpoints);
    }

}