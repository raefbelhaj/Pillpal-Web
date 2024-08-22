import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VosPatientsComponent } from './vos-patients.component';

describe('VosPatientsComponent', () => {
  let component: VosPatientsComponent;
  let fixture: ComponentFixture<VosPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VosPatientsComponent]
    });
    fixture = TestBed.createComponent(VosPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
