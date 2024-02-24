import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { LoginResponse } from './model/login-response';
import { AuthService } from './services/auth-service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'store-app';
  constructor(
    private tost:ToastrService,
    private authService: AuthService,
    private store:Store<{auth:LoginResponse}>){
      
    this.store.select('auth').subscribe({
      next:(loginData)=>{
        this.authService.saveLoginDataToLocalStorage(loginData);
      },
    });

  }
  // constructor ends heare.....




}
