import { UserCreatorViewComponent } from './views/user-creator-view/user-creator-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdSingleViewComponent } from './views/ad-single-view/ad-single-view.component';
import { AdCreatorViewComponent } from './views/ad-creator-view/ad-creator-view.component';


const routes: Routes = [
  {path:'', component:HomeViewComponent},
  // {path:'users/new', component:UserCreatorViewComponent},
  // {path:'ads/new', component:AdCreatorViewComponent},
  // {path:'ads/:id', component:AdSingleViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
