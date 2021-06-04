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
import {DialogService} from '../service/dialog.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private connectorService: ConnectorService,
              private dialogService: DialogService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (ev: HttpEvent<any>) => {
          if (ev instanceof HttpResponse) {
            this.connectorService.removeError();
          }
        }),
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 500) {
            this.showErrorDialog();
          }
          this.connectorService.addError(err);
        }
        return throwError(err);
      })
    );
  }

  private showErrorDialog(): void {
    this.dialogService.openOkDialog('Pozor',
      'Vyskytla se neznámá chyba, prosíme opakujte akci později.');
  }
}
