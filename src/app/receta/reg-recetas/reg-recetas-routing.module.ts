import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { Routes, RouterModule } from '@angular/router';

import { RegRecetasPage } from './reg-recetas.page';

const routes: Routes = [
  {
    path: '',
    component: RegRecetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MatExpansionModule, MatCardModule],
})
export class RegRecetasPageRoutingModule {}
