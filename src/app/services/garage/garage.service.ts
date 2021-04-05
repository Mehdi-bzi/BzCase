import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  garages:Array[];
  garagesSubject: BehaviorSubject<Array<any>>;

  constructor(private httpClient: HttpClient) { 
    this.garagesSubject = new BehaviorSubject([]);
  }

  getGarages(){
    return this.httpClient.get('http://localhost:8000/api/garages.json')
                          .subscribe(
                            res=>{
                              this.garages = res;
                              this.garagesSubject.next(this.garages);
                            }
                          )
  }
}
