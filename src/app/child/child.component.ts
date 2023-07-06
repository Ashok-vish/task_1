import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input()  data:any    //parent to chid emitter 

  @Output() childdata=new EventEmitter()
  
 
  ngOnInit(): void {

  }

}
