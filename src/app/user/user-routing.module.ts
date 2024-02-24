import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { normalUserGuard } from '../guard/normal-user.guard';

const routes: Routes = [
  {path:'', component:DashboardComponent,
  children:[
    { path:'dashboard',loadComponent:()=> import('./user-index/user-index.component').then(m => m.UserIndexComponent) },
  ],
  canActivate:[normalUserGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
