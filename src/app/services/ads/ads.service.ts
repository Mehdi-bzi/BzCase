import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdsService {
  ads:Array[];
  brands:Array[];
  models:Array[];
  adsSubject: BehaviorSubject<Array<any>>;
  brandsSubject: BehaviorSubject<Array<any>>;
  modelsSubject: BehaviorSubject<Array<any>>;

  constructor(private httpClient: HttpClient) {
    this.adsSubject = new BehaviorSubject([]);
    this.brandsSubject = new BehaviorSubject([]);
    this.modelsSubject = new BehaviorSubject([]);
   }

  getAds(){
    return this.httpClient.get('http://localhost:8000/api/ads.json')
                          .subscribe(
                            res=>{
                              this.ads = res;
                              this.adsSubject.next(this.ads);
                            }
                          )

  }

  getBrands(){
    return this.httpClient.get('http://localhost:8000/api/brands.json')
                          .subscribe(
                            res=>{
                              this.brands = res;
                              this.brandsSubject.next(this.brands);
                            }
                          )
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
