import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { LogoutComponent } from './logout/logout.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { Interceptor } from './services/interceptor';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddProviderComponent,
    ListProviderComponent,
    UpdateProviderComponent,
    RegistrationComponent,
    ListUsersComponent,
    AddRoleComponent,
    ListRolesComponent,
    LogoutComponent,
    UpdateUserComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
