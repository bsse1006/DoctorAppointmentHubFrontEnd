import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private router: Router, public patientService: PatientService) { }

  ngOnInit(): void {
  }

  name = "";
  username = "";
  password = "";
  confirmPassword = "";

  createPatient(): void
  {
    if (this.password==this.confirmPassword)
    {
      if (this.name!=""&&this.username!=""&&this.password!="")
      {
        this.patientService.patientSignUp(this.name,this.username,this.password).subscribe(
          response => {
            if (response)
            {
              this.patientService.patientLogIn(this.username,this.password).subscribe(
                response => {
                  if (response)
                  {
                    localStorage.setItem("username", response.email);
                    localStorage.setItem("usertype", "patient");
                    alert("Your account has been created!");
                    this.router.navigateByUrl('patient/dashboard');
                  }
                  else
                  {
                    alert("Your account has been created!\nPlease log in to continue!");
                    this.router.navigateByUrl('logIn');
                  }
                }
              );
            }
            else
            {
              alert("Sorry! Try again!");
            }
          }
        );
      }
      else
      {
        alert("Fill in all the fields!");
      }
    }
    else
    {
      alert("Passwords did not match!");
    }
  }
}
