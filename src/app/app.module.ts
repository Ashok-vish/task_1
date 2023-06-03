import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlexComponent } from './alex/alex.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { Text1Component } from './mod2/text1/text1.component';
import { Home1Module } from './home1/home1.module';
import { HomeComponent } from './home1/home/home.component';
import { Mod2Module } from './mod2/mod2.module';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [
    AppComponent,
    AlexComponent,
  ],
  imports: [
    ContactModule,
    BrowserModule,
    Home1Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
