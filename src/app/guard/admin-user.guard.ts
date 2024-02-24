import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth-service';
import { map } from 'rxjs';

export const adminUserGuard: CanActivateFn = (route, state) => {

  console.log("normal user guard...")
  const authService=inject(AuthService);
  const router=inject(Router);
  const toastr=inject(ToastrService)
 return authService.checkLoginAndAdminUser().pipe(map((value)=>{
     if(value)
     return true;
     else{
         router.navigate(['/user/dashboard']);
         return false;
     }
 }));
 };
 