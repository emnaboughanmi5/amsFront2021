import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {

  roles: any;
  constructor(private service: RoleService, private router: Router) { }
  ngOnInit() {
    this.service.listRoles().subscribe(
      response => {
        this.roles = response;
      }
    );
  }

  refreshListRoles() {
    this.service.listRoles().subscribe(
      response => {
        this.roles = response;
      }
    );
  }


}