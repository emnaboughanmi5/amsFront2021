import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../services/role.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public id: any;
  private userToUpdate: any;
  public username: any;
  public email: any;
  public role: any;
  public roles: any;
  public password: any;
  public active: any;
  constructor(private service: UserService, private roleService: RoleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );
    this.roleService.listRoles().subscribe(
      response => {
        this.roles = response;
      }
    );


    this.userToUpdate = this.service.getUser(this.id).subscribe(
      (response) => {
        this.username = response["username"];
        this.email = response["email"];
        this.role = response["roles"];
        this.password = response["password"];
        this.active = 1;
      }
    );
  }


  updateUser() {
    this.userToUpdate = {
      'username': this.username,
      'email': this.email,
      'roles': this.roles,
      'password': this.password,
      'active': this.active,
      'id': this.id
    }
    this.service.updateUser(this.userToUpdate).subscribe(
      (response) => {

        this.router.navigate(['listUsers']);
      }
    );

  }
}
