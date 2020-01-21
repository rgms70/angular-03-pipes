import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  

  transform(value: string, activo:boolean = true): string {
    let out:string = "";

    if (activo) {
      for(let i=0; i<value.length; i++) {
        out += "*";
      }  
    } else {
      out = value;
    }

    return out;
  }

}
