import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss'],
})
export class ScreenshotComponent {
  shareImage: any;
  @ViewChild('screenshotAreaID', { static: true }) screenshotArea!: ElementRef;

  changeImg() {
    html2canvas(this.screenshotArea.nativeElement, {
      useCORS: true,
    }).then((canvas) => {
      this.shareImage = canvas.toDataURL();
      canvas.toBlob((blob) => {
        if (blob) {
          // 添加条件判断
          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function () {
            let base64data = reader.result;
            console.log('Base64--> ' + base64data);
          };
        }
      });
    });
  }
}
