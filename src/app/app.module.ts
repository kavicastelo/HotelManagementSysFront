import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {HotelBookingComponent} from './component/hotel-booking/hotel-booking.component';
import {PenthouseComponent} from './component/home/rooms/penthouse/penthouse.component';
import {FamilyComponent} from './component/home/rooms/family/family.component';
import {FamilyDoubleComponent} from './component/home/rooms/family-double/family-double.component';
import {ExecutiveComponent} from './component/home/rooms/executive/executive.component';
import {JuniorComponent} from './component/home/rooms/junior/junior.component';
import {MatIconModule} from "@angular/material/icon";
import {BookingList1Component} from './component/hotel-booking/booking-list1/booking-list1.component';
import {BookingList2Component} from './component/hotel-booking/booking-list2/booking-list2.component';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HotelBookingComponent,
    PenthouseComponent,
    FamilyComponent,
    FamilyDoubleComponent,
    ExecutiveComponent,
    JuniorComponent,
    BookingList1Component,
    BookingList2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
