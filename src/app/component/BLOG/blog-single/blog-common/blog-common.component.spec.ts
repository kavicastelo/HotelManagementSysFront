import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCommonComponent } from './blog-common.component';

describe('BlogCommonComponent', () => {
  let component: BlogCommonComponent;
  let fixture: ComponentFixture<BlogCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
