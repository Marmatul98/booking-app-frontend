import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConnectorService} from './connector.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http: HttpClient;
  private baseApi = 'http://localhost:8080/';
  private connectorService: ConnectorService;

  protected constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
    this.connectorService = injector.get(ConnectorService);
  }

  protected post(url: string, data: any): Observable<any> {
    return this.http.post(this.baseApi + url, data);
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
