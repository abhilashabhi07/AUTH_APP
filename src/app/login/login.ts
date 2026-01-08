import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };
  loading = false;
  errorMessage = '';
  submitted = false;

  get isValidPassword(): boolean {
    return this.hasUpperCase && this.hasLowerCase && this.hasNumeric && this.hasMinLength;
  }

  get hasUpperCase(): boolean {
    return /[A-Z]/.test(this.credentials.password);
  }

  get hasLowerCase(): boolean {
    return /[a-z]/.test(this.credentials.password);
  }

  get hasNumeric(): boolean {
    return /\d/.test(this.credentials.password);
  }

  get hasMinLength(): boolean {
    return this.credentials.password.length >= 6;
  }

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.submitted = true;

    // Check if fields are empty or password doesn't meet requirements
    if (!this.credentials.username || !this.credentials.password || !this.isValidPassword) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.authService.login(this.credentials).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      }
    });
  }
}