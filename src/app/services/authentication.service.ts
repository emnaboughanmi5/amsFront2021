import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/User';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userUrl = 'https://amsjwt.herokuapp.com';
  token: string;
  public loggedUser: string;
  constructor(private router: Router, private httpClient: HttpClient) {

  }


  register(user: any) {
    return this.httpClient.post(this.userUrl + 'api/users', user);
  }

  login(user: any) {
    return this.httpClient.post<any>(this.userUrl + 'login', user)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('role', user.authorities[0].authority);
        this.loggedUser = sessionStorage.getItem('role');
        return user;
      }));

  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    this.loggedUser = sessionStorage.getItem('role') + " : " + sessionStorage.getItem('username');

    return !(user === null)
  }
  loadToken() {
    this.loggedUser = sessionStorage.getItem('role') + " : " + sessionStorage.getItem('username');

  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    this.router.navigate(['login']);
  }





  public getRole() {
    return sessionStorage.getItem('role');
  }


  isAdmin(): Boolean {
    if (!this.getRole())
      return false;
    return this.getRole().indexOf('admin') >= 0;
  }



}
