import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { AdminAccountManagementComponent } from './admin-account-management/admin-account-management.component';
import { AdminDoctorDashboardComponent } from './admin-doctor-dashboard/admin-doctor-dashboard.component';
import { AdminDoctorManagementComponent } from './admin-doctor-management/admin-doctor-management.component';
import { AdminDoctorNewComponent } from './admin-doctor-new/admin-doctor-new.component';
import { AdminAddAdminComponent } from './admin-add-admin/admin-add-admin.component';
import { PatientAppointmentDashboardComponent } from './patient-appointment-dashboard/patient-appointment-dashboard.component';
import { PatientAccountManagementComponent } from './patient-account-management/patient-account-management.component';
import { PatientDoctorAppointmentComponent } from './patient-doctor-appointment/patient-doctor-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    AdminDashboardComponent,
    PatientDashboardComponent,
    NavBarComponent,
    AdminNavBarComponent,
    AdminAccountManagementComponent,
    AdminDoctorDashboardComponent,
    AdminDoctorManagementComponent,
    AdminDoctorNewComponent,
    AdminAddAdminComponent,
    PatientAppointmentDashboardComponent,
    PatientAccountManagementComponent,
    PatientDoctorAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
