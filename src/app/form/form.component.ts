import {  Component, OnInit, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmpireService } from '../empire.service';
import {RequestInput} from '../endpoints'
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

    request: RequestInput


userObservable: Observable<any>;

    constructor(private empireServie: EmpireService) {
        this.request={
            project_name: "",
            request_method:"",
            urls:[]
        }
    }

    ngOnInit() {}

    addProject() {
        this.projects.push({project: ''});
    }

    addRequestMethod() {
        this.requestMethods.push({requestMethods: ''});
    }
    addEndpoint() {
        this.request.urls.push({endpoint_url: name})
        // this.endpoints.push({endpoints: ''});
    }

    removeEndpoint(i : number) {
        this.endpoints.splice(i, 1);
    }

    logValue() {
    // logValue(form : NgForm) {

        console.log(this.request)
        let request_method=this.request.request_method

        this.empireServie.addProject(this.request).subscribe(response  => {
            this.request.urls.forEach(url => {
                url.project_id = response.key
                url.request_method = request_method
                this.empireServie.addEndpoints(url).subscribe(response => console.log(response))
    
            })
        })
        
       

        // console.log(form);
        // console.log(form.value);
        // form.reset(form);
        // console.log(value.projectName)
        // console.log(this.projects);
        // console.log(this.endpoints);
    }

}