import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {SportsField} from '../../../../model/SportsField';
import {SportsFieldService} from '../../../../service/sports-field.service';
import {BookingRequest} from '../../../../model/BookingRequest';
import {BookingService} from '../../../../service/booking.service';
import {MyTime} from '../../../../model/MyTime';
import {SnackBarService} from '../../../../service/snack-bar.service';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {

  public sportsFields: SportsField[] = [];

  public bookingForm = this.formBuilder.group({
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    duration: ['', [Validators.required, Validators.min(20), Validators.max(120)]],
    sportsFieldId: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private bookingService: BookingService, private sportsFieldService: SportsFieldService, private snackBarService: SnackBarService) {
    this.sportsFieldService.getAllSportsFields().subscribe(value => this.sportsFields = value);
  }

  ngOnInit(): void {
  }

  get form(): { [key: string]: AbstractControl } {
    return this.bookingForm.controls;
  }

  public createBooking(): void {
    this.bookingService.createAdminBooking(
      new BookingRequest(
        new Date(this.form.startDate.value),
        new Date(this.form.endDate.value),
        this.parseTimeFromForm(this.form.startTime.value),
        this.parseTimeFromForm(this.form.endTime.value),
        this.form.duration.value,
        this.form.sportsFieldId.value
      )).subscribe(() => this.snackBarService.openSnackBarOk('Rezervace vytvořeny'), error => console.log(error));
  }

  public parseTimeFromForm(value: string): MyTime {
    return new MyTime(
      Number(value.substring(0, 2)),
      Number(value.substring(3))
    );
  }

}
