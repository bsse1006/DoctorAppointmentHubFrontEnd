import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

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
    //sign out from backend
    localStorage.removeItem("username");
    this.router.navigateByUrl('logIn');
  }
}
