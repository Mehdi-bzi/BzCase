import { UserService } from './../../services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-creator-view',
  templateUrl: './user-creator-view.component.html',
  styleUrls: ['./user-creator-view.component.css']
})
export class UserCreatorViewComponent implements OnInit {

  newUserForm: FormGroup;

  constructor(private userService:UserService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();

   console.log(this.newUserForm.status)

  }
  /**
  * @private
  */
  initForm() {
    this.newUserForm = this.fb.group({
      'email': ['', Validators.required],
      // 'roles': ['', Validators.required],   
      'password': ['', Validators.required]
    })
  }

  //   onSubmitNewUserForm(){
  //   let userToAdd = JSON.stringify(this.newUserForm.value);
  //   console.log("test"+userToAdd);
  // }

  onSubmitNewUserForm(){
    // on transforme l'objet en json avec JSON.stringify
    let userToAdd = JSON.stringify(this.newUserForm.value);
    console.log("test1"+this.newUserForm.value)
    this.userService.addUser(userToAdd)
        .subscribe(
          data => {
          console.log(data)
        }
        );
    console.log("test2"+this.newUserForm.value)
  }

}
