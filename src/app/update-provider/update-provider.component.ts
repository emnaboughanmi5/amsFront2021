import { Component, OnInit } from '@angular/core';
import { ProviderService } from './../services/provider.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {
  public id: any;
  private providerToUpdate: any;
  public name: any;
  public email: any;
  public address: any;
  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );

    this.providerToUpdate = this.service.getProvider(this.id).subscribe(
      (response) => {
        this.name = response["name"];
        this.email = response["email"];
        this.address = response["address"];
      }
    );
  }


  updateProvider() {
    this.providerToUpdate = {
      'name': this.name,
      'email': this.email,
      'address': this.address,
      'id': this.id
    }
    this.service.updateProvider(this.providerToUpdate).subscribe(
      (response) => {

        this.router.navigate(['listProvider']);
      }
    );

  }

}