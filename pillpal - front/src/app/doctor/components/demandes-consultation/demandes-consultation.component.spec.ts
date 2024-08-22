import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesConsultationComponent } from './demandes-consultation.component';

describe('DemandesConsultationComponent', () => {
  let component: DemandesConsultationComponent;
  let fixture: ComponentFixture<DemandesConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandesConsultationComponent]
    });
    fixture = TestBed.createComponent(DemandesConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
