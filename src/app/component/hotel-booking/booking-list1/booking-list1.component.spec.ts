import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingList1Component } from './booking-list1.component';

describe('BookingList1Component', () => {
  let component: BookingList1Component;
  let fixture: ComponentFixture<BookingList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingList1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
