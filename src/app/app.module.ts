import { HeaderComponent } from './components/header/header.component';
import { ModelService } from './services/model/model.service';
import { BrandService } from './services/brand/brand.service';
import { UserService } from './services/user/user.service';
import { UsersViewComponent } from './views/users-view/users-view.component';
import { UserSingleViewComponent } from './views/user-single-view/user-single-view.component';
import { UserEditorViewComponent } from './views/user-editor-view/user-editor-view.component';
import { UserCreatorViewComponent } from './views/user-creator-view/user-creator-view.component';
import { GaragesViewComponent } from './views/garages-view/garages-view.component';
import { GarageSingleViewComponent } from './views/garage-single-view/garage-single-view.component';
import { GarageEditorViewComponent } from './views/garage-editor-view/garage-editor-view.component';
import { GarageCreatorViewComponent } from './views/garage-creator-view/garage-creator-view.component';
import { AdSingleViewComponent } from './views/ad-single-view/ad-single-view.component';
import { AdEditorViewComponent } from './views/ad-editor-view/ad-editor-view.component';
import { AdsService } from './services/ads/ads.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdsViewComponent } from './views/ads-view/ads-view.component';
import { AdCreatorViewComponent } from './views/ad-creator-view/ad-creator-view.component';
import { TableRowUserComponent } from './components/table-row-user/table-row-user.component';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { NouisliderModule } from 'ng2-nouislider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';




@NgModule({
  declarations: [
    AppComponent, 
    HomeViewComponent,
    AdsViewComponent,
    UsersViewComponent,
    UserCreatorViewComponent,
    AdCreatorViewComponent, 
    TableRowUserComponent,
    DashboardViewComponent,
    UserSingleViewComponent,
    HeaderComponent,

  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NouisliderModule,
    NgxSliderModule,
  ],
  providers: [
    AdsService,
    UserService,
    BrandService,
    ModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
