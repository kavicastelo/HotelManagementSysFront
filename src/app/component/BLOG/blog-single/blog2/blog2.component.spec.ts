import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog2Component } from './blog2.component';

describe('Blog2Component', () => {
  let component: Blog2Component;
  let fixture: ComponentFixture<Blog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
