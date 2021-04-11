import { UserService } from './../../services/user/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-row-user]',
  templateUrl: './table-row-user.component.html',
  styleUrls: ['./table-row-user.component.css']
})
export class TableRowUserComponent implements OnInit {

  @Input() userEmail: string;
  @Input() userId: string;

  detailsRoute: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.detailsRoute = '/users/' + this.userId;
  }

  onDeleteUser() {
    this.userService.deleteUser(+this.userId);
  }

}
