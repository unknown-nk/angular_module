import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPenComponent } from './canvas-pen.component';

describe('CanvasPenComponent', () => {
  let component: CanvasPenComponent;
  let fixture: ComponentFixture<CanvasPenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasPenComponent]
    });
    fixture = TestBed.createComponent(CanvasPenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
