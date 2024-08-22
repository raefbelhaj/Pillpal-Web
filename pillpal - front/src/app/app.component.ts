import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isLoggedPatient(): boolean {
    // Remplacez cette logique par la vérification appropriée de votre application
    const role = this.authService.getRole();
    return role === 'PATIENT';
  }

  isLoggedDoctor(): boolean {
    // Remplacez cette logique par la vérification appropriée de votre application
    const role = this.authService.getRole();
    return role === 'DOCTOR';
  }
}
