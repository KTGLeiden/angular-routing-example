import { Component } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private readonly loginService: LoginService) {}

  public get loggedIn(): boolean {
    return this.loginService.loggedIn;
  }

  public login(): void {
    this.loginService.login();
  }

  public logout(): void {
    this.loginService.logout();
  }
}
