import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  adminName = localStorage.getItem("username");

  onlineData: string[]=[];

  numberOfPatients = "";

  constructor(private router: Router, public adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getOnlineData().subscribe(
      response => {
        this.onlineData = response;
        this.numberOfPatients = this.onlineData.length as unknown as string;
      }
    );
  }

  addAdmin(): void
  {
    this.router.navigateByUrl('admin/new');
  }

  addDoctor(): void
  {
    this.router.navigateByUrl('admin/doctor/new');
  }
}
