import { Component, OnInit } from '@angular/core';

@Component({
  template: '',
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']

}) export class FormComponent implements OnInit {

    public projects: any[] = [{ project: '' }];

    public endpoints: any[] = [{ endpoints: '' }];

    constructor() {}

    ngOnInit() {}

    addProject() {
        this.projects.push({ project: '' });
    }
    addEndpoint() {
        this.endpoints.push({ endpoint: '' });
    }

    logValue() {
      console.log(this.projects);
      console.log(this.endpoints);
    }
}
