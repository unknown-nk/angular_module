import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-one-time-code',
  templateUrl: './one-time-code.component.html',
  styleUrls: ['./one-time-code.component.scss'],
})
export class OneTimeCodeComponent {
  @ViewChild('inputElement', { static: false }) inputElement!: ElementRef;

  ngAfterViewInit() {
    this.inputElement.nativeElement.addEventListener('input', () => {
      this.inputElement.nativeElement.style.setProperty(
        '--_otp-digit',
        this.inputElement.nativeElement.selectionStart
      );
    });
  }
}
