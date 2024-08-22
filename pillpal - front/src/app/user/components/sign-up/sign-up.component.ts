import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';// Adjust the path to your AuthService

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formData = {
    email: '',
    password: '',
    fullName: '',
    role: ''
  };

  roles = {
    DOCTOR: 'Doctor',
    PATIENT: 'Patient'
    // Add more roles as needed
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(signupForm: NgForm): void {
    if (signupForm.valid) {
      this.authService.registerUser(this.formData).subscribe(
        response => {
          console.log('User registered successfully:', response);
        },
        error => {
          console.error('Error registering user:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
