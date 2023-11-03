import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public sortBy: keyof Hero | null = null;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'WonderWoman',
      canFly: true,
      color: Color.black,
    },
    {
      name: 'GreenLantern',
      canFly: true,
      color: Color.green,
    },
    {
      name: 'Tucua',
      canFly: true,
      color: Color.red,
    },
  ];

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  assignSort(value: keyof Hero): void{
    this.sortBy = value;
  }
}
