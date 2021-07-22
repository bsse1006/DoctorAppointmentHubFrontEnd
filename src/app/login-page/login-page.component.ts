import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  usertype = "";
  username = "";
  password = "";

  constructor(private router: Router, public patientService: PatientService, public adminService: AdminService) { }

  ngOnInit(): void {
  }

  authenticate(): void 
  {
    if (this.usertype == "patient"&&this.username!=""&&this.password!="")
    {
      this.patientService.patientLogIn(this.username,this.password).subscribe(
        response => {
          if (response)
          {
            localStorage.setItem("username", response.email);
            this.router.navigateByUrl('patient/dashboard');
          }
          else
          {
            alert("Wrong credentials!");
          }
        }
      );
    }
    else if (this.usertype=="admin"&&this.username!=""&&this.password!="")
    {
      this.adminService.adminLogIn(this.username,this.password).subscribe(
        response => {
  
          if (response)
          {
            console.log(response);
            localStorage.setItem("username", response.username);
            this.router.navigateByUrl('admin/dashboard');
            //console.log(localStorage.getItem("usertype"));
          }
          else
          {
            alert("Wrong credentials!");
            //this.router.navigateByUrl('admin/dashboard');
          }
          //localStorage.setItem("usertype", "admin");
          //console.log(localStorage.getItem("usertype"));
        }
      );
    }
    else
    {
      alert("Fill in all the fields!")
    }
  }
}
