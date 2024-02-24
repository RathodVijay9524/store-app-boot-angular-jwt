import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderIndexComponent } from './order-index/order-index.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderViewComponent } from './order-view/order-view.component';

const routes: Routes = [
  {path:'',component:OrderIndexComponent,
  children:[
    {path:'add', component:OrderCreateComponent},
    {path:'list', component:OrderListComponent},
    {path:'edit/:id', component:OrderCreateComponent},
    {path:'view/:id', component:OrderViewComponent}
  ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
