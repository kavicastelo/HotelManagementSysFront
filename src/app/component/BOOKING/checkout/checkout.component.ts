import {Component, OnInit} from '@angular/core';
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
  public price: number = 0;
  public priceWithTax: number = 0;
  public advancedPayment: number = 0;

  email = new FormControl('', [Validators.required, Validators.email]);

  postalCode = new FormControl('', [Validators.required]);
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('');
  country = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  newEmail = new FormControl('', [Validators.required, Validators.email]);
  fax = new FormControl('');
  city = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);

  constructor() {
  }

  ngOnInit(): void {

    // @ts-ignore
    this.room = localStorage.getItem('selectedRoom');
    // @ts-ignore
    const adults = Number.parseInt(localStorage.getItem('customers'));
    // @ts-ignore
    const children = Number.parseInt(localStorage.getItem('children'));
    this.capacity = adults + children;
    // @ts-ignore
    this.checkIn = localStorage.getItem('arrivalDate');
    // @ts-ignore
    this.checkOut = localStorage.getItem('departureDate');
    // @ts-ignore
    this.price = Number.parseFloat(localStorage.getItem('roomPrice'));
    this.priceWithTax = this.price + this.price / 100 * 10;
    this.advancedPayment = this.priceWithTax / 2;
  }

  // @ts-ignore
  getErrorMessage() {
    if (this.email.hasError('required') ||
      this.postalCode.hasError('required') ||
      this.firstname.hasError('required') ||
      this.country.hasError('required') ||
      this.address.hasError('required') ||
      this.newEmail.hasError('required') ||
      this.city.hasError('required') ||
      this.phone.hasError('required') ||
      this.state.hasError('required')
    ) {
      return 'You must enter a value';
    }
    else if (this.email.hasError('email')||this.newEmail.hasError('email')){
      return 'Not a valid email';
    }
  }

  reloadPage() {
    window.location.reload()
  }

}
