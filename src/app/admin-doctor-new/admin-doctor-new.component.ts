import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-doctor-new',
  templateUrl: './admin-doctor-new.component.html',
  styleUrls: ['./admin-doctor-new.component.css']
})
export class AdminDoctorNewComponent implements OnInit {

  constructor(private router: Router, public doctorService: DoctorService) { }

  //doctorId = "";
  doctorName = "";
  doctorSpecialty = "";
  doctorDegrees = "";
  doctorDescription = "";

  ngOnInit(): void {
  }

  createDoctor(): void
  {
    if (this.doctorName!=""&&this.doctorSpecialty!=""&&this.doctorDegrees!=""&&this.doctorDescription!="")
    {
      this.doctorService.addDoctor(this.doctorName, this.doctorSpecialty, this.doctorDegrees, this.doctorDescription).subscribe(
        response => {
          alert("Doctor " + this.doctorName + " has been added!");
          this.router.navigateByUrl('admin/doctor/'+response.id);
        }
      );
    }
    else
    {
      alert("Fill in all the fields!");
    }
  }
}
