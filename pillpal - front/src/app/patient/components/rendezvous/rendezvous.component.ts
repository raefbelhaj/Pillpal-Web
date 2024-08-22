// rendezvous.component.ts

import { Component } from '@angular/core';
import { Rendezvous } from 'src/app/interfaces/rendezvous';
import { RendezvousService } from 'src/app/services/rendezvous-service.service';
@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent {
  appointment: Rendezvous = {
    patientName: '',
    doctor: 'dr_smith',
    appointmentDate: new Date(), // Initialize with the current date or adjust as needed
    appointmentTime: ''
  };

  constructor(private rendezvousService: RendezvousService) {}

  submitForm() {
    this.rendezvousService.createRendezvous(this.appointment).subscribe(
      (      response: any) => {
        console.log('Form submitted successfully:', response);
        this.appointment = {
          patientName: '',
          doctor: 'dr_smith',
          appointmentDate: new Date(),
          appointmentTime: ''
        };
      },
      (      error: any) => {
        console.error('Form submission failed:', error);
      }
    );
  }
}
