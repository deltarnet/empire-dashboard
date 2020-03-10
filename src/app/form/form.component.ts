import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  public projects: any[] = [{
    project: '',
    endpoint: ''
  }];

  public endpoints: any[] = [{
    endpoint: ''
  }];

  constructor() { }

  ngOnInit() {
  }

  addProject() {
    this.projects.push({
      project: '',
      endpoint: '',
      country: ''
    });
  }

  addEndpoint() {
    this.endpoints.push({
      endpoint: ''
    });
  }

  removeProject(i: number) {
    this.projects.splice(i, 1);
  }

  logValue() {
    console.log(this.projects);
  }

}
