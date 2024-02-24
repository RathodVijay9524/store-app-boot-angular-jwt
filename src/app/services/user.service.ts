import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../admin/component/user/model/user';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient) {

   }

    // signup logic
  signupUser(user: User): Observable<any> {
    return this.httpClient.post<User>(`${environment.apiUrl}/users`, user);
  }
   
  
}
