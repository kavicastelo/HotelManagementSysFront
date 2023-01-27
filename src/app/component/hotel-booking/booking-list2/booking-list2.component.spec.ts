import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingList2Component } from './booking-list2.component';

describe('BookingList2Component', () => {
  let component: BookingList2Component;
  let fixture: ComponentFixture<BookingList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
