import {Injectable, Injector} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpService {

  constructor(injector: Injector) {
    super(injector);
  }

  public getUserByEmail(email: string): Observable<User> {
    return super.get(`api/user/${email}`);
  }

  public updateUser(user: User): Observable<any> {
    return super.put('api/user', user);
  }
}
