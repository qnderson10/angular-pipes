import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Can fly' | 'Cant fly' {
    return (value)
      ? 'Can fly'
      : 'Cant fly';
  }
}
