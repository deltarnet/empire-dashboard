import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Endpoints, EndpointUrl } from '../endpoints'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  postForm: FormGroup;

  ngOnInit() {

    /* Initiate the form structure */
    this.postForm = this.fb.group({
      title: [],
      endpoint_urls: this.fb.array([this.fb.group({urls:''})])
    })
  }
   ///////// This is new ////////
   get endpointUrls() {
    return this.postForm.get('endpoint_urls') as FormArray;
  }
  ///////////End ////////////////

}
