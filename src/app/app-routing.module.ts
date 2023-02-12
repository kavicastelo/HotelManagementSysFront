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
import {DiningComponent} from "./component/dining/dining.component";
import {SpaComponent} from "./component/spa/spa.component";
import {TermsComponent} from "./component/terms/terms.component";
import {ContactComponent} from "./component/contact/contact.component";
import {BlogComponent} from "./component/BLOG/blog/blog.component";
import {BlogList1Component} from "./component/BLOG/blog/blog-list1/blog-list1.component";
import {BlogList2Component} from "./component/BLOG/blog/blog-list2/blog-list2.component";
import {BlogSingleComponent} from "./component/BLOG/blog-single/blog-single.component";
import {CategoryComponent} from "./component/BLOG/blog/category/category.component";
import {CatListComponent} from "./component/BLOG/blog/category/cat-list/cat-list.component";
import {UncategoriesComponent} from "./component/BLOG/blog/category/uncategories/uncategories.component";
import {EntertainmentComponent} from "./component/BLOG/blog/category/entertainment/entertainment.component";
import {CultureComponent} from "./component/BLOG/blog/category/culture/culture.component";
import {LifestyleComponent} from "./component/BLOG/blog/category/lifestyle/lifestyle.component";
import {Blog1Component} from "./component/BLOG/blog-single/blog1/blog1.component";
import {Blog2Component} from "./component/BLOG/blog-single/blog2/blog2.component";
import {Blog3Component} from "./component/BLOG/blog-single/blog3/blog3.component";
import {Blog4Component} from "./component/BLOG/blog-single/blog4/blog4.component";
import {Blog5Component} from "./component/BLOG/blog-single/blog5/blog5.component";
import {Blog6Component} from "./component/BLOG/blog-single/blog6/blog6.component";
import {Blog7Component} from "./component/BLOG/blog-single/blog7/blog7.component";
import {Blog8Component} from "./component/BLOG/blog-single/blog8/blog8.component";
import {BlogCommonComponent} from "./component/BLOG/blog-single/blog-common/blog-common.component";

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
  {path:"dining", component:DiningComponent},
  {path:"spa", component:SpaComponent},
  {path:"terms", component:TermsComponent},
  {path:"contact", component:ContactComponent},
  {path:"blog", component:BlogComponent,children:[
      {path:"",redirectTo: "/blog/list-1", pathMatch: "full"},
      {path:"list-1", component:BlogList1Component},
      {path:"list-2", component:BlogList2Component},
    ]},
  {path:"category", component:CategoryComponent, children:[
      {path:"", component: CatListComponent},
      {path:"uncategorized", component:UncategoriesComponent},
      {path:"Entertainment", component:EntertainmentComponent},
      {path:"culture", component:CultureComponent},
      {path:"lifestyle", component:LifestyleComponent},
    ]},
  {path:"blog-single", component:BlogSingleComponent, children:[
      {path: "", redirectTo: "/blog-single/blog-1", pathMatch: "full"},
      {path: "blog-1", component: Blog1Component, children:[
          {path:"", component:BlogCommonComponent},
        ]},
      {path: "blog-2", component: Blog2Component, children:[
          {path:"", component:BlogCommonComponent},
        ]},
      {path: "blog-3", component: Blog3Component, children:[
          {path:"", component:BlogCommonComponent},
        ]},
      {path: "blog-4", component: Blog4Component, children:[
          {path:"", component:BlogCommonComponent},
        ]},
      {path: "blog-5", component: Blog5Component, children:[
          {path:"", component:BlogCommonComponent},
        ]},
      {path: "blog-6", component: Blog6Component, children:[
          {path:"", component:BlogCommonComponent},
        ]},
      {path: "blog-7", component: Blog7Component, children:[
          {path:"", component:BlogCommonComponent},
        ]},
      {path: "blog-8", component: Blog8Component, children:[
          {path:"", component:BlogCommonComponent},
        ]},
    ]},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
