import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCalComponent } from './normal-cal.component';

describe('NormalCalComponent', () => {
  let component: NormalCalComponent;
  let fixture: ComponentFixture<NormalCalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalCalComponent]
    });
    fixture = TestBed.createComponent(NormalCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
