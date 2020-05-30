import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms'
import { AppComponent }       from './app.component';
import { FormComponent }      from './components/form/form.component'
import {PowerOfPipe} from "./components/form/power-of.pipe";

@NgModule({
  imports: [ BrowserModule,FormsModule],
  declarations: [ AppComponent,FormComponent,PowerOfPipe],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
