import { Pipe, PipeTransform } from '@angular/core';
// Pipe
@Pipe({
  name: 'pii'
})
export class PiiPipe implements PipeTransform {
  value!: number;
  transform(value:any): unknown {
    value=value*2

    return value;
  }

}
