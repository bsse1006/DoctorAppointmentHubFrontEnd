import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-appointment-dashboard',
  templateUrl: './patient-appointment-dashboard.component.html',
  styleUrls: ['./patient-appointment-dashboard.component.css']
})
export class PatientAppointmentDashboardComponent implements OnInit {

  constructor(public appointmentService: AppointmentService, public patientService: PatientService,
    public doctorService: DoctorService) { }

  appointments: Appointment[]=[];
  appsWithDocs: AppointmentWithDoctorDetails[]=[];

  patientId = "";

  searchedApps:AppointmentWithDoctorDetails[]=[];

  searchString = "";

  searchApps(event: Event): void
  {
    this.searchString = (event.target as HTMLInputElement).value;

    this.searchedApps=[];

    this.appsWithDocs.forEach(app => {
      //if(doctor.name.substring(0,this.searchString.length)==this.searchString)
      if(app.doctorName.toLowerCase().includes(this.searchString.toLowerCase()))
      {
        this.searchedApps.push(app);
      }
    });
  }

  updateAppointment(id: string, doctorId: string, date: string): void
  {
    this.appointmentService.updateAppointment(id, doctorId, this.patientId, date).subscribe(
      response => {
        alert("Appointment updated successfully!");
      }
    );
  }

  cancelAppointment(id: string): void
  {
    this.appointmentService.deleteAppointment(id).subscribe(
      response => {
        alert("Appointment cancelled successfully!");
        this.ngOnInit();
      }
    );
  }

  ngOnInit(): void 
  {
    this.appointments=[];
    this.appsWithDocs=[];
    this.searchedApps=[];
    this.patientService.getPatientByUsername().subscribe(
      response => {
        this.patientId = response.id;
        this.appointmentService.getAppointmentsByPatientId(this.patientId).subscribe(
          response => {
            this.appointments = response;

            this.appointments.forEach(appointment => {
        
              this.doctorService.getDoctorById(appointment.doctorID).subscribe(
                response => {

                  var app = {
                    id : appointment.id,
                    doctorName : response.name,
                    doctorId : response.id,
                    doctorSpecialty : response.specialty,
                    date : appointment.time
                  }
        
                  this.appsWithDocs.push(app);
                  this.searchedApps.push(app);
                }
              );
            });
          }
        );
      }
    );
  }
}

class Appointment
{
  id = "";
  doctorID = "";
  patientID = "";
  time = "";
}

class AppointmentWithDoctorDetails
{
  id = "";
  doctorName = "";
  doctorId = "";
  doctorSpecialty = "";
  date = "";
}
