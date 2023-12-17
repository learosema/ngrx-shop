import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(value: string|number, ...args: unknown[]): unknown {
    return (parseFloat(value.toString()) / 100).toFixed(2);
  }

}
