import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-account-management',
  templateUrl: './admin-account-management.component.html',
  styleUrls: ['./admin-account-management.component.css']
})
export class AdminAccountManagementComponent implements OnInit {

  constructor(private router: Router, public adminService: AdminService) { }

  id = "";
  username = "";
  password = "";
  confirmPassword = "";

  ngOnInit(): void 
  {
    if (localStorage.getItem("usertype")!="admin")
    {
      this.router.navigateByUrl('logIn');
    }
    this.adminService.getAdminByUsername().subscribe(
      response => {
        this.id = response.id;
        this.username = response.username;
      }
    );
  }

  updateAdmin(): void
  {
    if (this.password==this.confirmPassword)
    {
      if (this.username!=""&&this.password!="")
      {
        this.adminService.updateAdmin(this.id, this.username, this.password).subscribe(
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

  addAdmin(): void
  {
    this.router.navigateByUrl('admin/new');
  }
}
