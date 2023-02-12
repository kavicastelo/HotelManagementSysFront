import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog6Component } from './blog6.component';

describe('Blog6Component', () => {
  let component: Blog6Component;
  let fixture: ComponentFixture<Blog6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
