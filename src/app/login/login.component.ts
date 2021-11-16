import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {
  user: any = {};
  loginForm: FormGroup;
  username: string;
  password: string;
  role: string;
  invalidLogin = false;
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";

  constructor(private formBuilder: FormBuilder, private userService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {

  }

  login() {
    this.userService.login(this.user).subscribe((data: any) => {
      if (data) {
        window.sessionStorage.removeItem('token');
        window.sessionStorage.setItem('token', data.token);
        window.sessionStorage.removeItem('username');
        window.sessionStorage.setItem('username', data.username);
        window.sessionStorage.removeItem('authorities');
        window.sessionStorage.setItem('authorities', data.authorities);

        this.router.navigate(['listProvider']);
        this.invalidLogin = false;
      }
    },
      (error) => {

        this.invalidLogin = true
      }
    );
  }


}