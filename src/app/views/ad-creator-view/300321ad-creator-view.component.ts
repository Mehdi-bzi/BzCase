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
  ads:Array<[Object]>;
  brandsList:Array<[Object]>;
  models:Array<[Object]>;
  gasolines: Array<[Object]>;

  modelsShowable: Array<[Object]>;

  adSubscription: Subscription;
  brandSubscription: Subscription;  
  modelSubscription: Subscription;
  gasolineSubscription: Subscription;

  newAdForm: FormGroup;



  constructor(private adsService: AdsService,
              private modelService: ModelService,
              private brandService: BrandService,
              private gasolineService: GasolineService,
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
        this.brandsList = res;
      }
    );

    // this.modelService.getModels();
    // this.modelSubscription = this.modelService.modelsSubject
    // .subscribe(
    //   (res)=>{
    //     this.models = res;
    //   }
    // ); 

    // this.gasolineService.getGasolines();  
    // this.gasolineSubscription = this.gasolineService.gasolinesSubject
    //                         .subscribe(
    //                           (res)=>{
    //                             this.gasolines = res;
    //                           }
    //                         ); 

    this.newAdForm = this.fb.group({
      // 'reference': ['', Validators.required],
      'title': ['', Validators.required],   
      'brand': ['', Validators.required],
      'garage': [''],
      'description': [''],
      'price': [''],
      'photo': [''],
      'model': ['', Validators.required],
      'dateCirculation': ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[012])\/\d{4}$/)]],
      'mileage': ['', Validators.required],
      'gasoline': ['', Validators.required]
  })

  console.log("test"+this.brandsList)

}

  getModelsForBrandId(brandId) {
    this.modelsShowable = this.models.filter(model => model.brand === brandId);
  }

  


}
