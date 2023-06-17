import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { PopupComponent } from './popup.component';

const routes: Routes = [
  {
    path: 'popup',
    component: PopupComponent,
    children: [{ path: 'bottom', component: BottomSheetComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupRoutingModule {}
