// rendezvous.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rendezvous } from '../interfaces/rendezvous';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  private apiUrl = 'http://localhost:3000'; // Update with your actual API base URL on port 3000

  constructor(private http: HttpClient) {}

  // Create a new Rendezvous
  createRendezvous(appointment: Rendezvous): Observable<Rendezvous> {
    const url = `${this.apiUrl}/createRendezvous`; // Replace with your API endpoint for creating Rendezvous
    return this.http.post<Rendezvous>(url, appointment);
  }

  // Get all Rendezvous
  getAllRendezvous(): Observable<Rendezvous[]> {
    const url = `${this.apiUrl}/getAllRendezvous`; // Replace with your API endpoint for getting all Rendezvous
    return this.http.get<Rendezvous[]>(url);
  }

  // Get a specific Rendezvous by ID
  getRendezvousById(id: number): Observable<Rendezvous> {
    const url = `${this.apiUrl}/getRendezvous/${id}`; // Replace with your API endpoint for getting Rendezvous by ID
    return this.http.get<Rendezvous>(url);
  }

  // Update a Rendezvous
  updateRendezvous(id: number, appointment: Rendezvous): Observable<Rendezvous> {
    const url = `${this.apiUrl}/updateRendezvous/${id}`; // Replace with your API endpoint for updating Rendezvous
    return this.http.put<Rendezvous>(url, appointment);
  }

  // Delete a Rendezvous by ID
  deleteRendezvous(id: number): Observable<void> {
    const url = `${this.apiUrl}/deleteRendezvous/${id}`; // Replace with your API endpoint for deleting Rendezvous by ID
    return this.http.delete<void>(url);
  }
}
