import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// Locale app settings
import localeEsCO from "@angular/common/locales/es-CO";
import localeFrCA from "@angular/common/locales/fr-CA";

import { registerLocaleData } from "@angular/common";
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { HeroColorPipe } from './pipes/hero-color.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

registerLocaleData(localeEsCO);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [
    ProductsComponent,
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    // Pipes
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ]
})
export class ProductsModule { }
