import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatoPage } from './plato.page';

const routes: Routes = [
  {
    path: '',
    component: PlatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatoPageRoutingModule {}
