import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SportsField} from '../../../model/SportsField';
import {SportsFieldService} from '../../../service/sports-field.service';

@Component({
  selector: 'app-sports-field',
  templateUrl: './sports-field.component.html',
  styleUrls: ['./sports-field.component.css']
})
export class SportsFieldComponent implements OnInit {

  public sportsFields: SportsField[] = [];
  public displayedColumns: string[] = ['Id', 'Name', 'Delete'];

  constructor(private formBuilder: FormBuilder, private sportsFieldService: SportsFieldService) {
    this.loadSportsFields();
  }

  public sportsFieldForm = this.formBuilder.group({
    name: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  public deleteSportsField(id: number): void {
    this.sportsFieldService.deleteSportsField(id).toPromise()
      .then(() => this.loadSportsFields());
  }

  private loadSportsFields(): void {
    this.sportsFieldService.getAllSportsFields().subscribe(
      data => this.sportsFields = data
    );
  }

  public onSubmit(): void {
    if (this.sportsFieldForm.valid) {
      this.sportsFieldService.addSportsField(this.sportsFieldForm.controls.name.value).toPromise()
        .then(() => this.loadSportsFields());
    }
  }

}
