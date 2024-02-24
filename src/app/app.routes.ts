import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateComponent } from './admin/component/user/create/create.component';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"signup", component:CreateComponent},
    {path:'admin',
    loadChildren:()=>import('./admin/admin.module').then((m) => m.AdminModule),
    },
    {path:'user',
    loadChildren:()=>import('./user/user.module').then((m) => m.UserModule),
    },
];
