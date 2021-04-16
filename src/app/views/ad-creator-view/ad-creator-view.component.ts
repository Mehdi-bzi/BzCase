import { GarageService } from './../../services/garage/garage.service';
import { UserService } from './../../services/user/user.service';
import { GasolineService } from './../../services/gasoline/gasoline.service';
import { Subscription } from 'rxjs';
import { AdsService } from './../../services/ads/ads.service';
import { BrandService } from './../../services/brand/brand.service';
import { ModelService } from './../../services/model/model.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-ad-creator-view',
  templateUrl: './ad-creator-view.component.html',
  styleUrls: ['./ad-creator-view.component.css']
})
export class AdCreatorViewComponent implements OnInit {
 
  brands:Array<any>;
  brandSubscription: Subscription;

  garages:Array<any>;
  garagesShowable: Array<any>;
  garageSubscription: Subscription;
  garageSub: Subscription;

  models:Array<any>;
  modelsShowable: Array<any>;
  modelSubscription: Subscription;

  users:Array<any>
  userSub: Subscription;

  gasolines: Array<any>
  gasolineSub: Subscription;

  adObject: Object;

  newAdForm: FormGroup;



  constructor(private adsService: AdsService,
              private modelService: ModelService,
              private brandService: BrandService,
              private gasolineService: GasolineService,
              private userService: UserService,
              private garageService: GarageService,
              private fb:FormBuilder) { }

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

    this.userService.getUsers();
    this.userSub = this.userService.usersSubject
    .subscribe(
      (res)=>{
        this.users = res;
      }
    ); 

    this.garageService.getGarages();
    this.garageSub = this.garageService.garagesSubject
    .subscribe(
      (res)=>{
        this.garages = res;
      }
    );

    this.gasolineService.getGasolines();
    this.gasolineSub = this.gasolineService.gasolinesSubject
    .subscribe(
      (res)=>{
        this.gasolines = res;
      }
    );

    // this.gasolineService.getGasolines();  
    // this.gasolineSubscription = this.gasolineService.gasolinesSubject
    //                         .subscribe(
    //                           (res)=>{
    //                             this.gasolines = res;
    //                           }
    //                         ); 

    this.newAdForm = this.fb.group({
      'reference': ['a'],
      'title': ['', Validators.required],
      'user': ['', Validators.required],   
      'brand': ['', Validators.required],
      'garage': [''],
      'description': [''],
      'price': [],
      'photo': [[]],
      'model': ['', Validators.required],
      // 'dateCirculation': ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[012])\/\d{4}$/)]],
      'dateCirculation': ['a'],
      'mileage': [],
      'gasoline': ['', Validators.required]
  })

  // console.log("test"+this.brandsList)

}

  // getModelsForBrandId(brandId) {
  //   this.modelsShowable = this.models.filter(model => model.brand === "/api/brands/"+brandId);
  // }

  getModelsForBrandId(brandId) {
    this.modelsShowable = this.models.filter(model => model.brand === brandId);
  }

  // getGaragesOfUser(userId) {
  //   this.garagesShowable = this.garages.filter(g => g.user === "/api/users/"+userId);
  // }

  getGaragesOfUser(userId) {
    this.garagesShowable = this.garages.filter(g => g.user === userId);
  }

  // isBrandSelected(valueBrand){
  //   if (valueBrand != ""){
  //     return true;
  //   }
  // }

  onSubmitNewAdForm(){

    // for(let i =0; i< this.users.length;i ++){
    //   if(this.newAdForm.value.user == this.users[i].email){
    //     this.adObject[]
    //   }
    // }

    // this.newAdForm.setValue({
    //   reference: "a",
    //   title: this.newAdForm.value.title,
    //   user: "/api/users/"+this.newAdForm.value.u.id,   
    //   brand: "/api/brands/"+this.newAdForm.value.brand,
    //   garage: "/api/garages/"+this.newAdForm.value.garage,
    //   description: "test",
    //   price: this.newAdForm.value.price,
    //   photo: "test",
    //   model: "/api/models/"+this.newAdForm.value.model,
    //   // 'dateCirculation': ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[012])\/\d{4}$/)]],
    //   dateCirculation: "2021-03-22T00:00:00+00:00",
    //   mileage: "/api/mileages/"+this.newAdForm.value.mileage,
    //   gasoline: "/api/gasolines/"+this.newAdForm.value.gasoline
    // })

    // on transforme l'objet en json avec JSON.stringify
    let AdToAdd = JSON.stringify(this.newAdForm.value);
    console.log("test1"+this.newAdForm.value)
    this.adsService.addAd(AdToAdd)
        .subscribe(
          data => {
          console.log(data)
        }
        );
    console.log("test2"+this.newAdForm.value)
  }


}
