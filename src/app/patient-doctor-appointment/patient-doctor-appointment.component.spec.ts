import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDoctorAppointmentComponent } from './patient-doctor-appointment.component';

describe('PatientDoctorAppointmentComponent', () => {
  let component: PatientDoctorAppointmentComponent;
  let fixture: ComponentFixture<PatientDoctorAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDoctorAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDoctorAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
