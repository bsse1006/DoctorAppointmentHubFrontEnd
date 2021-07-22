import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-doctor-dashboard',
  templateUrl: './admin-doctor-dashboard.component.html',
  styleUrls: ['./admin-doctor-dashboard.component.css']
})
export class AdminDoctorDashboardComponent implements OnInit {

  constructor(private router: Router, public doctorService: DoctorService) { }

  doctors:Doctor[]=[];

  searchedDoctors:Doctor[]=[];

  searchString = "";

  ngOnInit(): void 
  {
    this.doctorService.getAllDoctors().subscribe(
      response => {
        this.doctors = response;
        this.searchedDoctors = response;
        console.log(this.doctors);
      }
    )
  }

  searchDoctors(event: Event): void
  {
    this.searchString = (event.target as HTMLInputElement).value;

    this.searchedDoctors=[];

    this.doctors.forEach(doctor => {
      //if(doctor.name.substring(0,this.searchString.length)==this.searchString)
      if(doctor.name.toLowerCase().includes(this.searchString.toLowerCase()))
      {
        this.searchedDoctors.push(doctor);
      }
    });
  }

  addDoctor(): void
  {
    this.router.navigateByUrl('admin/doctor/new');
  }
}

class Doctor
{
  name = "";
  specialty = "";
  degrees = "";
  description = "";
  id = "";
}
