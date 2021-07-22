import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  adminName = localStorage.getItem("username");

  onlineData: string[]=[];

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getOnlineData().subscribe(
      response => {
        this.onlineData = response;
      }
    );
  }

}
