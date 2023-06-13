import { Component, ViewChild } from '@angular/core';
import {
  NgxSignaturePadComponent,
  NgxSignatureOptions,
} from '@eve-sama/ngx-signature-pad';

@Component({
  selector: 'app-canvas-pen',
  templateUrl: './canvas-pen.component.html',
  styleUrls: ['./canvas-pen.component.scss'],
})
export class CanvasPenComponent {
  @ViewChild('signature') signature!: NgxSignaturePadComponent;

  /** You can see more introduction in the below about NgxSignatureOptions */
  public options: NgxSignatureOptions = {
    backgroundColor: '#e4e4e7',
    penColor: '#3b82f6',
    width: 570,
    height: 300,
    css: {
      'border-radius': '16px',
    },
  };

  /** The begin event of sign */
  onBeginSign(): void {}

  /** The end event of sign */
  onEndSign(): void {}

  clear(): void {
    this.signature.clear();
  }
}
