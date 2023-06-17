import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSheetComponent } from './data-sheet.component';

describe('DataSheetComponent', () => {
  let component: DataSheetComponent;
  let fixture: ComponentFixture<DataSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSheetComponent]
    });
    fixture = TestBed.createComponent(DataSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
