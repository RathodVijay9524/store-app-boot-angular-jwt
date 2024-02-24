import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const normalUserGuard: CanActivateFn = (route, state) => {
 console.log("normal user guard...")
 const authService=inject(AuthService);
 const router=inject(Router);
 const toastr=inject(ToastrService)
return authService.checkLoginAndNormalUser().pipe(map((value)=>{
    if(value)
    return true;
    else{
        toastr.warning('You are not loged in..');
        router.navigate(['/login']);
        return false;
    }
}));
};
