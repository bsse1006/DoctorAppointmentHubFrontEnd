import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-doctor-management',
  templateUrl: './admin-doctor-management.component.html',
  styleUrls: ['./admin-doctor-management.component.css']
})
export class AdminDoctorManagementComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, private router: Router, public doctorService: DoctorService) { }

  doctorId = "";
  doctorName = "";
  doctorSpecialty = "";
  doctorDegrees = "";
  doctorDescription = "";

  ngOnInit(): void 
  {
    if (localStorage.getItem("usertype")!="admin")
    {
      this.router.navigateByUrl('logIn');
    }
    
    this.doctorId = this.activeRouter.snapshot.paramMap.get('id') as string;

    //console.log(this.doctorId);
    //console.log(this.router.snapshot.paramMap.get('id') as string);

    this.doctorService.getDoctorById(this.doctorId).subscribe(
      response => {
        this.doctorName = response.name;
        this.doctorSpecialty = response.specialty;
        this.doctorDegrees = response.degrees;
        this.doctorDescription = response.description;
      }
    )
  }

  updateDoctor(): void
  {
    if (this.doctorName!=""&&this.doctorSpecialty!=""&&this.doctorDegrees!=""&&this.doctorDescription!="")
    {
      this.doctorService.updateDoctor(this.doctorId, this.doctorName, this.doctorSpecialty, this.doctorDegrees, this.doctorDescription).subscribe(
        response => {
          alert("Doctor " + this.doctorName + " has been updated!");
        }
      );
    }
    else
    {
      alert("Fill in all the fields!");
    }
  }

  removeDoctor(): void
  {
    this.doctorService.removeDoctor(this.doctorId).subscribe(
      response => {
        alert("Doctor " + this.doctorName + " has been removed!");
        this.router.navigateByUrl('admin/doctors');
      }
    )
  }
}
