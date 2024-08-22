import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.loginUser(this.loginForm.value).subscribe(response => {
        localStorage.setItem('token', response.token);
        const role = this.loginForm.value.role;
        localStorage.setItem('role', role); // Stocker le rôle dans le stockage local

        if (role === 'PATIENT') {
          this.router.navigate(['/home/patient']);
        } else if (role === 'DOCTOR') {
          this.router.navigate(['/home/doctor']);
        }
      }, error => {
        console.error('Login failed', error);
      });
    }
  }
}
