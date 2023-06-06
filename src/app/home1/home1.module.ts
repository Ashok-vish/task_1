import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod2Module } from '../mod2/mod2.module';
import { HomeComponent } from './home/home.component';
import { Home1RoutingModule } from './home1-routing.module';
import { DirectiveHome1Directive } from './directive-home1.directive';
import { FormsModule } from '@angular/forms';
// import { AppModule } from '../app.module';  

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    HomeComponent,
    DirectiveHome1Directive,
  ],
  imports: [
    Mod2Module,
    CommonModule,
    Home1RoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  
  ],
 exports:[
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
 ]
})
export class Home1Module { }
