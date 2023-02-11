import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogList1Component } from './blog-list1.component';

describe('BlogList1Component', () => {
  let component: BlogList1Component;
  let fixture: ComponentFixture<BlogList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogList1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
