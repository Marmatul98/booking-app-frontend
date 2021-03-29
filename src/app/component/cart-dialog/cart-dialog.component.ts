import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Booking} from '../../../model/Booking';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  public selectedBookings: Booking[] = [];

  public cartForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', [Validators.required, Validators.minLength(9)]]
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<CartDialogComponent>) {
  }

  public get form(): { [key: string]: AbstractControl } {
    return this.cartForm.controls;
  }
  ngOnInit(): void {
    this.selectedBookings = this.data.selectedBookings;
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
}
