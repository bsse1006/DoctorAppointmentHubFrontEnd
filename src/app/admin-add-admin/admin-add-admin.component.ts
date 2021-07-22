import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-admin',
  templateUrl: './admin-add-admin.component.html',
  styleUrls: ['./admin-add-admin.component.css']
})
export class AdminAddAdminComponent implements OnInit {

  constructor(private router: Router, public adminService: AdminService) { }

  username = "";
  password = "";
  confirmPassword = "";

  ngOnInit(): void {
  }

  createAdmin(): void
  {
    if (this.password==this.confirmPassword)
    {
      if (this.username!=""&&this.password!="")
      {
        this.adminService.addAdmin(this.username, this.password).subscribe(
          response => {
            alert("Admin " + this.username + " has been added!");
            this.router.navigateByUrl('admin/account');
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
