import { Subscription } from 'rxjs';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-single-view',
  templateUrl: './user-single-view.component.html',
  styleUrls: ['./user-single-view.component.css']
})
export class UserSingleViewComponent implements OnInit {

  user:Array<any>;
  userSub: Subscription;

  constructor(private userService:UserService,
              private router:Router,
              private route: ActivatedRoute) {                 
              }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.userService.getSingleUser(id);
    this.userSub = this.userService.usersSubject
                    .subscribe(
                      res=>{
                        this.user = res;
                      }
                    )
                    console.log(this.user)
  }

  checkU(){
    console.log(this.user)
  }
}
