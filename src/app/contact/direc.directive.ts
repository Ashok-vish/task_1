import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appDirec]'
})
export class DirecDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color= 'red  ';

   }  

}
