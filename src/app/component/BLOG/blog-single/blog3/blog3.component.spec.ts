import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog3Component } from './blog3.component';

describe('Blog3Component', () => {
  let component: Blog3Component;
  let fixture: ComponentFixture<Blog3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
