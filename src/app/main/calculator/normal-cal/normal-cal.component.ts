import { Component } from '@angular/core';

@Component({
  selector: 'app-normal-cal',
  templateUrl: './normal-cal.component.html',
  styleUrls: ['./normal-cal.component.scss'],
})
export class NormalCalComponent {
  numberArea: string = '0';
  firstNum: string = '';
  secondNum: string = '';
  handle: string = '';
  isTotal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  equal() {
    console.log('=');
    this.secondNum = this.numberArea;
    let firstNum = Number(this.firstNum);
    let secondNum = Number(this.secondNum);
    switch (this.handle) {
      case '+': {
        let total = firstNum + secondNum;
        this.numberArea = String(total);
        break;
      }
      case '-': {
        let total = firstNum - secondNum;
        this.numberArea = String(total);
        break;
      }
      case '×': {
        let total = firstNum * secondNum;
        this.numberArea = String(total);
        break;
      }
      case '÷': {
        let total = firstNum / secondNum;
        this.numberArea = String(total);
        break;
      }
      default: {
        break;
      }
    }
    this.isTotal = true;
  }

  sum() {
    console.log('+');
    this.init();
    this.handle = '+';
  }

  sub() {
    console.log('-');
    this.init();
    this.handle = '-';
  }

  mul() {
    console.log('×');
    this.init();
    this.handle = '×';
  }
  div() {
    console.log('÷');
    this.init();
    this.handle = '÷';
  }

  init() {
    this.firstNum = this.numberArea;
    this.numberArea = '0';
  }

  clickNumber(num: string) {
    if (this.numberArea === '0' || this.isTotal) {
      this.numberArea = num;
      this.isTotal = false;
    } else {
      this.numberArea = this.numberArea.concat(num);
    }
  }

  delete() {
    if (this.numberArea?.length === 1) {
      this.numberArea = '0';
    } else {
      this.numberArea = this.numberArea.substring(
        0,
        this.numberArea?.length - 1
      );
    }
  }

  reset() {
    this.numberArea = '0';
  }
}
