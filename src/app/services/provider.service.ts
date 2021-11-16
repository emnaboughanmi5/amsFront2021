import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const urlProviders = environment.urlBack;

@Injectable({
  providedIn: 'root'
})

export class ProviderService {
  urlProviders = 'http://127.0.0.1:82/providers';

  provider: any;
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');
  token = sessionStorage.getItem('token');
  constructor(private Http: HttpClient) { }
  listProviders() {

    return this.Http.get(urlProviders + 'providers' + '/list');
  }
  createProvider(myform: any) {
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    return this.Http.post(urlProviders + 'providers' + '/add', this.provider);

  }
  updateProvider(myObj: any) {
    return this.Http.put(urlProviders + 'providers' + '/' + myObj['id'], myObj);

  }
  deleteProvider(myObj: any) {
    return this.Http.delete(urlProviders + 'providers' + '/' + myObj['id'])

  }
  getProvider(id: any) {
    return this.Http.get(urlProviders + 'providers' + '/' + id)

  }
}
