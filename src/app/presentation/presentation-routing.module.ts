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
    path:'login',
    loadChildren:()=>import('./auth/login/login.component').then((module)=>module.LoginComponent),
  },
  {
    path: 'offers',
    loadChildren:()=>import('./offers/list/list.component').then((module)=>module.ListComponent),
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
