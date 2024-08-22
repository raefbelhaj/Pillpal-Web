import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/Doctor';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable , catchError , of } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl='http://localhost:8005/createDoctor';
  options={
    headers:new HttpHeaders({'content-Type':'application/json'})
  } 

  constructor(private http:HttpClient ) { }


  //adddd 
  addDoctor(doctor: Doctor): Observable<Doctor> {

    return this.http.post<Doctor>(
      'http://localhost:3000/createDoctor',doctor,this.options);
    
  }

  //view 
  getDoctors():Observable<Doctor[]> {

    return this.http.get<Doctor[]>('http://localhost:3000/getDoctors').pipe(catchError((err) => {
      console.error('Error fetching tournaments:', err);
      return of([]);
    }))
    
  }
  getDoctor(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(
      'http://localhost:3000/findDoctor/' + id
    )
  }
 

}
