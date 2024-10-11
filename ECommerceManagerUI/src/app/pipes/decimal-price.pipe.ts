import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalPrice',
  standalone: true
})
export class DecimalPricePipe implements PipeTransform {

  transform(value: number, digits: number = 2): string {
    const divider = Math.pow(10, digits);
    return `${value / divider}`;
  }

}
