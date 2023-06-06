import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlexComponent } from './alex/alex.component';
import { Home1Module } from './home1/home1.module';
// import { Mod2Module } from './mod2/mod2.module';
import { ContactModule } from './contact/contact.module';
import { PiiPipe } from './pii.pipe';





@NgModule({
  declarations: [
    AppComponent,
    AlexComponent,
    PiiPipe,
    
   
  ],
  imports: [
    ContactModule,
    BrowserModule,
    AppRoutingModule,
    Home1Module
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
