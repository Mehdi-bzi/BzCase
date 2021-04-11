import { GasolineService } from './../../services/gasoline/gasoline.service';
import { ModelService } from './../../services/model/model.service';
import { BrandService } from './../../services/brand/brand.service';
import { AdsService } from './../../services/ads/ads.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule ,Validators } from '@angular/forms';
import { __classPrivateFieldSet } from 'tslib';
import { NouisliderModule } from 'ng2-nouislider';




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
  mileage: Array<[Object]>;

  mileageMin;

  modelsShowable: Array<[Object]>;
  adsShowable: Array<[Object]>;


  adSubscription: Subscription;
  brandSubscription: Subscription;  
  modelSubscription: Subscription;
  gasolineSubscription: Subscription;
  adsShowableSub: Subscription;
  mileageSub: Subscription;

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
      'mileageMin': this.mileageMin,
      'mileageMax': '',
      'price': '',      
    });

 


    // this.brandField$ = this.homeSearchForm.get('brand').valueChanges;

  }
// Fin ngOnInit début des fonctions onClick

onBrandSelected(vBrand,vModel,vGasoline,vMiln,vPrice){
  this.homeSearchForm.value.model = 'toto';
  vModel = '';
  console.log(vModel);
   this.modelsShowable = this.models.filter(model => model.brand === "/api/brands/"+vBrand);
  this.adsService.getAdsFiltered(vBrand, vModel, vGasoline,vMiln,vPrice);
  this.adsService.adsFiltered.
                  subscribe(
                    res=>{
                      this.adsShowable = res;
                    }
                  )

     console.log("valeur de model "+this.homeSearchForm.value.model)  
}

checkU(){
  console.log(this.mileageMin)
}

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

onFieldSelected(vBrand,vModel,vGasoline,vMileage,vPrice){
  if(vBrand != ''){
    this.modelsShowable = this.models.filter(model => model.brand === "/api/brands/"+vBrand);
  }{
    vModel="";
  }
  // this.adsService.getAdsFilteredMil(vBrand, vModel, vGasoline,vMil);
  this.adsService.getAdsFiltered(vBrand, vModel, vGasoline);
  this.adsService.adsFiltered.
                  subscribe(
                    res=>{
                      this.adsShowable = res;
                    }
                  )
    console.log("value de model sur gasoline "+vModel)              
}



// onGasolineSelected(vBrand, vModel, vGasoline){
//   let adsShowArray;
//   this.adsShowable = this.ads;
//   let fields = [{id:vBrand, name:"brand"},
//                 {id:vModel, name:"model"}, 
//                 {id:vGasoline, name:"gasoline"}];

//   let fieldsFilled = [];              
//   // let test = this.ads.filter(ad => Object.keys(ad)[0] === "id");
//   for(let i=0;i<fields.length;i++){
//     if(fields[i].id!=""){
//       fieldsFilled.push(fields[i]);
//     }
//   }

// // le meilleur qu'on ait trouvé jusque là
//       for (let i = 0; i<fieldsFilled.length; i++){  
//         this.adsShowable = this.ads.filter(ad =>{
             
//            return ad[fieldsFilled[i].name] === "/api/"+fieldsFilled[i].name+"s/"+fieldsFilled[i].id;
//            console.log(ad[fieldsFilled[i].name], "/api/"+fieldsFilled[i].name+"s/"+fieldsFilled[i].id);  
//            }
//            );
//           }
// // fin le meilleur qu'on ait trouvé jusque là      
// }
}