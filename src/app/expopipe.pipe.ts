import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expopipe',
  pure:true
})
export class ExpopipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let rate= Number(value)* 83.89;
    return null;
  }

}
