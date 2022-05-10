import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarPreco'
})
export class FormatarPrecoPipe implements PipeTransform {

  transform(preco:number): string {
    return preco.toLocaleString('pt-br', {style:'currency', currency:'BRL'});
  }

}
