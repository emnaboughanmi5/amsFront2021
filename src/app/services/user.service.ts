import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userUrl = environment.urlBack + '/api/users'
  constructor(private httpClient: HttpClient) {

  }
  listUsers() {
    return this.httpClient.get(this.userUrl + '/list');
  }
  deleteUser(myObj: any) {
    return this.httpClient.delete(this.userUrl + '/' + myObj['id'])

  }
  updateUser(myObj: any) {
    return this.httpClient.put(this.userUrl + '/' + myObj['id'], myObj);

  }
  getUser(id: any) {
    return this.httpClient.get(this.userUrl + '/' + id)

  }
}
