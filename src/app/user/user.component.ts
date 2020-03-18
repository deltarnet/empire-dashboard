import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { constructor } from 'path';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user = new FormGroup({

    name: new FormControl(''),
    skills: new FormArray([
      new FormGroup({
        name: new FormControl(''),
        level: new FormControl('')
      })
    ])
  });

  skills = this.user.get('skills') as FormArray;

  addSkill() {
    const control = new FormControl('', Validators.required);
    this.skills.push(control);
   }
  }