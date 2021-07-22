import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { AppointmentService } from '../services/appointment.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-doctor-appointment',
  templateUrl: './patient-doctor-appointment.component.html',
  styleUrls: ['./patient-doctor-appointment.component.css']
})
export class PatientDoctorAppointmentComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, private router: Router, 
    public doctorService: DoctorService, public appointMentService: AppointmentService,
    private patientService: PatientService) { }

  doctorId = "";
  doctorName = "";
  doctorSpecialty = "";
  doctorDegrees = "";
  doctorDescription = "";

  patientId = "";
  date = "";

  ngOnInit(): void 
  {
    if (localStorage.getItem("usertype")!="patient")
    {
      this.router.navigateByUrl('logIn');
    }
    
    this.doctorId = this.activeRouter.snapshot.paramMap.get('id') as string;

    this.doctorService.getDoctorById(this.doctorId).subscribe(
      response => {
        this.doctorName = response.name;
        this.doctorSpecialty = response.specialty;
        this.doctorDegrees = response.degrees;
        this.doctorDescription = response.description;
      }
    ); 

    this.patientService.getPatientByUsername().subscribe(
      response => {
        this.patientId = response.id as string;
      }
    );
  }

  createAppointment(): void
  {
    if (this.date!="")
    {
      var appointments : Appointment[]=[];
      this.appointMentService.getAppointmentsByPatientId(this.patientId).subscribe(
        response => {
          appointments = response;

          var flag = 0;

          appointments.forEach(appointment => {

            if (appointment.doctorID==this.doctorId)
            {
              alert("You already have an appointment with this doctor!\nPlease check the Appointments tab to update!");
              flag=1;
            }
          });

          if (flag==0)
          {
            this.appointMentService.addAppointment(this.doctorId, this.patientId, this.date).subscribe(
              response => {
                alert("An appointment with Doctor " + this.doctorName + " has been confirmed!");
              }
            );
          }
        }
      );
    }
    else
    {
      alert("Select a date for appointment!");
    }
  }
}

class Appointment
{
  id = "";
  doctorID = "";
  patientID = "";
  time = "";
}
