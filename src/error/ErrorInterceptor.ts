import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ConnectorService} from '../service/connector.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private connectorService: ConnectorService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          this.connectorService.showError(err);
        }
        return throwError(err);
      })
    );
  }
}
