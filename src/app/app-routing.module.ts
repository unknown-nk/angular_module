import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './main/table/table.component';
import { HomeComponent } from './main/home/home.component';
import { CalculatorComponent } from './main/calculator/calculator.component';
import { CanvasPenComponent } from './main/canvas-pen/canvas-pen.component';
import { SwiperComponent } from './main/swiper/swiper.component';
import { OneTimeCodeComponent } from './main/one-time-code/one-time-code.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'canvas-pen',
    component: CanvasPenComponent,
  },
  {
    path: 'swiper',
    component: SwiperComponent,
  },
  {
    path: 'one-time-code',
    component: OneTimeCodeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
