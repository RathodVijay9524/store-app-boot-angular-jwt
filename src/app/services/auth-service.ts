import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../model/login-response';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private store: Store<{auth:LoginResponse}>) { }

  generateToken(loginData:{email:string,password:string}){
  return this.http.post<LoginResponse>(`${environment.apiUrl}/auth/login`,loginData)
  }

  checkLoginAndNormalUser(){
      return this.store.select('auth').pipe(map(value=>{
        //console.log(value.jwtToken);
        //console.log(value.login);
        //console.log(value.user);
        //console.log(value.user?.roles);
        const isNormalRole=value.user?.roles.find(
          role=>role.roleName == environment.ROLE_NARMAL_NAME && role.roleId==environment.ROLE_NARMAL_ID)
          console.log('Role Name :',isNormalRole,"End the print");
        if(value.login && value.jwtToken && value.user && isNormalRole)return true;
          else return false; 
      }));
  }
  checkLoginAndAdminUser(){

    return this.store.select('auth').pipe(map(value=>{
      //console.log(value.jwtToken);
      //console.log(value.login);
      //console.log(value.user);e
      //console.log(value.user?.roles);
      const isAdminRole=value.user?.roles.find(
        role=>role.roleName == environment.ROLE_ADMIN_NAME && role.roleId==environment.ROLE_ADMIN_ID)
        console.log('Role Name :',isAdminRole,"End the print");
      if(value.login && value.jwtToken && value.user && isAdminRole)return true;
        else return false; 
    }));
  }
   
  // get login data
  getLoggedInData(){
   return this.store.select('auth'); 
  }

  saveLoginDataToLocalStorage(loginData: LoginResponse) {
    localStorage.setItem('data', JSON.stringify(loginData));
  }

  static getLoginDataFromLocalStorage() {
    const dataString = localStorage.getItem('data');
    if (dataString) return JSON.parse(dataString);
    else return null;
  }
}
