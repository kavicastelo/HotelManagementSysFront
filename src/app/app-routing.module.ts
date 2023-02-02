import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {HotelBookingComponent} from "./component/hotel-booking/hotel-booking.component";
import {FamilyComponent} from "./component/home/rooms/family/family.component";
import {PenthouseComponent} from "./component/home/rooms/penthouse/penthouse.component";
import {FamilyDoubleComponent} from "./component/home/rooms/family-double/family-double.component";
import {ExecutiveComponent} from "./component/home/rooms/executive/executive.component";
import {JuniorComponent} from "./component/home/rooms/junior/junior.component";
import {BookingList1Component} from "./component/hotel-booking/booking-list1/booking-list1.component";
import {BookingList2Component} from "./component/hotel-booking/booking-list2/booking-list2.component";
import {RoomsCardComponent} from "./component/home/rooms/rooms-card/rooms-card.component";
import {RoomsCarouselComponent} from "./component/home/rooms/rooms-carousel/rooms-carousel.component";
import {AboutComponent} from "./component/about/about.component";

const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"family",component:FamilyComponent},
  {path:"penthouse",component:PenthouseComponent},
  {path:"family-double",component:FamilyDoubleComponent},
  {path:"executive",component:ExecutiveComponent},
  {path:"junior",component:JuniorComponent},
  {path:"room-cards",component:RoomsCardComponent},
  {path:"room-carousel",component:RoomsCarouselComponent},
  {path:"hotel-booking", component:HotelBookingComponent, children:[
      {path:"", redirectTo:"/hotel-booking/list-1", pathMatch:"full"},
      {path:"list-1", component:BookingList1Component},
      {path:"list-2", component:BookingList2Component},
    ]},
  {path:"about", component:AboutComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
