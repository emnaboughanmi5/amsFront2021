import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  provider: any;
  providers: any;
  constructor(private service: RoleService, private router: Router) { }
  ngOnInit(): void {

  }
  createRole(myform: any) {

    this.service.createRole(myform).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['listRoles']);

      }
    );



  }

}
