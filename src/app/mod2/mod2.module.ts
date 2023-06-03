import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Text1Component } from './text1/text1.component';
import { Home1Module } from '../home1/home1.module';



@NgModule({
  declarations: [
    Text1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Text1Component
  ]
})
export class Mod2Module { }
