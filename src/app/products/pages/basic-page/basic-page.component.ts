import { Component } from '@angular/core';

@Component({
  selector: 'products-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = 'anderson';
  public nameupper: string = 'ANDERSON';
  public fullName: string = 'AndeRsON gONZAlez';
  public customDate: Date = new Date();
}
