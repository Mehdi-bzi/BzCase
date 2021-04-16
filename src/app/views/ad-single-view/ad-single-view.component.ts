import { ActivatedRoute } from '@angular/router';
import { AdsService } from './../../services/ads/ads.service';
import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-ad-single-view',
  templateUrl: './ad-single-view.component.html',
  styleUrls: ['./ad-single-view.component.css']
})
export class AdSingleViewComponent implements OnInit {

  ad:Array<any>;
  adSub: Subscription;


  constructor(private adsService:AdsService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.adsService.getSingleAd(id);
    this.adSub = this.adsService.adsSubject
                    .subscribe(
                      res=>{
                        this.ad = res;
                      }
                    )
                    console.log(this.ad)


  }



}
