import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, public patientService: PatientService) { }

  ngOnInit(): void {
  }

  loadPatientHome(): void
  {
    this.router.navigateByUrl('patient/dashboard');
  }

  loadPatientAccount(): void
  {
    this.router.navigateByUrl('patient/account');
  }

  loadPatientAppointmentDashboard(): void
  {
    this.router.navigateByUrl('patient/appointments');
  }

  patientSignOut(): void
  {
    this.patientService.patientSignOut().subscribe(
      response => {
        localStorage.removeItem("username");
        localStorage.removeItem("usertype");
        this.router.navigateByUrl('logIn');
      }
    );
  }
}
