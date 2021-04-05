import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:Array[];
  usersSubject: BehaviorSubject<Array<any>>;

  constructor(private httpClient:HttpClient) {
    this.usersSubject = new BehaviorSubject(['']);
   }

  getUsers(){
    return this.httpClient.get('http://127.0.0.1:8000/api/users.json')
                          .subscribe(
                            res=>{
                              this.users = res;
                              this.usersSubject.next(this.users);
                            }
                          )
  }

  getSingleUser(userId){
    return this.httpClient.get('http://127.0.0.1:8000/api/users/'+userId)
                          .subscribe(
                            res=>{
                              this.users = res;
                              this.usersSubject.next(this.users);
                            }
                          )
  }

  addUser(userToAdd: any): Observable<any>{
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.post('http://127.0.0.1:8000/api/users.json',userToAdd, {'headers': headers})
  }
}
 