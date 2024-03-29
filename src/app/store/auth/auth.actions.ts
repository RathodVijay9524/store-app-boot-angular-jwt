import { createAction, props } from "@ngrx/store";
import { LoginResponse } from "../../model/login-response";


export const setLoginData = createAction('SET_LOGIN_DATA',props<LoginResponse>());

export const removeLoginData = createAction('REMOVE_LOGIN_DATA');
  
  // ... if needed create your action too