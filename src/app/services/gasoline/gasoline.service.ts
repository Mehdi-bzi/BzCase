import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GasolineService {

  gasolines:Array[];
  gasolinesSubject: BehaviorSubject<Array<any>>;

  constructor(private httpClient: HttpClient) {
    this.gasolinesSubject = new BehaviorSubject([]);
   }

  getGasolines(){
  return this.httpClient.get('http://localhost:8000/api/gasolines.json')
                        .subscribe(
                          res=>{
                             this.gasolines = res;
                            this.gasolinesSubject.next(this.gasolines);
                          }
                         )
  }
}
