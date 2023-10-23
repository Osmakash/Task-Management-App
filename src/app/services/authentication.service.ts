import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  authenticate(username: string, password: string): boolean {
    // Replace this with your actual authentication logic
    if (username === 'user' && password === 'password') {
      this.loggedIn.next(true);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.loggedIn.next(false);
  }
}
