import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

  eventbinding(){
  
    console.log(".");
  }

    mouse(){
    console.log("mouse");
  
  }
  condition=false

  text=""

  colours:string='red';


  users = [
    {
      name:"venom",
      age:23
    },
    { 
      name:"shiva",
      age:43
    },
  
    {
      name:"rahul",
     age:29
    },
  
    {
      name:"raj",
     age:49
    },
  
    {
      name:"akki",
      age:20
    }
  ]

   
  user=['anil' , 'raj' , 'shiva' , 'raj' ,'rahul']
  lc=['anil' , 'raj' , 'shiva' , 'raj' ,'rahul']
  
  array=['hello', 'bird', 'table', 'football', 'pipe', 'code'];
  capital=this.array.map(array=>array.toUpperCase())
 
  // pipes example

  getvalue(textinfo:any){
    console.log(textinfo.value);
    
  }


}
