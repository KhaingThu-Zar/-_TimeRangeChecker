import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TimeRangeCheckerComponent } from './time-range-checker/time-range-checker.component';

@NgModule({
  declarations: [
    TimeRangeCheckerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [TimeRangeCheckerComponent]
})
export class AppModule { }
