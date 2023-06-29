import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  menuHasOpen: boolean = true;

  clickMenu() {
    console.log('hi');
    this.menuHasOpen = !this.menuHasOpen;
  }
}
