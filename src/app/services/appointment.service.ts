import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  public apiUrl = "http://localhost:5002/api" ;

  public addAppointment(doctorID: string, patientID: string, time: string){
    var body = {
      "doctorID": doctorID,
      "patientID": patientID,
      "time": time
    }

    var username = localStorage.getItem("username");

    var param = {
      params: new HttpParams().set('userName', username as string)
    }

    return this.http.post<any>(this.apiUrl + "/appointment/add", body, param);
  }

  public getAppointmentsByPatientId(patientId: string){

    var username = localStorage.getItem("username");
    
    return this.http.get<any>(this.apiUrl + "/appointment/getByPatientId", {
      params: new HttpParams().set('patientID', patientId).set('userName', username as string)
    });
  }

  public updateAppointment(id: string, doctorID: string, patientID: string, time: string){
    var body = {
      "id": id,
      "doctorID": doctorID,
      "patientID": patientID,
      "time": time
    }

    var username = localStorage.getItem("username");

    var param = {
      params: new HttpParams().set('userName', username as string)
    }

    return this.http.post<any>(this.apiUrl + "/appointment/update", body, param);
  }

  public deleteAppointment(appointmentId: string){

    var username = localStorage.getItem("username");
    
    return this.http.get<any>(this.apiUrl + "/appointment/delete", {
      params: new HttpParams().set('userName', username as string).set('appointmentId', appointmentId)
    });
  }
}
