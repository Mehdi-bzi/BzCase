import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  models:Array[];
  modelsSubject: BehaviorSubject<Array<any>>;

  constructor(private httpClient: HttpClient) {
    this.modelsSubject = new BehaviorSubject([]);
   }

   getModels(){
    return this.httpClient.get('http://localhost:8000/api/models.json')
                          .subscribe(
                            res=>{
                              this.models = res;
                              this.modelsSubject.next(this.models);
                            }
                          )
  }
}
