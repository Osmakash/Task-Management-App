import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
  })
  export class LoginComponent {
    username: string = '';
    password: string = '';
  
    constructor(private authService: AuthenticationService, private router: Router) {}
  
    onSubmit() {
      const authenticationSuccessful = this.authService.authenticate(this.username, this.password);
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      if (authenticationSuccessful) {
        this.router.navigate(['/home']);
      } else {
        // Handle authentication failure (optional)
      }
    }
  }