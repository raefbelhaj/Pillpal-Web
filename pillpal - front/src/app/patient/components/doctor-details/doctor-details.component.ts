import { Component } from '@angular/core';
import { Doctor } from 'src/app/interfaces/Doctor';
import { DoctorService } from 'src/app/services/doctor-service.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent {

  objdata:Doctor ;
  doctors!:Doctor[];
  doctor:Doctor={
    id :0,
    name: '',
    email: '',
    phone: 0,
    cin: '',
    matricule: '',
    password:'',
   dateOfBirth:'',
    speciality: '',
    role: '',
    adress:'',
  };

  constructor(private route:ActivatedRoute, private doctorService:DoctorService,private dataService:DataService){
    this.objdata = this.dataService.getDoctor();
    console.log(this.objdata);
  }



}
