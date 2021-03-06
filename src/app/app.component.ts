import {Component} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthenticationService} from '../service/authentication.service';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sportcentrum Pustějov';

  public secret = 'Nejde';

  public isMenuCollapsed = true;

  public instagramIcon = faInstagram;
  public facebookIcon = faFacebook;

  constructor(private jwtService: JwtHelperService, private authService: AuthenticationService) {
  }

  public isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

  public logout(): void {
    this.authService.logout();
  }

  public getUserRole(): string {
    return this.authService.getUserRole();
  }
}


