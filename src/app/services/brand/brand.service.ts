import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  brands:Array[];
  brandsSubject: BehaviorSubject<Array<any>>;

  constructor(private httpClient: HttpClient) {
    this.brandsSubject = new BehaviorSubject([]);
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

}
