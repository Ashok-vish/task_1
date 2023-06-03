import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { Mod2Module } from '../mod2/mod2.module';
import { Text1Component } from '../mod2/text1/text1.component';
import { HomeComponent } from './home/home.component';
import { Home1RoutingModule } from './home1-routing.module';
import { RouterModule } from '@angular/router';
import { DirectiveHome1Directive } from './directive-home1.directive';


@NgModule({
  declarations: [
    HomeComponent,
    DirectiveHome1Directive
  ],
  imports: [
    Mod2Module,
    CommonModule,
    Home1RoutingModule
   ]
})
export class Home1Module { }
