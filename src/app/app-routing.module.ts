import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAccountManagementComponent } from './admin-account-management/admin-account-management.component';
import { AdminDoctorDashboardComponent } from './admin-doctor-dashboard/admin-doctor-dashboard.component';
import { AdminDoctorManagementComponent } from './admin-doctor-management/admin-doctor-management.component';
import { AdminDoctorNewComponent } from './admin-doctor-new/admin-doctor-new.component';
import { AdminAddAdminComponent } from './admin-add-admin/admin-add-admin.component';
import { PatientAccountManagementComponent } from './patient-account-management/patient-account-management.component';
import { PatientAppointmentDashboardComponent } from './patient-appointment-dashboard/patient-appointment-dashboard.component';
import { PatientDoctorAppointmentComponent } from './patient-doctor-appointment/patient-doctor-appointment.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, },
  { path: 'logIn', component: LoginPageComponent, },
  { path: 'signUp', component: SignupPageComponent, },
  { path: 'patient/dashboard', component: PatientDashboardComponent, },
  { path: 'admin/dashboard', component: AdminDashboardComponent, },
  { path: 'admin/account', component: AdminAccountManagementComponent, },
  { path: 'admin/doctors', component: AdminDoctorDashboardComponent, },
  { path: 'admin/doctor/new', component: AdminDoctorNewComponent, },
  { path: 'admin/doctor/:id', component: AdminDoctorManagementComponent, },
  { path: 'admin/new', component: AdminAddAdminComponent, },
  { path: 'patient/account', component: PatientAccountManagementComponent, },
  { path: 'patient/appointments', component: PatientAppointmentDashboardComponent, },
  { path: 'patient/doctor/:id', component: PatientDoctorAppointmentComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
