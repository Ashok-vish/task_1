import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDirectiveHome1]'
})
export class DirectiveHome1Directive {

  constructor(private element: ElementRef ) { 

  element.nativeElement.style.backgroundColor = 'yellow';

  }

}
