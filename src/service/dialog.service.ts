import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogBodyComponent} from '../app/component/dialog-body/dialog-body.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) {
  }

  public open(title: string, content: string): Observable<boolean> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      title,
      content
    };
    const dialogRef = this.matDialog.open(DialogBodyComponent, dialogConfig);

    return dialogRef.afterClosed();
  }
}
