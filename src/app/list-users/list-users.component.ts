import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: any;
  constructor(private service: UserService, private router: Router) { }
  ngOnInit() {
    this.service.listUsers().subscribe(
      response => {
        this.users = response;
      }
    );
  }
  deleteUser(myObj: any) {

    this.service.deleteUser(myObj).subscribe(response => {
      this.refreshListUsers();
    })
  }
  refreshListUsers() {
    this.service.listUsers().subscribe(
      response => {
        this.users = response;
      }
    );
  }
  updateUser(myObj: any) {
    this.router.navigate(['updateUser' + '/' + myObj['id']]);
  }

}
