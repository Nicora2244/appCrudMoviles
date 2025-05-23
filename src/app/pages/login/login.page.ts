import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html'
})
export class LoginPage {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/heroes']);
      },
      (err) => {
        alert('Credenciales inválidas');
      }
    );
  }
}