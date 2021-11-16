import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user: any = {};
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: "",
      email: "",
      password: "",
    })
  }

  signup() {
    this.userService.register(this.signupForm.value).subscribe((data) => {
      this.router.navigate(["/login"]);
    });
  }

}
