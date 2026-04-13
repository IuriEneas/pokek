import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'damageType',
  standalone: true
})
export class DamageTypePipe implements PipeTransform {
  transform(value: string): string {

    let str = value.split('_').join(' ');

    switch (value) {
      case 'double_damage_from':
        return str + ' (-10%)';
      case 'half_damage_from':
        return str + ' (+10%)';
      case 'no_damage_from':
        return str + ' (+5%)';
      default:
        return value;
    }
  }
}
