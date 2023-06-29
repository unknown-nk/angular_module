import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { OneTimeCodeComponent } from './main/one-time-code/one-time-code.component';
import { EditorComponent } from './main/editor/editor.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DataSheetComponent } from './main/data-sheet/data-sheet.component';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './main/popup/popup.component';
import { PopupModule } from './main/popup/popup.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MediaComponent } from './main/media/media.component';
import { ScreenshotComponent } from './main/media/screenshot/screenshot.component';
import { GameComponent } from './main/game/game.component';
// import { FacebookModule } from 'ngx-facebook';

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
    OneTimeCodeComponent,
    EditorComponent,
    DataSheetComponent,
    PopupComponent,
    MediaComponent,
    ScreenshotComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    NgxSignaturePadModule,
    NgPipesModule,
    EditorModule,
    RouterModule,
    PopupModule,
    AppRoutingModule,
    // FacebookModule.forRoot(),
  ],
  // TODO: 這邊處理了網頁重整後空白的問題 但路由上會多一個#
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
