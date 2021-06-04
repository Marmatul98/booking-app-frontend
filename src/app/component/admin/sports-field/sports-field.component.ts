import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SportsField} from '../../../../model/SportsField';
import {SportsFieldService} from '../../../../service/sports-field.service';
import {DialogService} from '../../../../service/dialog.service';

@Component({
  selector: 'app-sports-field',
  templateUrl: './sports-field.component.html',
  styleUrls: ['./sports-field.component.css']
})
export class SportsFieldComponent implements OnInit {

  public sportsFields: SportsField[] = [];
  public sportsFieldForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder,
              private sportsFieldService: SportsFieldService,
              private dialogService: DialogService,
  ) {
    this.loadSportsFields();
  }

  ngOnInit(): void {
  }

  public deleteSportsField(sportsField: SportsField): void {
    this.dialogService.openConfirmDialog('Pozor', `Opravdu chceš odstranit hřiště ${sportsField.name}`)
      .subscribe(value => {
        if (value) {
          this.sportsFieldService.deleteSportsField(sportsField.id)
            .toPromise()
            .then(() => this.loadSportsFields());
        }
      });
  }

  public onSubmit(): void {
    if (this.sportsFieldForm.valid) {
      this.sportsFieldService.addSportsField(
        this.sportsFieldForm.controls.name.value)
        .toPromise()
        .then(() => this.loadSportsFields());
    }
  }

  public groupSportsField(sportsField: SportsField): void {
    this.sportsFieldService.groupSportsField(sportsField.id)
      .toPromise()
      .then(() => this.loadSportsFields());
  }

  public ungroupSportsField(sportsField: SportsField): void {
    this.sportsFieldService.ungroupSportsField(sportsField.id)
      .toPromise()
      .then(() => this.loadSportsFields());
  }

  private loadSportsFields(): void {
    this.sportsFieldService.getAllSportsFields()
      .subscribe(
        data => this.sportsFields = data
      );
  }

}
