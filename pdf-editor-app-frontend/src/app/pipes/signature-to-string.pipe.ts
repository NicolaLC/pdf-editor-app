import { Signature } from './../models/signature';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signatureToString'
})
export class SignatureToStringPipe implements PipeTransform {

  transform(value: Signature): unknown {
    return `${value.surname} ${value.name}`;
  }

}
