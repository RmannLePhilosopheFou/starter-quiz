import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from '../../services/users.service';
import {UsersModel} from '../../models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private user: UsersService) { }

  ngOnInit() {
    this.initiate();
  }

  initiate() {
this.userForm = this.formbuilder.group(
  {
    name : [''],
    prenom : [''],
    adress : [''] ,
    email: ['']
  }
);
  }

  addUser() {
    const user = this.userForm.getRawValue() as UsersModel;
    this.user.addUser(user);
  }

}
