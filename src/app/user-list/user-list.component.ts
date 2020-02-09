import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {UsersService} from '../../services/users.service';
import {UsersModel} from '../../models/users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  UserSub: Subscription;
  users: UsersModel[] = [];
  constructor(private user: UsersService) { }

  ngOnInit() {
    this.UserSub = this.user.userSubject.subscribe((user) => {this.users = user; });
  }

  userDelete(user: UsersModel ) {
    this.user.deleteUser(user);
  }
}
