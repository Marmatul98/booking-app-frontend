import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {ConnectorService} from '../service/connector.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private connectorService: ConnectorService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          this.connectorService.removeError();
        }
      }),
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          console.warn('HttpError');
          this.connectorService.addError(err);
        }
        return throwError(err);
      })
    );
  }
}
