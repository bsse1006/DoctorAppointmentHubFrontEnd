import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-account-management',
  templateUrl: './patient-account-management.component.html',
  styleUrls: ['./patient-account-management.component.css']
})
export class PatientAccountManagementComponent implements OnInit {

  constructor(public patientService: PatientService) { }

  id = "";
  name = "";
  username = "";
  password = "";
  confirmPassword = "";

  ngOnInit(): void 
  {
    this.patientService.getPatientByUsername().subscribe(
      response => {
        this.id = response.id;
        this.name = response.name;
        this.username = response.email;
      }
    )
  }

  updateAdmin(): void
  {
    if (this.password==this.confirmPassword)
    {
      if (this.username!=""&&this.username!=""&&this.password!="")
      {
        this.patientService.updatePatient(this.id, this.name, this.username, this.password).subscribe(
          response => {
            alert("Your profile has been updated!");
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
