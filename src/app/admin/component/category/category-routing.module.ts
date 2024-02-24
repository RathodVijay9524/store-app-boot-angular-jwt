import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryIndexComponent } from './category-index/category-index.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryViewComponent } from './category-view/category-view.component';

const routes: Routes = [
  {path:'',component:CategoryIndexComponent,
  children:[
    {path:'add', component:CategoryCreateComponent},
    {path:'list', component:CategoryListComponent},
    {path:'edit/:id', component:CategoryEditComponent},
    {path:'view/:id', component:CategoryViewComponent}
  ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
