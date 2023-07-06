import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlexComponent } from './alex/alex.component';
import { HomeComponent } from './home1/home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent2Component } from './parent2/parent2.component';


const routes: Routes = [
  {path:'parent' , component:ParentComponent },
  {path:'parent2' , component:Parent2Component },
  {path:'child' , component:ChildComponent },
{path:'',loadChildren: () => import('./home1/home1.module').then(m => m.Home1Module)},
{path:'contact',loadChildren:()=>import('./contact/contact.module').then(m=>m.ContactModule)},
{path:'alex',component:AlexComponent},
{path:'',redirectTo:'',pathMatch:'full'},
{path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
