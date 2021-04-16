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

  adsFil:Array[];
  adsFiltered: BehaviorSubject<Array<any>>;

  constructor(private httpClient: HttpClient) {
    this.adsSubject = new BehaviorSubject([]);
    this.brandsSubject = new BehaviorSubject([]);
    this.modelsSubject = new BehaviorSubject([]);
    this.adsFiltered = new BehaviorSubject([]);
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

  // getSingleAd(vBrand){
  //   return this.httpClient.get('http://127.0.0.1:8000/api/ads/'+vBrand)
  //                         .subscribe(
  //                           res=>{
  //                             this.adsFil = res;
  //                             this.adsFiltered.next(this.adsFil);
  //                           }, err => {
  //                             console.log(err);}
  //                         )
 
  // }

  getAdsFiltered(vBrand,vModel,vGasoline,vMileage,vPrice, vDate){
    return this.httpClient.get('http://127.0.0.1:8000/api/ads?brand='+vBrand+'&gasoline='+vGasoline+
                                                            '&model='+vModel+'&mileage[lt]='+vMileage[1]+
                                                            '&mileage[gt]='+vMileage[0]+'&price[between]='+vPrice[0]+'..'+vPrice[1]+
                                                            '&dateCirculation[before]='+vDate[1]+'-12-31&dateCirculation[after]='+vDate[0]+'-01-01')
                          .subscribe(
                            res=>{
                              this.adsFil = res['hydra:member'];
                              this.adsFiltered.next(this.adsFil);
                            }, err => {
                              console.log("Alors l'erreur c'est : ",err);}
                          )                        

  }

  getSingleAd(adId){
    return this.httpClient.get('http://127.0.0.1:8000/api/ads/'+adId)
                          .subscribe(
                            res=>{
                              this.ads = res;
                              this.adsSubject.next(this.ads);
                            }
                          )
  }





  // getBrands(){
  //   return this.httpClient.get('http://localhost:8000/api/brands.json')
  //                         .subscribe(
  //                           res=>{
  //                             this.brands = res;
  //                             this.brandsSubject.next(this.brands);
  //                           }
  //                         )
  // }

  // getModels(){
  //   return this.httpClient.get('http://localhost:8000/api/models.json')
  //                         .subscribe(
  //                           res=>{
  //                             this.models = res;
  //                             this.modelsSubject.next(this.models);
  //                           }
  //                         )
  // }

  addAd(AdToAdd: any): Observable<any>{
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.post('http://127.0.0.1:8000/api/ads.json',AdToAdd, {'headers': headers})
  }
}
