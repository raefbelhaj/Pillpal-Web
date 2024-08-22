import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = `${environment.apiUrl}/auth/signup`; // URL pour l'inscription
  private loginUrl = `${environment.apiUrl}/auth/login`; // URL pour la connexion

  constructor(private http: HttpClient) { }

  // Méthode pour l'inscription
  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(this.registerUrl, userData);
  }

  // Méthode pour la connexion
  loginUser(userData: any): Observable<any> {
    return this.http.post<any>(this.loginUrl, userData);
  }

  getRole(): string {
    // Cette méthode devrait retourner le rôle de l'utilisateur à partir du stockage local ou d'une autre source appropriée
    return localStorage.getItem('role') || '';
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}
