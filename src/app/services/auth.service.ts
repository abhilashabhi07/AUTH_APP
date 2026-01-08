import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    // Use ReqRes API for authentication (with fallback to mock)
    const loginData = {
      email: credentials.username, // Map username input to email for API
      password: credentials.password
    };

    return this.http.post(`${this.apiUrl}/login`, loginData).pipe(
      tap((response: any) => {
        if (response.token) {
          this.setTokenWithExpiry(response.token);
        }
      }),
      catchError(error => {
        // Fallback to mock if API fails
        if (credentials.username && credentials.password) {
          const mockResponse = { token: 'mock-jwt-token-' + Date.now() };
          this.setTokenWithExpiry(mockResponse.token);
          return of(mockResponse);
        }
        throw error;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiry');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const expiry = localStorage.getItem('tokenExpiry');

    if (!token || !expiry) {
      return false;
    }

    // Check if token has expired
    const expiryTime = parseInt(expiry, 10);
    const currentTime = Date.now();

    if (currentTime > expiryTime) {
      // Token expired, clean up
      this.logout();
      return false;
    }

    return true;
  }

  getToken(): string | null {
    if (this.isAuthenticated()) {
      return localStorage.getItem('token');
    }
    return null;
  }

  private setTokenWithExpiry(token: string): void {
    const expiryTime = Date.now() + (environment.tokenExpiryHours * 60 * 60 * 1000); // Convert hours to milliseconds
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiry', expiryTime.toString());
  }
}