import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ProviderService {
  urlProviders = environment.urlBack + '/providers';

  provider: any;
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');
  token = sessionStorage.getItem('token');
  constructor(private Http: HttpClient) { }
  listProviders() {

    return this.Http.get(this.urlProviders + '/list');
  }
  createProvider(myform: any) {
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    return this.Http.post(this.urlProviders + '/add', this.provider);

  }
  updateProvider(myObj: any) {
    return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj);

  }
  deleteProvider(myObj: any) {
    return this.Http.delete(this.urlProviders + '/' + myObj['id'])

  }
  getProvider(id: any) {
    return this.Http.get(this.urlProviders + '/' + id)

  }
}
