import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorComponent } from './junior.component';

describe('JuniorComponent', () => {
  let component: JuniorComponent;
  let fixture: ComponentFixture<JuniorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuniorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
