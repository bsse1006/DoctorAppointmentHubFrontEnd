import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAccountManagementComponent } from './patient-account-management.component';

describe('PatientAccountManagementComponent', () => {
  let component: PatientAccountManagementComponent;
  let fixture: ComponentFixture<PatientAccountManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAccountManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
