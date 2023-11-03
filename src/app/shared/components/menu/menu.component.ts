import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Angular pipes',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Text and arrows',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'Uncommons',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
          },
        ]
      },

      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: 'custom',
          }
        ]
      }
    ];
  }

}
