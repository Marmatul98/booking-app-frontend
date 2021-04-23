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
    return super.get('api/sportsField');
  }

  public addSportsField(name: string): Observable<any> {
    return super.post('admin/sportsField', name);
  }

  public deleteSportsField(id: string): Observable<any> {
    return super.delete('admin/sportsField/' + id);
  }
}
