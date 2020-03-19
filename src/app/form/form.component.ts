import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({template: '', selector: 'app-form', templateUrl: './form.component.html', styleUrls: ['./form.component.scss']})export class FormComponent implements OnInit {

    public projects : any[] = [{
            project: ''
        }];

    public endpoints : any[] = [{
            endpoints: ''
        }];

    constructor() {}

    ngOnInit() {}

    addProject() {
        this.projects.push({project: ''});
    }
    addEndpoint() {
        this.endpoints.push({endpoint: ''});
    }

    logValue(form : NgForm) {
        // const value = projName.value;
        // console.log(value)
        console.log(form.value)
        form.reset()
        // console.log(value.projectName)


        // console.log(this.projects);
        // console.log(this.endpoints);
    }
}
