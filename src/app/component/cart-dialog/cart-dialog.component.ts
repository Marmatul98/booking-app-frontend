import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  public cartForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', [Validators.required, Validators.minLength(9)]]
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  public get form(): { [key: string]: AbstractControl } {
    return this.cartForm.controls;
  }

  public convertToDate(value: string): string {
    return new Date(value).toLocaleDateString();
  }
}
