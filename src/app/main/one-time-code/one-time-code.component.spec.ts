import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTimeCodeComponent } from './one-time-code.component';

describe('OneTimeCodeComponent', () => {
  let component: OneTimeCodeComponent;
  let fixture: ComponentFixture<OneTimeCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneTimeCodeComponent]
    });
    fixture = TestBed.createComponent(OneTimeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
