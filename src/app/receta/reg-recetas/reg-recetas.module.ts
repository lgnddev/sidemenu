import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegRecetasPageRoutingModule } from './reg-recetas-routing.module';

import { RegRecetasPage } from './reg-recetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegRecetasPageRoutingModule
  ],
  declarations: [RegRecetasPage]
})
export class RegRecetasPageModule {}
