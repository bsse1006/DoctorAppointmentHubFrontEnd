import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { } 

  public apiUrl = "http://localhost:5002/api" ;

  public getAllDoctors(){

    var username = localStorage.getItem("username");
    
    return this.http.get<any>(this.apiUrl + "/doctor/getAll", {
      params: new HttpParams().set('userName', username as string)
    });
  }

  public getDoctorById(doctorId: string){

    var username = localStorage.getItem("username");
    
    return this.http.get<any>(this.apiUrl + "/doctor/getById", {
      params: new HttpParams().set('userName', username as string).set('doctorId', doctorId)
    });
  }

  public addDoctor(name: string, specialty: string, degrees: string, description: string){
    var body = {
      "name": name,
      "specialty": specialty,
      "degrees": degrees,
      "description": description
    }

    var username = localStorage.getItem("username");

    var param = {
      params: new HttpParams().set('adminName', username as string)
    }

    return this.http.post<any>(this.apiUrl + "/doctor/add", body, param);
  }

  public updateDoctor(id: string, name: string, specialty: string, degrees: string, description: string){
    var body = {
      "id": id,
      "name": name,
      "specialty": specialty,
      "degrees": degrees,
      "description": description
    }

    var username = localStorage.getItem("username");

    var param = {
      params: new HttpParams().set('adminName', username as string)
    }

    return this.http.post<any>(this.apiUrl + "/doctor/update", body, param);
  }

  public removeDoctor(doctorId: string){

    var username = localStorage.getItem("username");
    
    return this.http.get<any>(this.apiUrl + "/doctor/delete", {
      params: new HttpParams().set('adminName', username as string).set('doctorId', doctorId)
    });
  }
}
