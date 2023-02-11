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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {MatCheckboxModule} from "@angular/material/checkbox";
import { RoomsCardComponent } from './component/home/rooms/rooms-card/rooms-card.component';
import { RoomsCarouselComponent } from './component/home/rooms/rooms-carousel/rooms-carousel.component';
import { AboutComponent } from './component/about/about.component';
import { DiningComponent } from './component/dining/dining.component';
import { SpaComponent } from './component/spa/spa.component';
import { TermsComponent } from './component/terms/terms.component';
import { ContactComponent } from './component/contact/contact.component';
import { BlogComponent } from './component/BLOG/blog/blog.component';
import { BlogSingleComponent } from './component/BLOG/blog-single/blog-single.component';
import { BlogList1Component } from './component/BLOG/blog/blog-list1/blog-list1.component';
import { BlogList2Component } from './component/BLOG/blog/blog-list2/blog-list2.component';
import { CategoryComponent } from './component/BLOG/blog/category/category.component';
import { UncategoriesComponent } from './component/BLOG/blog/category/uncategories/uncategories.component';
import { EntertainmentComponent } from './component/BLOG/blog/category/entertainment/entertainment.component';
import { LifestyleComponent } from './component/BLOG/blog/category/lifestyle/lifestyle.component';
import { CultureComponent } from './component/BLOG/blog/category/culture/culture.component';
import { CatListComponent } from './component/BLOG/blog/category/cat-list/cat-list.component';

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
    BookingList2Component,
    RoomsCardComponent,
    RoomsCarouselComponent,
    AboutComponent,
    DiningComponent,
    SpaComponent,
    TermsComponent,
    ContactComponent,
    BlogComponent,
    BlogSingleComponent,
    BlogList1Component,
    BlogList2Component,
    CategoryComponent,
    UncategoriesComponent,
    EntertainmentComponent,
    LifestyleComponent,
    CultureComponent,
    CatListComponent
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
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
