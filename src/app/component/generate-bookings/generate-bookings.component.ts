import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {BookingService} from '../../../service/booking.service';
import {MyTime} from '../../../model/MyTime';
import {SportsFieldService} from '../../../service/sports-field.service';
import {SportsField} from '../../../model/SportsField';
import {SnackBarService} from '../../../service/snack-bar.service';
import {DialogService} from '../../../service/dialog.service';
import {BookingRequest} from '../../../model/BookingRequest';

@Component({
  selector: 'app-generate-bookings',
  templateUrl: './generate-bookings.component.html',
  styleUrls: ['./generate-bookings.component.css']
})
export class GenerateBookingsComponent implements OnInit {

  public sportsFields: SportsField[] = [];

  public generateBookingsForm = this.formBuilder.group({
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    duration: ['', [Validators.required, Validators.min(20)]],
    sportsFieldId: ['', Validators.required],
    empty: [true, Validators.required]
  });

  get form(): { [key: string]: AbstractControl } {
    return this.generateBookingsForm.controls;
  }

  constructor(private formBuilder: FormBuilder,
              private bookingService: BookingService,
              private sportsFieldService: SportsFieldService,
              private snackBarService: SnackBarService,
              private dialogService: DialogService) {
    this.sportsFieldService.getAllSportsFields().subscribe(value => this.sportsFields = value);
  }

  public createBookings(): void {
    if (this.generateBookingsForm.valid) {
      const content = this.createContentFromRadioButton(this.form.empty.value);
      this.dialogService.open('Pozor', content).subscribe(value => {
        if (value) {
          const bookingRequest = new BookingRequest(
            new Date(this.form.startDate.value),
            new Date(this.form.endDate.value),
            this.parseTimeFromForm(this.form.startTime.value),
            this.parseTimeFromForm(this.form.endTime.value),
            this.form.duration.value,
            this.form.sportsFieldId.value
          );
          let result;
          if (this.form.empty.value) {
            result = this.bookingService.generateBookings(bookingRequest);
          } else {
            result = this.bookingService.createAdminBooking(bookingRequest);
          }
          result.subscribe(() => this.snackBarService.openSnackBarOk('Rezervace vytvořeny'));
        }
      });
    }
  }

  public parseTimeFromForm(value: string): MyTime {
    return new MyTime(
      Number(value.substring(0, 2)),
      Number(value.substring(3))
    );
  }

  ngOnInit(): void {
  }


  private createContentFromRadioButton(empty: boolean): string {
    if (empty) {
      return 'Opravdu chceš vytvořit prázdné rezervace?';
    } else {
      return 'Opravdu chceš vytvořit své rezervace?';
    }
  }
}
