import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsCarouselComponent } from './rooms-carousel.component';

describe('RoomsCarouselComponent', () => {
  let component: RoomsCarouselComponent;
  let fixture: ComponentFixture<RoomsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
