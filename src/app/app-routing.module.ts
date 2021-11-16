import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "listUsers", component: ListUsersComponent, canActivate: [AuthGaurdService] },
  { path: "updateUser/:id", component: UpdateUserComponent, canActivate: [AuthGaurdService] },

  { path: "listProvider", component: ListProviderComponent, canActivate: [AuthGaurdService] },
  { path: "addProvider", component: AddProviderComponent, canActivate: [AuthGaurdService] },
  { path: "updateProvider/:id", component: UpdateProviderComponent, canActivate: [AuthGaurdService] },
  { path: "listRoles", component: ListRolesComponent, canActivate: [AuthGaurdService] },
  { path: "addRole", component: AddRoleComponent, canActivate: [AuthGaurdService] },

  { path: "logout", component: LogoutComponent, canActivate: [AuthGaurdService] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
