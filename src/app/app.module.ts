import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode'; // Import QRCodeModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule // Add QRCodeModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
