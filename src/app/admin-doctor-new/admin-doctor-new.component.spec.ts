import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorNewComponent } from './admin-doctor-new.component';

describe('AdminDoctorNewComponent', () => {
  let component: AdminDoctorNewComponent;
  let fixture: ComponentFixture<AdminDoctorNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDoctorNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDoctorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
