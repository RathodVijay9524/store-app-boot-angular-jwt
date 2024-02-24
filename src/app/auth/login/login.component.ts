import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { LoginResponse } from '../../model/login-response';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { setLoginData } from '../../store/auth/auth.actions';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData={
    email:"",
    password:""
  }

  constructor(
    private toastr: ToastrService,
    private authService:AuthService,
    private store: Store<{ auth: LoginResponse }>,
    private router: Router
  ) {

    this.store.select('auth').subscribe({
      next:(data) =>{console.log("Test...",data)}
    });
    this.store.subscribe({
      next:()=>{console.log('store')}
    });
    
  }

  formSubmitted(event: SubmitEvent) {
    event.preventDefault();
    console.log(this.loginData);
     if (// VALIDATE
      this.loginData.email.trim() === '' ||
      this.loginData.password.trim() === ''
    ) {
      this.toastr.error('Values Required !!');
      return;
    }
    this.authService.generateToken(this.loginData).subscribe({
      next: (value: LoginResponse) => {
        console.log(value);
        this.store.dispatch(setLoginData(value));
        this.router.navigate(['/admin/dashboard']);  
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error.message);
      },
    });
    

   

  }

}
