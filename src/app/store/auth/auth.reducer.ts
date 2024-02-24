import { createReducer, on } from '@ngrx/store';
import { removeLoginData, setLoginData } from './auth.actions';
import { LoginResponse } from '../../model/login-response';
import { AuthService } from '../../services/auth-service';



export const intialState: LoginResponse =
  AuthService.getLoginDataFromLocalStorage()
    ? AuthService.getLoginDataFromLocalStorage()
    : {
        jwtToken: '',
        user: undefined,
        login: false,
      };

export const AuthReducer=createReducer(intialState, 
    on(setLoginData,(oldState, payload)=>{
    console.log('set Login data action with reducer');
    console.log(payload);
    return { ...oldState, ...payload, login:true};
}),
on(removeLoginData, (state) => {
    return {
        jwtToken: '',
        user: null,
        login: false
    }
})
); 
