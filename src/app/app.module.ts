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

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    AdsViewComponent,
    UsersViewComponent,
    UserCreatorViewComponent

  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AdsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
