import {Injectable, Injector} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {SportsField} from '../model/SportsField';

@Injectable({
  providedIn: 'root'
})
export class SportsFieldService extends HttpService {

  constructor(injector: Injector) {
    super(injector);
  }

  public getAllSportsFields(): Observable<SportsField[]> {
    return super.get('/sportsField');
  }

  public addSportsField(name: string): Observable<any> {
    return super.post('/sportsField', name);
  }

  public deleteSportsField(id: number): Observable<any> {
    return super.delete('/sportsField/' + id);
  }

}
