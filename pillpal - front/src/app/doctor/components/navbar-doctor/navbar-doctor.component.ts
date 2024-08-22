import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar-doctor',
  templateUrl: './navbar-doctor.component.html',
  styleUrls: ['./navbar-doctor.component.css']
})
export class NavbarDoctorComponent {
  constructor(private authService: AuthService, private router: Router) {}
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home/signin']); // Rediriger vers la page de connexion ou d'accueil
  }

}
