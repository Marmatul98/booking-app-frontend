import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './component/register/register.component';
import {BookingComponent} from './component/booking/booking.component';
import {ErrorInterceptor} from '../error/ErrorInterceptor';
import {ErrorsHandler} from '../error/ErrorsHandler';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {GenerateBookingsComponent} from './component/admin/admin-booking/generate-bookings/generate-bookings.component';
import {SportsFieldComponent} from './component/admin/sports-field/sports-field.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {ConfirmBookingsComponent} from './component/admin/admin-booking/confirm-bookings/confirm-bookings.component';
import {AdminBookingComponent} from './component/admin/admin-booking/admin-booking.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {ConfirmDialogComponent} from './component/confirm-dialog/confirm-dialog.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ViewBookingsComponent} from './component/admin/admin-booking/view-bookings/view-bookings.component';
import {MatIconModule} from '@angular/material/icon';
import {LoginComponent} from './component/login/login.component';
import {JwtModule} from '@auth0/angular-jwt';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeLine from '@fullcalendar/resource-timeline';
import {CartDialogComponent} from './component/cart-dialog/cart-dialog.component';
import {ExceptionComponent} from './component/admin/exception/exception.component';
import {ProfileComponent} from './component/profile/profile.component';
import {UsersContactComponent} from './component/profile/users-contact/users-contact.component';
import {UserBookingsComponent} from './component/profile/user-bookings/user-bookings.component';
import {PasswordResetComponent} from './component/passwordReset/password-reset/password-reset.component';
import {PasswordResetRequestComponent} from './component/passwordReset/password-reset-request/password-reset-request.component';
import {HomeComponent} from './component/home/home.component';
import {OkDialogComponent} from './component/ok-dialog/ok-dialog.component';
import {CarouselModule} from "ngx-bootstrap/carousel";
import {SportsHallComponent} from './component/sports-hall/sports-hall.component';
import {OutsideFieldComponent} from './component/outside-field/outside-field.component';
import {MeetingRoomComponent} from './component/meeting-room/meeting-room.component';
import {RestaurantComponent} from './component/restaurant/restaurant.component';
import {AccommodationComponent} from './component/accommodation/accommodation.component';
import {ContactComponent} from './component/contact/contact.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  resourceTimeLine
]);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    BookingComponent,
    GenerateBookingsComponent,
    SportsFieldComponent,
    ConfirmBookingsComponent,
    AdminBookingComponent,
    ConfirmDialogComponent,
    ViewBookingsComponent,
    LoginComponent,
    CartDialogComponent,
    ExceptionComponent,
    ProfileComponent,
    UsersContactComponent,
    UserBookingsComponent,
    PasswordResetComponent,
    PasswordResetRequestComponent,
    HomeComponent,
    OkDialogComponent,
    SportsHallComponent,
    OutsideFieldComponent,
    MeetingRoomComponent,
    RestaurantComponent,
    AccommodationComponent,
    ContactComponent,
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
    MatIconModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem('access_token');
        },
        allowedDomains: ['3.121.71.68:8080', 'localhost:8080'],
      }
    }),
    CarouselModule,
    MatCheckboxModule
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
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule {
}
