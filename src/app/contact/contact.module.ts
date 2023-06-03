import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { ContactRoutingModule } from './contact-routing.module';
import { AddressComponent } from './address/address.component';
import { DirecDirective } from './direc.directive';



@NgModule({
  declarations: [
    ContactUsComponent,
    AddressComponent,
    DirecDirective
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  exports:[
    ContactUsComponent,
    AddressComponent
  
  ]
})
export class ContactModule { }
