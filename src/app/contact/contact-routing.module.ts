import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddressComponent } from './address/address.component';

const routes: Routes =[
    {path:"contact", component:ContactUsComponent},
    {path:"address",component:AddressComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ContactRoutingModule  { }