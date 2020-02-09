import {UsersModel} from '../models/users.model';
import {Subject} from 'rxjs';

export class UsersService {
  private users: UsersModel[] = [];
userSubject = new Subject<UsersModel[]>();
  constructor() {
  }

  emitUser() {
    this.userSubject.next(this.users);
  }

  addUser(user: UsersModel) {
    this.users.push(user);
    this.emitUser();
  }
  deleteUser(user: UsersModel) {
    const id = this.users.indexOf(user);
    this.users.splice(id, 1);

  }
}
