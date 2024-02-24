import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { LoginResponse } from '../model/login-response';
import { Store } from '@ngrx/store';
import { removeLoginData } from '../store/auth/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
loginData?:LoginResponse;
isAdmin?: Observable<boolean>;
  constructor(
    private authSerivce:AuthService,
    private router:Router,
    private store:Store<{auth:LoginResponse}>
     ){
   
    this.authSerivce.getLoggedInData().subscribe({
      next:loginData=>{
        this.loginData=loginData;
        console.log("Login Data...",this.loginData);
        
      }
    })
    this.isAdmin=this.authSerivce.checkLoginAndAdminUser();
  }
  // constructor end heare

 

  logout(){
   this.store.dispatch(removeLoginData());
   this.router.navigate(['/login']);
  }

}
