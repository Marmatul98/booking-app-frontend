import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Booking} from '../../../model/Booking';
import {UserService} from '../../../service/user.service';
import {AuthenticationService} from '../../../service/authentication.service';
import {BookingService} from '../../../service/booking.service';
import {User} from '../../../model/User';
import {Router} from "@angular/router";
import {DialogService} from "../../../service/dialog.service";

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  public selectedBookings: Booking[] = [];
  public user!: User;

  public cartForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: new FormControl({value: '', disabled: true}, Validators.required),
    phoneNumber: ['+420',
      [Validators.required,
        Validators.pattern('[+][0-9]{12}'),
        Validators.minLength(13),
        Validators.maxLength(13)]]
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<CartDialogComponent>,
              private userService: UserService,
              private authService: AuthenticationService,
              private bookingService: BookingService,
              private dialogService: DialogService,
              private router: Router) {
  }

  public get form(): { [key: string]: AbstractControl } {
    return this.cartForm.controls;
  }

  ngOnInit(): void {
    this.selectedBookings = this.data.selectedBookings;
    this.userService.getUserByEmail(this.authService.getUserEmail())
      .subscribe(value => {
        this.user = value;
        this.cartForm.patchValue({
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          phoneNumber: value.phoneNumber
        });
      });
  }

  public convertToDate(value: string): string {
    return new Date(value).toLocaleDateString();
  }

  public deselectBooking(booking: Booking): void {
    booking.isSelected = false;
    for (let i = 0; i < this.selectedBookings.length; i++) {
      if (this.selectedBookings[i] === booking) {
        this.selectedBookings.splice(i, 1);
      }
    }
    if (this.selectedBookings.length === 0) {
      this.dialogRef.close();
    }
  }

  public onSubmit(): void {
    if (this.cartForm.valid) {
      this.user.phoneNumber = this.form.phoneNumber.value;
      this.user.firstName = this.form.firstName.value;
      this.user.lastName = this.form.lastName.value;
      this.bookingService.requestBookings(this.user, this.selectedBookings)
        .toPromise()
        .then(() => {
          this.dialogRef.close();
          this.dialogService.openOkDialog('Žádost úspěsná',
            'Žádost o vytvoření rezervace byla úspěšně vytvořena,' +
            ' o dalším postupu budete informováni v emailu');
          this.router.navigate(['']).then();
        });
    }
  }
}
