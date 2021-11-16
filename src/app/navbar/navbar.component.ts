import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedin: boolean;
  loggedUser: string;
  constructor(public authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.authService.loadToken();


  }

  onLogout() {
    this.authService.logOut();
  }

}
