import {Component} from '@angular/core';
import {Route} from '../../utils/route';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {UserRole} from "../../models/user-role";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  readonly Route = Route;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }


  login(): void {
    this.router.navigate([Route.LOGIN]);
  }

  logout(): void {
    this.authService.logout();
  }
}
