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

  admins:Admin[]=[];

  ngOnInit(): void {
    if (localStorage.getItem("usertype")!="admin")
    {
      this.router.navigateByUrl('logIn');
    }
  }

  createAdmin(): void
  {
    if (this.password==this.confirmPassword)
    {
      if (this.username!=""&&this.password!="")
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
              this.adminService.addAdmin(this.username, this.password).subscribe(
                response => {
                  alert("Admin " + this.username + " has been added!");
                  this.router.navigateByUrl('admin/account');
                }
              );
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

class Admin
{
  username = "";
  password = "";
}
