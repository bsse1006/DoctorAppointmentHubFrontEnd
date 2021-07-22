import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadAdminHome(): void
  {
    this.router.navigateByUrl('admin/dashboard');
  }

  loadAdminAccount(): void
  {
    this.router.navigateByUrl('admin/account');
  }

  loadAdminDoctorDashboard(): void
  {
    this.router.navigateByUrl('admin/doctors');
  }

  adminSignOut(): void
  {
    //sign out from backend
    localStorage.removeItem("username");
    this.router.navigateByUrl('logIn');
  }

}
