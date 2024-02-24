import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  {path:'',component:ProductIndexComponent,
  children:[
    {path:'add', component:ProductCreateComponent},
    {path:'list', component:ProductListComponent},
    {path:'edit/:id', component:ProductEditComponent},
    {path:'view/:id', component:ProductViewComponent}
  ]
  },
  {path:'edit',loadComponent:()=> import('./product-create/product-create.component').then(m => m.ProductCreateComponent ) },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
