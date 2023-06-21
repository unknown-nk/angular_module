import { Component, ViewChild, ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent {
  @ViewChild('shareArea', { static: true }) shareArea!: ElementRef;
  shareImage: any;
  afterText = '';
  blobContent!: Blob;

  constructor() {}

  ngOnInit(): void {}

  shareButton() {
    // const img:File[] =Object.freeze(Array.from(this.shareImage))
    // const shareData = {
    //   title: '測試',
    //   text: '我在測試分享',
    //   url: 'https://www.youtube.com/?gl=TW&hl=zh-tw',
    //   // files: img,
    // };
    let file = new File([this.blobContent], 'image.png', {
      type: this.blobContent.type,
    });
    let filesArray = [file];
    console.log(navigator.canShare({ files: filesArray }));

    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
      navigator
        .share({
          files: filesArray,
        })
        .then(() => {
          this.afterText = '分享成功';
          console.log('success');
        })
        .catch((error) => {
          this.afterText = '分享失敗';
          console.log('error', error);
        });
    } else {
      console.log('失敗');
    }

    // if (navigator.share) {
    //   navigator
    //     .share(shareData)
    //     .then(() => {
    //       this.afterText = '分享成功';
    //       console.log('success');
    //     })
    //     .catch((error) => {
    //       this.afterText = '分享失敗';
    //       console.log('error', error);
    //     });
    // }
  }

  changeImg() {
    html2canvas(this.shareArea.nativeElement).then((canvas) => {
      // debugger;
      this.shareImage = canvas.toDataURL();
      console.log('canvas.toDataURL() -->' + this.shareImage);
      // document.body.appendChild(canvas);

      canvas.toBlob((blob) => {
        if (blob) {
          this.blobContent = blob;
          // console.log(this.blobContent);

          // 添加条件判断
          var reader = new FileReader();
          // debugger;
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
