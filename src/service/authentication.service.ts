import {Injectable, Injector} from '@angular/core';
import {RegisterData} from '../model/RegisterData';
import {Observable} from 'rxjs';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService {

  constructor(injector: Injector) {
    super(injector);
  }

  public register(registerData: RegisterData): Observable<any> {
    return super.post('/register', registerData);
  }
}
