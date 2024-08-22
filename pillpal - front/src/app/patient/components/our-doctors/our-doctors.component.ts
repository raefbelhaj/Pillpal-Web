import { Component } from '@angular/core';
import { Doctor } from 'src/app/interfaces/Doctor';
import { DoctorService } from 'src/app/services/doctor-service.service';

@Component({
  selector: 'app-our-doctors',
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.css']
})
export class OurDoctorsComponent {

  doctors!:Doctor[];
  doctor : Doctor={

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

  }

  constructor(private doctorService:DoctorService){

  }

  ngOnInit(){
    this.doctorService.getDoctors().subscribe(
      doc =>{
        this.doctors=doc;
        console.log(this.doctors);
      }
    )
  }

  viewDoctor(id?: number){
    this.doctorService
  }
}
