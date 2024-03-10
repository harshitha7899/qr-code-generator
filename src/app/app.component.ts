import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        Welcome to QR Code Generator in Angular Applications!
      </h1>
      
      <div>
        <qrcode [qrdata]="'https://www.youtube.com/results?search_query=left+recursion+in+compiler+design'" [width]="256" [errorCorrectionLevel]="'M'"></qrcode>
      </div>
    </div>
  `
})
export class AppComponent {}
