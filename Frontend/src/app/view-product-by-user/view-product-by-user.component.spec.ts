import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductByUserComponent } from './view-product-by-user.component';

describe('ViewProductByUserComponent', () => {
  let component: ViewProductByUserComponent;
  let fixture: ComponentFixture<ViewProductByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductByUserComponent]
    });
    fixture = TestBed.createComponent(ViewProductByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
