import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { adminUserGuard } from '../guard/admin-user.guard';



const routes: Routes = [
  {path:'', component:DashboardComponent,
  children:[
  {path:'users',
  loadChildren:()=>import('./component/user/user.module').then((m) => m.UserModule),
  },
  {path:'products',
  loadChildren:()=>import('./component/product/product.module').then((m) => m.ProductModule),
  },
  {path:'orders',
  loadChildren:()=>import('./component/order/order.module').then((m) => m.OrderModule),
  },
  {path:'categorys',
  loadChildren:()=>import('./component/category/category.module').then((m) => m.CategoryModule),
  },
  {path:'payments',
  loadChildren:()=>import('./component/payment/payment.module').then((m) => m.PaymentModule),
  },

  //{path:'user',loadComponent:()=> import('./component/user/index/index.component').then(m => m.IndexComponent) },

  { path:'dashboard',loadComponent:()=> import('./admin-index/admin-index.component').then(m => m.AdminIndexComponent) },
  
  ],
  canActivate:[adminUserGuard]
  },

 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
