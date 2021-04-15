import { GasolineService } from './../../services/gasoline/gasoline.service';
import { ModelService } from './../../services/model/model.service';
import { BrandService } from './../../services/brand/brand.service';
import { AdsService } from './../../services/ads/ads.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, FormsModule ,Validators } from '@angular/forms';
import { __classPrivateFieldSet } from 'tslib';
import { NouisliderModule } from 'ng2-nouislider';
import { Options } from '@angular-slider/ngx-slider';



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


  //Options pour le field kilomètrage 
  optionsKm: Options = {
    floor: 0,
    ceil: 120000,
    step: 5000
  };

    //Options pour le field prix 
    optionsPrice: Options = {
      floor: 1000,
      ceil: 50000,
      step: 500
  
    };

    //Options pour le field date de mise en circulation 
    optionsDate: Options = {
      floor: 1987,
      ceil: 2021,
      step: 1
    };

  modelsShowable: Array<[Object]>;
  adsShowable: Array<[Object]>;
  

  adSubscription: Subscription;
  brandSubscription: Subscription;  
  modelSubscription: Subscription;
  gasolineSubscription: Subscription;
  adsShowableSub: Subscription;


  adsToDisplay$: BehaviorSubject<Array<Ad>>;;
  brandField$: Observable<any>;
  brandField:any;

   homeSearchForm: FormGroup;


   
  constructor(private adsService:AdsService, 
              private brandService:BrandService,
              private modelService:ModelService,
              private gasolineService:GasolineService,
              private fb:FormBuilder,              
              ) { this.adsToDisplay$ = new BehaviorSubject([]);
                  }

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
      'mileage': [[0,120000]],
      'mileageMax': '',
      'price': [[1000,50000]],
      'date' : [[1987,2021]]      
    });

 


    // this.brandField$ = this.homeSearchForm.get('brand').valueChanges;

  }
// Fin ngOnInit début des fonctions onClick

onBrandSelected(vBrand,vModel,vGasoline,vMileage,vPrice,vDate){

  vModel = '';
  console.log(vModel);
   this.modelsShowable = this.models.filter(model => model.brand === "/api/brands/"+vBrand);
  this.adsService.getAdsFiltered(vBrand,vModel,vGasoline,vMileage,vPrice,vDate);
  this.adsService.adsFiltered.
                  subscribe(
                    res=>{
                      this.adsShowable = res;
                    }
                  )

     console.log("valeur supérieure de mileage "+vMileage[1])  
}

// checkU(){
//   console.log(this.mileageMin)
// }

checkAds(){
  console.log(this.ads)
}


onModelSelected(valueBrand, valueModel){
  // console.log("screw"+valueBrand, valueModel, valueGasoline);
  if(valueBrand === '') {
    // return false;
    this.adsShowable = this.ads;
  }
  { 
    this.adsShowable = this.ads.filter(ad => ad.brand === "/api/brands/"+valueBrand && ad.model === "/api/models/"+valueModel);
  }
console.log("brand id is" + valueBrand+" et model value is" + valueModel)
}

onFieldSelected(vBrand,vModel,vGasoline,vMileage,vPrice,vDate){
  if(vBrand != ''){
    this.modelsShowable = this.models.filter(model => model.brand === "/api/brands/"+vBrand);
  }{
    vModel="";
  }
  // this.adsService.getAdsFilteredMil(vBrand, vModel, vGasoline,vMil);
  this.adsService.getAdsFiltered(vBrand, vModel, vGasoline,vMileage,vPrice,vDate);
  this.adsService.adsFiltered.
                  subscribe(
                    res=>{
                      this.adsShowable = res;
                    }
                  )
    console.log("value de model sur gasoline "+vModel)              
}

}