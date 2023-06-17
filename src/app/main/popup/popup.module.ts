import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupRoutingModule } from './popup-routing.module';

import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [BottomSheetComponent],
  imports: [CommonModule, PopupRoutingModule],
})
export class PopupModule {}
