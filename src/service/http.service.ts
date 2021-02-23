import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  protected http: HttpClient;

  protected baseErrorMessage = 'Vyskytla se chyba, prosím kontaktuje administrátora.';

  protected baseApi = 'http://localhost:8080/api';

  protected constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  protected post(url: string, data: any): Observable<any> {
    return this.http.post(this.baseApi + url, data)
      // .pipe(
      // retry(1),
      // catchError(error => this.handleError(error)))
      ;
  }

  protected get(url: string): Observable<any> {
    return this.http.get(this.baseApi + url);
  }

  protected put(url: string, data: any): Observable<any> {
    return this.http.put(this.baseApi + url, data);
  }

  protected delete(url: string): Observable<any> {
    return this.http.delete(this.baseApi + url);
  }
}
