import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  /** Whether we are logged in, yes or no */
  public loggedIn = false;

  public login(): void {
    this.loggedIn = true;
  }

  public logout(): void {
    this.loggedIn = false;
  }
}
