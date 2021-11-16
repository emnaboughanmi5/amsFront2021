import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const urlRoles = environment.urlBack;
@Injectable({
  providedIn: 'root'
})
export class RoleService {


  role: any;

  constructor(private Http: HttpClient) { }
  listRoles() {
    return this.Http.get(urlRoles + 'role' + '/list');
  }
  createRole(myform: any) {
    this.role = {
      'role': myform.value.role,

    }
    return this.Http.post(urlRoles + 'role' + '/add', this.role);

  }

  getRole(id: any) {
    return this.Http.get(urlRoles + 'role' + '/' + id)

  }
}
