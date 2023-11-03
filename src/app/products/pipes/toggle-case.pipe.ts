import { Pipe, PipeTransform } from '@angular/core';

// anderson | toggleCase = ANDERSON
// ANDERSON | toggleCase = anderson
@Pipe({
  name: 'toggleCase',
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {


    return (toUpper)
      ? value.toUpperCase()
      : value.toLowerCase();
  }
}
