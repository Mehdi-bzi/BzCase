import { GasolineService } from './../../services/gasoline/gasoline.service';
import { ModelService } from './../../services/model/model.service';
import { BrandService } from './../../services/brand/brand.service';
import { AdsService } from './../../services/ads/ads.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
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
  gasolines: Array<[Object]>;

  modelsShowable: Array<[Object]>;
  adsShowable: Array<[Object]>;

  adSubscription: Subscription;
  brandSubscription: Subscription;  
  modelSubscription: Subscription;
  gasolineSubscription: Subscription;
  adsShowables: Subscription;

  adsToDisplay$: BehaviorSubject<Array<Ad>>;;

   homeSearchForm: FormGroup;

  constructor(private adsService:AdsService, 
              private brandService:BrandService,
              private modelService:ModelService,
              private gasolineService:GasolineService,
              private fb:FormBuilder,              
              ) { this.adsToDisplay$ = new BehaviorSubject([]); }

  ngOnInit(): void {


    this.adsService.getAds();  
    this.adSubscription = this.adsService.adsSubject
                            .subscribe(
                              (res)=>{
                                this.ads = res;
                              }
                            );

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

    this.gasolineService.getGasolines();  
    this.gasolineSubscription = this.gasolineService.gasolinesSubject
                            .subscribe(
                              (res)=>{
                                this.gasolines = res;
                              }
                            ); 

    this.homeSearchForm = this.fb.group({
      // 'brand': ['', Validators.required],
      // 'model': ['', Validators.required],
      'brand': '', 
      'model': '',
      'gasoline': '',
    });

  }
// Fin ngOnInit début des fonctions onClick

onBrandSelected(value){
      if(value == "Choisir") {
        this.adsShowable = this.adsShowable;
        console.log("on est egal choisir")
    }
    else {
      
        this.modelsShowable = this.models.filter(model => model.brand === "/api/brands/"+value);
        this.adsToDisplay$.next(this.ads.filter(ad => ad.brand === "/api/brands/"+value));
        this.adsToDisplay$.subscribe(res=>{
          this.adsShowable = res;
        })
    }
  console.log("adshowable brand is" + this.adsShowable)
}

onModelSelected(valueBrand, valueModel){
  if(valueBrand === 'Choisir') {
    this.adsShowable = this.ads;
  }
  { 
    this.adsShowable = this.ads.filter(ad => ad.brand === "/api/brands/"+valueBrand && ad.model === "/api/models/"+valueModel);
  }
console.log("brand id is" + valueBrand+" et model value is" + valueModel)
}

onGasolineSelected(gasoline){
  if(gasoline === 'Choisir') {
    this.adsShowable = this.ads;
  }
  { 
    // this.adsShowable = this.ads.filter(ad => ad.gasoline === "/api/gasolines/"+gasoline &&
    //                                    ad.model === "/api/models/"+vModel &&
    //                                    ad.brand === "/api/brands/"+vBrand
    //                                    );
    this.adsToDisplay$.next(this.ads.filter(ad => ad.gasoline === "/api/gasolines/"+gasoline));
    this.adsToDisplay$.subscribe(res=>{
      this.adsShowable = res;
    })
  }
  // console.log("gasoline id is" + gasoline)
  console.log("adshowable is" + this.adsShowable)
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
