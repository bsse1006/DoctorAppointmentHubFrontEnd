import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorDashboardComponent } from './admin-doctor-dashboard.component';

describe('AdminDoctorDashboardComponent', () => {
  let component: AdminDoctorDashboardComponent;
  let fixture: ComponentFixture<AdminDoctorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDoctorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDoctorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
