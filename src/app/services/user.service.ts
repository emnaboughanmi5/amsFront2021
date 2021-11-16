import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const userUrl = environment.urlBack;
@Injectable({
  providedIn: 'root'
})

export class UserService {


  constructor(private httpClient: HttpClient) {

  }
  listUsers() {
    return this.httpClient.get(userUrl + 'api/users' + '/list');
  }
  deleteUser(myObj: any) {
    return this.httpClient.delete(userUrl + 'api/users' + '/' + myObj['id'])

  }
  updateUser(myObj: any) {
    return this.httpClient.put(userUrl + 'api/users' + '/' + myObj['id'], myObj);

  }
  getUser(id: any) {
    return this.httpClient.get(userUrl + 'api/users' + '/' + id)

  }
}
