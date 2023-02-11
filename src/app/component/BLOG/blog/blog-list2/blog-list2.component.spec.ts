import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogList2Component } from './blog-list2.component';

describe('BlogList2Component', () => {
  let component: BlogList2Component;
  let fixture: ComponentFixture<BlogList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
