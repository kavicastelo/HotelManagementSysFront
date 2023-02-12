import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog4Component } from './blog4.component';

describe('Blog4Component', () => {
  let component: Blog4Component;
  let fixture: ComponentFixture<Blog4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
