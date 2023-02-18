import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public room = '';
  public capacity: number = 0;
  public checkIn = '';
  public checkOut = '';
  public price:number = 0;
  public priceWithTax:number = 0;
  public advancedPayment:number = 0;

  constructor() { }

  ngOnInit(): void {

    // @ts-ignore
    this.room = localStorage.getItem('selectedRoom');
    // @ts-ignore
    const adults = Number.parseInt(localStorage.getItem('customers'));
    // @ts-ignore
    const children = Number.parseInt(localStorage.getItem('children'));
    this.capacity = adults+children;
    // @ts-ignore
    this.checkIn = localStorage.getItem('arrivalDate');
    // @ts-ignore
    this.checkOut = localStorage.getItem('departureDate');
    // @ts-ignore
    this.price = Number.parseFloat(localStorage.getItem('roomPrice'));
    this.priceWithTax = this.price+this.price/100*10;
    this.advancedPayment = this.priceWithTax/2;
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  reloadPage(){
    window.location.reload()
  }

}
