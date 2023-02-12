import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog7Component } from './blog7.component';

describe('Blog7Component', () => {
  let component: Blog7Component;
  let fixture: ComponentFixture<Blog7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
