import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LazyComponent } from './lazy/lazy.component';
import { HarderComponent } from './harder/harder.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyComponent,
    HarderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LazyComponent,
    HarderComponent
  ]
})
export class AppModule { }
