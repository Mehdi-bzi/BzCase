import { UserService } from './../../services/user/user.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

  users:Array<[Object]>;
  userSubscription: Subscription;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers();
    this.userSubscription = this.userService.usersSubject
                            .subscribe(
                              (res) => {
                                this.users = res;
                              }
    )
  }

}
