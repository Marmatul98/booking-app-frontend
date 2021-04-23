import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ConnectorService} from '../service/connector.service';
import {DialogService} from '../service/dialog.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

  constructor(private connectorService: ConnectorService,
              private dialogService: DialogService) {
  }

  handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 500) {
        this.showErrorDialog();
        console.warn(error);
      }
    } else {
      this.connectorService.addError(error);
      this.showErrorDialog();
      console.warn(error);
    }
  }

  private showErrorDialog(): void {
    this.dialogService.openOkDialog('Pozor',
      'Vyskytla se neznámá chyba, prosíme opakujte akci později.');
  }
}
