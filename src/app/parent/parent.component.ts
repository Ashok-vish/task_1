import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  data1!:string

  ngOnInit(): void {console.log(this.data1)}

   
  
  parentdata(eventt:any){
    
    // this.data1=eventt.value
    return eventt.value
    // console.log(this.data1)

    
  }

}
