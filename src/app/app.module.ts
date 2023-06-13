import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './main/table/table.component';
import { HomeComponent } from './main/home/home.component';
import { CalculatorComponent } from './main/calculator/calculator.component';
import { NormalCalComponent } from './main/calculator/normal-cal/normal-cal.component';
import { SwiperComponent } from './main/swiper/swiper.component';
import { CanvasPenComponent } from './main/canvas-pen/canvas-pen.component';
import { NgxSignaturePadModule } from '@eve-sama/ngx-signature-pad';
import { NgPipesModule } from 'ngx-pipes';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableComponent,
    HomeComponent,
    CalculatorComponent,
    NormalCalComponent,
    SwiperComponent,
    CanvasPenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSignaturePadModule,
    NgPipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
