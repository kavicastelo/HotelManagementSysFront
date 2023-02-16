import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-list2',
  templateUrl: './booking-list2.component.html',
  styleUrls: ['./booking-list2.component.scss']
})
export class BookingList2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  PenthouseClick(){
    const Penthouse = (<HTMLTitleElement>document.getElementById('Penthouse')).textContent;
    const PenthouseCapacity = (<HTMLTitleElement>document.getElementById('Penthouse-capacity')).textContent;
    const PenthouseChildren = (<HTMLTitleElement>document.getElementById('Penthouse-children')).textContent;
    const PenthousePrice = (<HTMLTitleElement>document.getElementById('Penthouse-price')).textContent;

    // @ts-ignore
    localStorage.setItem('selectedRoom',Penthouse);
    // @ts-ignore
    localStorage.setItem('roomPrice',PenthousePrice);
    // @ts-ignore
    localStorage.setItem('childrenCapacity',PenthouseChildren);
    // @ts-ignore
    localStorage.setItem('roomCapacity',PenthouseCapacity);
  }

  LuxuryClick(){
    const Luxury = (<HTMLTitleElement>document.getElementById('Luxury')).textContent;
    const LuxuryCapacity = (<HTMLTitleElement>document.getElementById('Luxury-capacity')).textContent;
    const LuxuryChildren = (<HTMLTitleElement>document.getElementById('Luxury-children')).textContent;
    const LuxuryPrice = (<HTMLTitleElement>document.getElementById('Luxury-price')).textContent;

    // @ts-ignore
    localStorage.setItem('selectedRoom',Luxury);
    // @ts-ignore
    localStorage.setItem('roomPrice',LuxuryPrice);
    // @ts-ignore
    localStorage.setItem('childrenCapacity',LuxuryChildren);
    // @ts-ignore
    localStorage.setItem('roomCapacity',LuxuryCapacity);
  }

}
