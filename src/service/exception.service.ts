import {Injectable, Injector} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {ExceptionLog} from '../model/ExceptionLog';

@Injectable({
  providedIn: 'root'
})
export class ExceptionService extends HttpService {

  constructor(injector: Injector) {
    super(injector);
  }

  public getAllExceptionLogs(): Observable<ExceptionLog[]> {
    return super.get('admin/exceptionLog');
  }

  public deleteExceptionLog(id: number): Observable<any> {
    return super.delete(`admin/exceptionLog/${id}`);
  }
}
