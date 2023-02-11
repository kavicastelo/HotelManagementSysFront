import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncategoriesComponent } from './uncategories.component';

describe('UncategoriesComponent', () => {
  let component: UncategoriesComponent;
  let fixture: ComponentFixture<UncategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
