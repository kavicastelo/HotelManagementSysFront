import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-list1',
  templateUrl: './booking-list1.component.html',
  styleUrls: ['./booking-list1.component.scss']
})
export class BookingList1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ContemporaryClick(){
    const Contemporary = (<HTMLTitleElement>document.getElementById('Contemporary')).textContent;
    const ContemporaryCapacity = (<HTMLTitleElement>document.getElementById('Contemporary-capacity')).textContent;
    const ContemporaryChildren = (<HTMLTitleElement>document.getElementById('Contemporary-children')).textContent;
    const ContemporaryPrice = (<HTMLTitleElement>document.getElementById('Contemporary-price')).textContent;

    // @ts-ignore
    localStorage.setItem('selectedRoom',Contemporary);
    // @ts-ignore
    localStorage.setItem('roomPrice',ContemporaryPrice);
    // @ts-ignore
    localStorage.setItem('childrenCapacity',ContemporaryChildren);
    // @ts-ignore
    localStorage.setItem('roomCapacity',ContemporaryCapacity);
  }

  ExecutiveClick(){
    const Executive = (<HTMLTitleElement>document.getElementById('Executive')).textContent;
    const ExecutiveCapacity = (<HTMLTitleElement>document.getElementById('Executive-capacity')).textContent;
    const ExecutiveChildren = (<HTMLTitleElement>document.getElementById('Executive-children')).textContent;
    const ExecutivePrice = (<HTMLTitleElement>document.getElementById('Executive-price')).textContent;

    // @ts-ignore
    localStorage.setItem('selectedRoom',Executive);
    // @ts-ignore
    localStorage.setItem('roomPrice',ExecutivePrice);
    // @ts-ignore
    localStorage.setItem('childrenCapacity',ExecutiveChildren);
    // @ts-ignore
    localStorage.setItem('roomCapacity',ExecutiveCapacity);
  }

  ClassicClick(){
    const Classic = (<HTMLTitleElement>document.getElementById('Classic')).textContent;
    const ClassicCapacity = (<HTMLTitleElement>document.getElementById('Classic-capacity')).textContent;
    const ClassicChildren = (<HTMLTitleElement>document.getElementById('Classic-children')).textContent;
    const ClassicPrice = (<HTMLTitleElement>document.getElementById('Classic-price')).textContent;

    // @ts-ignore
    localStorage.setItem('selectedRoom',Classic);
    // @ts-ignore
    localStorage.setItem('roomPrice',ClassicPrice);
    // @ts-ignore
    localStorage.setItem('childrenCapacity',ClassicChildren);
    // @ts-ignore
    localStorage.setItem('roomCapacity',ClassicCapacity);
  }

  JuniorClick(){
    const Junior = (<HTMLTitleElement>document.getElementById('Junior')).textContent;
    const JuniorCapacity = (<HTMLTitleElement>document.getElementById('Junior-capacity')).textContent;
    const JuniorChildren = (<HTMLTitleElement>document.getElementById('Junior-children')).textContent;
    const JuniorPrice = (<HTMLTitleElement>document.getElementById('Junior-price')).textContent;

    // @ts-ignore
    localStorage.setItem('selectedRoom',Junior);
    // @ts-ignore
    localStorage.setItem('roomPrice',JuniorPrice);
    // @ts-ignore
    localStorage.setItem('childrenCapacity',JuniorChildren);
    // @ts-ignore
    localStorage.setItem('roomCapacity',JuniorCapacity);
  }

  StandardClick(){
    const Standard = (<HTMLTitleElement>document.getElementById('Standard')).textContent;
    const StandardCapacity = (<HTMLTitleElement>document.getElementById('Standard-capacity')).textContent;
    const StandardChildren = (<HTMLTitleElement>document.getElementById('Standard-children')).textContent;
    const StandardPrice = (<HTMLTitleElement>document.getElementById('Standard-price')).textContent;

    // @ts-ignore
    localStorage.setItem('selectedRoom',Standard);
    // @ts-ignore
    localStorage.setItem('roomPrice',StandardPrice);
    // @ts-ignore
    localStorage.setItem('childrenCapacity',StandardChildren);
    // @ts-ignore
    localStorage.setItem('roomCapacity',StandardCapacity);
  }

  Executive1Click(){
    const Executive1 = (<HTMLTitleElement>document.getElementById('Executive1')).textContent;
    const Executive1Capacity = (<HTMLTitleElement>document.getElementById('Executive1-capacity')).textContent;
    const Executive1Children = (<HTMLTitleElement>document.getElementById('Executive1-children')).textContent;
    const Executive1Price = (<HTMLTitleElement>document.getElementById('Executive1-price')).textContent;

    // @ts-ignore
    localStorage.setItem('selectedRoom',Executive1);
    // @ts-ignore
    localStorage.setItem('roomPrice',Executive1Price);
    // @ts-ignore
    localStorage.setItem('childrenCapacity',Executive1Children);
    // @ts-ignore
    localStorage.setItem('roomCapacity',Executive1Capacity);
  }

  BeachClick(){
    const Beach = (<HTMLTitleElement>document.getElementById('Beach')).textContent;
    const BeachCapacity = (<HTMLTitleElement>document.getElementById('Beach-capacity')).textContent;
    const BeachChildren = (<HTMLTitleElement>document.getElementById('Beach-children')).textContent;
    const BeachPrice = (<HTMLTitleElement>document.getElementById('Beach-price')).textContent;

    // @ts-ignore
    localStorage.setItem('selectedRoom',Beach);
    // @ts-ignore
    localStorage.setItem('roomPrice',BeachPrice);
    // @ts-ignore
    localStorage.setItem('childrenCapacity',BeachChildren);
    // @ts-ignore
    localStorage.setItem('roomCapacity',BeachCapacity);
  }

  ExclusiveClick(){
    const Exclusive = (<HTMLTitleElement>document.getElementById('Exclusive')).textContent;
    const ExclusiveCapacity = (<HTMLTitleElement>document.getElementById('Exclusive-capacity')).textContent;
    const ExclusiveChildren = (<HTMLTitleElement>document.getElementById('Exclusive-children')).textContent;
    const ExclusivePrice = (<HTMLTitleElement>document.getElementById('Exclusive-price')).textContent;

    // @ts-ignore
    localStorage.setItem('selectedRoom',Exclusive);
    // @ts-ignore
    localStorage.setItem('roomPrice',ExclusivePrice);
    // @ts-ignore
    localStorage.setItem('childrenCapacity',ExclusiveChildren);
    // @ts-ignore
    localStorage.setItem('roomCapacity',ExclusiveCapacity);
  }

}
