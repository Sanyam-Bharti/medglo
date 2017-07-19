import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginService } from "app/login/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private loginServive: LoginService,private router: Router) { }

  ngOnInit() {
    // reset login status
    //this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    let Issuccess = false;

    Issuccess = this.loginServive.login(this.model);

    if (Issuccess) {
      console.log(localStorage.getItem('currentUser'));
      this.router.navigate(['/table']);
    } else {
      console.log(`isSuccess ${Issuccess}`);
    }
    // this.loading = true;
    // this.authenticationService.login(this.model.username, this.model.password)
    //     .subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             this.loading = false;
    //         });
  }


}
