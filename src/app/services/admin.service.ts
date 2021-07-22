import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { } 

  public apiUrl = "http://localhost:5002/api" ;

  public adminLogIn(username: string, password: string){
    var body = {
      "username": username,
      "password": password
    }

    return this.http.post<any>(this.apiUrl + "/admin/authenticate", body);
  }

  public addAdmin(username: string, password: string){
    var body = {
      "username": username,
      "password": password
    }

    var adminName = localStorage.getItem("username");

    var param = {
      params: new HttpParams().set('adminName', adminName as string)
    }

    return this.http.post<any>(this.apiUrl + "/admin/add", body, param);
  }

  public updateAdmin(id: string, username: string, password: string){
    var body = {
      "id": id,
      "username": username,
      "password": password
    }

    var previousUsername = localStorage.getItem("username");

    var param = {
      params: new HttpParams().set('adminName', previousUsername as string)
    }

    return this.http.post<any>(this.apiUrl + "/admin/update", body, param);
  }

  public getAdminByUsername ()
  {
    var username = localStorage.getItem("username");

    return this.http.get<any>(this.apiUrl + "/admin/getByUsername", {
      params: new HttpParams().set('adminName', username as string)
    });
  }
}
