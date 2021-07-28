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

  admins:Admin[]=[];

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
        if (this.username!=localStorage.getItem("username") as string)
        {
          this.adminService.getAllAdmins().subscribe(
            response => {
              this.admins=response;
  
              var flag = 0;
              this.admins.forEach(admin => {
                if(admin.username==this.username)
                {
                  flag = 1;
                  alert("An admin already exists by this username!");
                }
              });
  
              if(flag==0)
              {
                this.adminService.updateAdmin(this.id, this.username, this.password).subscribe(
                  response => {
                    alert("Your profile has been updated!");
                  }
                );
              }
            }
          );
        }
        else
        {
          this.adminService.updateAdmin(this.id, this.username, this.password).subscribe(
            response => {
              alert("Your profile has been updated!");
            }
          );
        }
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

class Admin
{
  username = "";
  password = "";
}
