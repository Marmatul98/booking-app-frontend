import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './component/register/register.component';
import {BookingComponent} from './component/booking/booking.component';
import {ErrorInterceptor} from '../error/ErrorInterceptor';
import {ErrorComponent} from './component/error/error.component';
import {ErrorsHandler} from '../error/ErrorsHandler';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {GenerateBookingsComponent} from './component/generate-bookings/generate-bookings.component';
import {SportsFieldComponent} from './component/sports-field/sports-field.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {ConfirmBookingsComponent} from './component/confirm-bookings/confirm-bookings.component';
import {AdminBookingComponent} from './component/admin-booking/admin-booking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBodyComponent } from './component/dialog-body/dialog-body.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ViewBookingsComponent } from './component/view-bookings/view-bookings.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    BookingComponent,
    ErrorComponent,
    GenerateBookingsComponent,
    SportsFieldComponent,
    ConfirmBookingsComponent,
    AdminBookingComponent,
    DialogBodyComponent,
    ViewBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatCardModule,
    NgbModule,
    MatRadioModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'cs-CZ'
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule {
}
