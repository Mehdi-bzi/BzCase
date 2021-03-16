import { ModelService } from './../../services/model/model.service';
import { BrandService } from './../../services/brand/brand.service';
import { AdsService } from './../../services/ads/ads.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
 import { FormBuilder, FormGroup, FormsModule ,Validators } from '@angular/forms';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  ads:Array<[Object]>;
  brands:Array<[Object]>;
  models:Array<[Object]>;
  modelsShowable: Array<[Object]>;

  adSubscription: Subscription;
  brandSubscription: Subscription;  
  modelSubscription: Subscription;

   homeSearchForm: FormGroup;

  constructor(private adsService:AdsService, 
              private brandService:BrandService,
              private modelService:ModelService,
              private fb:FormBuilder
              ) { }

  ngOnInit(): void {
    // this.adsService.getAds();  
    // this.adSubscription = this.adsService.adsSubject
    //                         .subscribe(
    //                           (res)=>{
    //                             this.ads = res;
    //                           }
    //                         );

    this.brandService.getBrands();  
    this.brandSubscription = this.brandService.brandsSubject
                            .subscribe(
                              (res)=>{
                                this.brands = res;
                              }
                            );
    
    this.modelService.getModels();  
    this.modelSubscription = this.modelService.modelsSubject
                            .subscribe(
                              (res)=>{
                                this.models = res;
                              }
                            );   

    this.homeSearchForm = this.fb.group({
      // 'brand': ['', Validators.required],
      // 'model': ['', Validators.required],
      'brand': '', 
      'model': ''
    });

  }
// Fin ngOnInit début des fonctions onClick

  onClickFilterByBrand() {
    // if(brandId === 'choisir') {
    //     this.modelsShowable = this.models.slice(0);
    // }
    // else {
    //     this.modelsShowable = this.models.filter(model => model.id === 1);
        console.log("test");
    
}

  // isRightBrand(){
  //   if (this.homeSearchForm.value.brand === "1"){ 
  //     return true;
  //   }
    
  // }    

  // brandSel = document.getElementById('brand-sel');
  // brandSelValue = brandSel.value;

  // onClickFilterBrand(brandId){
  //   if(brandId === 'Choisir') {
  //       this.models = this.models.slice(0);
  //   }
  //   else {
  //       this.models = this.models.filter(model => model.brand === brandId);
  //   }
  // } 

}
