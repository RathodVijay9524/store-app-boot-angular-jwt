import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentIndexComponent } from './payment-index/payment-index.component';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { PaymentEditComponent } from './payment-edit/payment-edit.component';
import { PaymentViewComponent } from './payment-view/payment-view.component';

const routes: Routes = [
  {path:'',component:PaymentIndexComponent,
  children:[
    {path:'add', component:PaymentCreateComponent},
    {path:'list', component:PaymentListComponent},
    {path:'edit/:id', component:PaymentEditComponent},
    {path:'view/:id', component:PaymentViewComponent}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
