import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private http: HttpClient) { } 

  public apiUrl = "http://localhost:5002/api" ;

  public patientLogIn(username: string, password: string){
    var body = {
      "email": username,
      "password": password
    }

    return this.http.post<any>(this.apiUrl + "/patient/authenticate", body);
  }

  public patientSignUp(name: string, username: string, password: string){
    var body = {
      "name": name,
      "email": username,
      "password": password
    }

    return this.http.post<any>(this.apiUrl + "/patient/add", body);
  }

  public updatePatient(id: string, name: string, username: string, password: string){
    var body = {
      "id": id,
      "name": name,
      "email": username,
      "password": password
    }

    var previousUsername = localStorage.getItem("username");

    var param = {
      params: new HttpParams().set('userName', previousUsername as string)
    }

    return this.http.post<any>(this.apiUrl + "/patient/update", body, param);
  }

  public getPatientByUsername ()
  {
    var username = localStorage.getItem("username");

    return this.http.get<any>(this.apiUrl + "/patient/getByEmail", {
      params: new HttpParams().set('userName', username as string)
    });
  }
}
