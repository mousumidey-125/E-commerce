import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InActiveComponent } from './in-active.component';

describe('InActiveComponent', () => {
  let component: InActiveComponent;
  let fixture: ComponentFixture<InActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InActiveComponent]
    });
    fixture = TestBed.createComponent(InActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
