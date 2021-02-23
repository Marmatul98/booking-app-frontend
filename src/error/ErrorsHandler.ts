import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ConnectorService} from '../service/connector.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

  constructor(private connectorService: ConnectorService) {
  }

  handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      console.warn('HttpError');
    } else {
      this.connectorService.showError(error);
    }
  }


}
