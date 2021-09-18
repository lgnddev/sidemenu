import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnsaladaPageRoutingModule } from './ensalada-routing.module';

import { EnsaladaPage } from './ensalada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnsaladaPageRoutingModule
  ],
  declarations: [EnsaladaPage]
})
export class EnsaladaPageModule {}
