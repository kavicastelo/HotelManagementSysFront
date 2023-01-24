import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenthouseComponent } from './penthouse.component';

describe('PenthouseComponent', () => {
  let component: PenthouseComponent;
  let fixture: ComponentFixture<PenthouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenthouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenthouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
