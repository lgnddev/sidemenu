import { NgModule } from '@angular/core';
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
  exports: [RouterModule],
})
export class RegRecetasPageRoutingModule {}
