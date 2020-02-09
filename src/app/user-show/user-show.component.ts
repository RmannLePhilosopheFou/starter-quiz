import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersModel} from '../../models/users.model';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {
  @Input() user: UsersModel;
  @Output() UserDeleted: EventEmitter<UsersModel> = new EventEmitter<UsersModel>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
this.UserDeleted.emit(this.user);
  }
}
