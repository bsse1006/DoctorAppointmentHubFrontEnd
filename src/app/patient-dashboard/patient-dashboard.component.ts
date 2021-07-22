import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

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
}

class Doctor
{
  name = "";
  specialty = "";
  degrees = "";
  description = "";
  id = "";
}
