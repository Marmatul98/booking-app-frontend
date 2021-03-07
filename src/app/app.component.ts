import {Component} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sportcentrum Pustějov';

  public secret = 'Nejde';

  public isMenuCollapsed = true;

  constructor(private jwtService: JwtHelperService, private http: HttpClient) {
    console.log(this.jwtService.decodeToken());
  }

  public isUserLoggedIn(): boolean {
    return !this.jwtService.isTokenExpired();
  }

  public logout(): void {
    sessionStorage.removeItem('access_token');
  }
}


