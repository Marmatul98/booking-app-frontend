import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../app/component/confirm-dialog/confirm-dialog.component';
import {Observable} from 'rxjs';
import {OkDialogComponent} from '../app/component/ok-dialog/ok-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) {
  }

  public openConfirmDialog(title: string, content: string): Observable<boolean> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      title,
      content
    };
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, dialogConfig);

    return dialogRef.afterClosed();
  }

  public openOkDialog(title: string, content: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title,
      content
    };

    this.matDialog.open(OkDialogComponent, dialogConfig);
  }
}
