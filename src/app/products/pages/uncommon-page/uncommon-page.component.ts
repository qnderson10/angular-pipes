import { Component } from '@angular/core';
import { Observable, interval, tap, timeout } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Anderson';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'Sir',
    'female': 'Miss',
  }

  changeClient(): void {
    this.name = 'Milly';
    this.gender= 'female';
  }

  // i18n Prulal
  public clients: string[] = ['Anderson','Andres','LaMona','Stuart','Kiara','Milly', 'Janna'];
  public clientsMap = {
    '=0': 'not customers waiting.',
    '=1': 'one customer waiting.',
    '=2': 'two customers waiting.',
    'other': '# customers waiting.',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Anderson',
    age: 23,
    address: 'Bucaramanga, Colombia',
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap: ', value)),
  );

  public promiseValue: Promise<string>= new Promise((resolve, reject)  => {
    setTimeout(() => {
      resolve('We have data in the promise.');
    }, 5000);
  });

}
