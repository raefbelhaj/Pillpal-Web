
import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/Doctor';
@Injectable({
  providedIn: 'root'
})
export class  DataService {
  private doctor!:Doctor;
  setDoctor(data:Doctor){
    this.doctor=data;
  }

  getDoctor(){
    return this.doctor;
  }
}

