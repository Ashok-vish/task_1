import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alex',
  templateUrl: './alex.component.html',
  styleUrls: ['./alex.component.css']
})
export class AlexComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  hottle='auidn';
  numberofrooms=19

  value:boolean=false
   invaluecom(){
    this.value=true
  }

  users:any = []
  // names:any

  // getthevalue(insert:string){
  //   this.users.push(
  //     val:insert.value)
  // }
  
  getthevalue(insert:any){
    console.log(insert.value)
    // this.names = insert.value
    // this.users.push(this.names)
    if(insert.value.length>0){
      this.users.push(insert.value)
    }  
  }

  removevalue(i:any){
    this.users.splice(i,1)
  }

  


  
}

  


