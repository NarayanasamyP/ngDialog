import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, DialogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
