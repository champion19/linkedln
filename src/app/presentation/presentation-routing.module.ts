import { MainOffersComponent } from './offers/main-offers/main-offers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './offers/list/list.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then((module)=>module.AuthModule),
  },
  {
    path: 'offers',
    loadChildren:()=>import('./offers/offers.module').then((module)=>module.OffersModule),
  },
  {
    path:"details",
    component: DetailsComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((module)=>module.DashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
