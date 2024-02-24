import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ProductIndexComponent } from '../product/product-index/product-index.component';
import { ProductCreateComponent } from '../product/product-create/product-create.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { ProductEditComponent } from '../product/product-edit/product-edit.component';
import { ProductViewComponent } from '../product/product-view/product-view.component';


const routes: Routes = [
  {path:'', component:IndexComponent,
  children:[
    //{path:'add', component:CreateComponent},
    //{path:'list', component:UserListComponent},
    //{path:'edit/:id', component:EditComponent},
    //{path:'view/:id', component:ViewComponent},
    {path:'edit/:id', loadComponent:()=> import('./edit/edit.component').then(m => m.EditComponent)},
    {path:'view/:id', loadComponent:()=> import('./view/view.component').then(m => m.ViewComponent)},
    {path:'add',loadComponent:()=> import('./create/create.component').then(m => m.CreateComponent ) },
    {path:'list', loadComponent:()=> import('./user-list/user-list.component').then(m => m.UserListComponent)},
    ]},

    //{path:'edit',loadComponent:()=> import('./create/create.component').then(m => m.CreateComponent ) },
    //{path:'lists', loadComponent:()=> import('./user-list/user-list.component').then(m => m.UserListComponent)},
 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
