import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from 'src/app/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClient
  ],
  providers: [DataService],//provide our service here
  bootstrap: [AppComponent]
})
export class AppModule { }
