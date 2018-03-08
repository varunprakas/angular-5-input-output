import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorBoxComponent } from './color-box.component';
import { ColorValueComponent } from './color-value.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorBoxComponent,
    ColorValueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
