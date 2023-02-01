import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsCardComponent } from './rooms-card.component';

describe('RoomsCardComponent', () => {
  let component: RoomsCardComponent;
  let fixture: ComponentFixture<RoomsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
