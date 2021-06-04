import {ErrorHandler, Injectable} from '@angular/core';
import {ConnectorService} from '../service/connector.service';
import {DialogService} from '../service/dialog.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

  constructor(private connectorService: ConnectorService,
              private dialogService: DialogService) {
  }

  handleError(error: Error): void {
    if (error instanceof ErrorEvent) {
      this.showErrorDialog();
    }
  }

  private showErrorDialog(): void {
    this.dialogService.openOkDialog('Pozor',
      'Vyskytla se neznámá chyba, prosíme opakujte akci později.');
  }
}
