import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  urlRoles = 'https://amsjwt.herokuapp.com/role';

  role: any;

  constructor(private Http: HttpClient) { }
  listRoles() {
    return this.Http.get(this.urlRoles + '/list');
  }
  createRole(myform: any) {
    this.role = {
      'role': myform.value.role,

    }
    return this.Http.post(this.urlRoles + '/add', this.role);

  }

  getRole(id: any) {
    return this.Http.get(this.urlRoles + '/' + id)

  }
}
