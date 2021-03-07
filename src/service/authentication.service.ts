import {Injectable, Injector} from '@angular/core';
import {RegisterData} from '../model/RegisterData';
import {HttpService} from './http.service';
import {Router} from '@angular/router';
import {SnackBarService} from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService {

  constructor(injector: Injector, private router: Router, private snackBarService: SnackBarService) {
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
}
