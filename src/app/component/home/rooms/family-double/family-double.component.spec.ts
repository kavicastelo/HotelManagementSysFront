import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyDoubleComponent } from './family-double.component';

describe('FamilyDoubleComponent', () => {
  let component: FamilyDoubleComponent;
  let fixture: ComponentFixture<FamilyDoubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyDoubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
