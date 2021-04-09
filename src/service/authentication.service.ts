import {Injectable, Injector} from '@angular/core';
import {RegisterData} from '../model/RegisterData';
import {HttpService} from './http.service';
import {Router} from '@angular/router';
import {SnackBarService} from './snack-bar.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService {

  constructor(injector: Injector, private router: Router, private snackBarService: SnackBarService, private jwtService: JwtHelperService) {
    super(injector);
  }

  public register(registerData: RegisterData): void {
    super.post('auth/register', registerData)
      .subscribe(() => {
        this.router.navigate(['login']).then();
        this.snackBarService.openSnackBarOk('Registrace úspěšná, můžete se přihlásit');
      });
  }

  public login(email: string, password: string): void {
    super.post('auth/login', {email, password})
      .subscribe(res => {
        sessionStorage.setItem('access_token', res.jwt);
        this.router.navigate(['/']).then();
        this.snackBarService.openSnackBarOk('Příhlášení bylo úspešné');
      });
  }

  public isUserLoggedIn(): boolean {
    return !this.jwtService.isTokenExpired();
  }

  public getUserEmail(): string {
    return this.jwtService.decodeToken().sub;
  }

  public logout(): void {
    sessionStorage.removeItem('access_token');
    this.snackBarService.openSnackBarOk('Odlášení bylo úspěšné');
    this.router.navigate(['/']).then();
  }

  public getUserRole(): string {
    if (this.isUserLoggedIn()) {
      return this.jwtService.decodeToken().roles[0];
    } else {
      return 'NOT_LOGGED_IN';
    }
  }

  public requestPasswordReset(email: string): Observable<any> {
    return super.post('auth/requestPasswordReset', email);
  }

  public resetPassword(newPassword: string, token: string): Observable<any> {
    return super.put('auth/resetPassword', {newPassword, token});
  }
}
