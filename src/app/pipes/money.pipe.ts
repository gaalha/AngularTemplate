import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  readonly NO_MONEY = '00.00';

  readonly REGION = 'es-SV';


  transform(value: any): any {
    if (value === null || value === undefined || isNaN(value)) {
      return this.NO_MONEY;
    }

    return Intl.NumberFormat(
      this.REGION,
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    ).format(value);
  }


}
